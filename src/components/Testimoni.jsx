import img from "../assets/BlankMinerva.png"

function Testimoni () {
    return (
    <>
        <section className="w-full flex h-[720px] bg-[#007bff] justify-center flex-col items-center py-24 px-4">
            <div className="flex-row">
                <h1 className="w-[467px] h-[55px] text-5xl text-center mx-auto mb-3 font-bold text-white">Testimoni</h1>
                <div className="w-[800px] h-[300px] bg-white rounded-2xl shadow-xl flex transition duration-300 mb-9 text-center">
                    <img src={img} alt="testimoni" loading="lazy" className="rounded-2xl h-[300px]"></img>
                    <div className="flex flex-col p-5 w-[400px]">
                        <h1 className="w-[112px] h-[36px] text-[#333333] font-bold text-3xl mt-10">unknown</h1>
                        <p className="w-[400px] h-[36px] text-[#333333] font-serif font-light text-xl text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
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