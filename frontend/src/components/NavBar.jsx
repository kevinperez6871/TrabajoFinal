

const NavBar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl">Proyecto final</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a classnameName="mr-5 hover:text-gray-900">Inicio</a>
                        <a className="mr-5 hover:text-gray-900">Quienes somos</a>
                        <a className="mr-5 hover:text-gray-900">Contactenos</a>
                        <a className="mr-5 hover:text-gray-900">API</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button

                    </button>
                </div>
            </header>


        </>
    )
}

export default NavBar