import express from 'express';
const router = express.Router();
import {
    registro,
    perfil,
    confirmarCuenta,
    autenticar,}
    from '../controllers/authControllers.js'

router.post('/', registro);
router.get('/perfil', perfil);
router.get('/confirmar/:token', confirmarCuenta);//:token -> parametro dinamico
router.post('/login', autenticar);

export default router;