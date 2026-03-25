import img from "../assets/BlankMinerva.png"

function Testimoni () {
    return (
    <>
        <section className="w-full flex sm:h-[720px] 2xl:h-[840px] bg-[#007bff] justify-center flex-col items-center py-24 px-4">
            <div className="flex-row">
                <h1 className="sm:w-[467px] sm:h-[55px] xl:h-[70px] sm:text-5xl text-[32px] text-center mx-auto mb-3 font-bold text-white">Testimoni</h1>
                <div className="sm:w-[800px] sm:h-[300px] w-[250px] h-[150px] bg-white rounded-md sm:rounded-2xl shadow-xl sm:flex flex transition duration-300 mb-9 text-center">
                
                    <img src={img} alt="testimoni" loading="lazy" className="rounded-md sm:rounded-2xl w-[50px] sm:w-[300px] sm:h-[300px] h-[50px]"></img>
                    
                    <div className="sm:flex flex-col sm:p-5 sm:w-[400px] w-[120px] sm:h-[300px]">
                        <h1 className="sm:w-[112px] w-[195px] h-[50px] rounded-md sm:h-[36px] text-[#333333] py-3 sm:py-0 font-bold sm:text-3xl text-xl sm:mb-1">unknown</h1>
                        <p className="sm:w-[400px] w-[195px] h-[36px] text-[#333333] font-serif font-light sm:text-xl text-[11px] sm:text-left text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <button className="bg-[#007bff] border-2 border-spacing-0 border-white w-5 h-5 rounded-full hover:bg-white"></button>
                <button className="bg-[#007bff] border-2 border-spacing-0 border-white w-5 h-5 rounded-full hover:bg-white"></button>
                <button className="bg-[#007bff] border-2 border-spacing-0 border-white w-5 h-5 rounded-full hover:bg-white"></button>
            </div>
        </section>
    </>
    )
}

export default Testimoni;