function Home() {
    return (
        
            <div className="
                bg-cyan-400
                flex 
                justify-center
                py-32
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-1 md:grid-cols-2 
                    text-white
                    gap-8 md:gap-0
                    px-4
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        text-center
                        ">
                        <h2 className='
                            text-3xl md:text-5xl 
                            font-bold
                            text-black
                            '>
                            Seja bem vindo!
                        </h2>
                        <p className='text-base md:text-xl text-black'>Aqui você encontra Medicamentos e Cosméticos!</p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                            >
                                Cadastrar Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://i.imgur.com/ETRgx50.png"
                            alt="Imagem Página Home"
                            className='w-2/3 max-w-xs md:max-w-md lg:max-w-lg'
                        />
                    </div>
                </div>
            </div>
        
    )
}

export default Home