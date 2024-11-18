import express from 'express';
const router = express.Router();
import {registro,perfil,confirmarCuenta,autenticar}from '../controllers/authControllers.js'
import checkAuth from '../middleware/autMiddleware.js';


router.post('/', registro);
router.get('/confirmar/:token', confirmarCuenta);//:token -> parametro dinamico
router.post('/login', autenticar);

router.get('/perfil',checkAuth, perfil);
export default router; 