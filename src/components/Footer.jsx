import Img from "../assets/MinervaBlue.png"

function Footer () {
    return (
        <>
        <section className="w-full bg-[#ECECEC] flex-row justify-center sm:py-24 py-12 sm:px-4 ">
            <div className="sm:w-full w-full grid grid-cols-2 text-center sm:mx-auto">
                    <div className="bg-[#ECECEC] place-items-end sm:mr-9 mr-1">
                        <img src={Img} alt="Minerva" loading="lazy" className="mb-10 sm:w-[70%]"></img>
                        <p className="text-justify text-[#333333] sm:text-base text-xs font-medium sm:w-[337px] w-[158px] sm:h-[162px] sm:text-[17px] sm:ml-11 sm:text-right">
                            Kami berusaha menjangkau semua lapisan masyarakat yang layak untuk mendapatkan pendidikan dengan Kelas Offline yang akan kami buat gratis  untuk anak-anak yang belum mendapatkan kesempatan 
                            untuk bersekolah.
                        </p>
                        <h3 className="sm:text-3xl mx-auto sm:mx-0 text-xl mt-6 font-bold sm:text-right">Di Yogyakarta</h3>
                        <p className="text-sm mt-3 font-semibold sm:text-right text-justify">Jl. Laksda Adisucipto No.Km 8,5, Kalongan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
                    </div>
                    <div className="bg-[#ECECEC] place-items-start sm:ml-5">
                        <h1 className="sm:text-4xl text-2xl text-left w-[240px] h-[36px] mb-8 text-[#333333] font-bold sm:mb-7">Kontak kami</h1>
                        <h2 className="flex sm:text-[26px] text-[24px] text-left w-[240px] h-[36px] text-[#333333] font-bold ">Email :</h2>
                            <p className="sm:text-[20px] text-[9px]  text-right sm:w-3 sm:mb-[10px] h-[26px] text-[#333333] font-bold">learnwminerva2021@gmail.com</p>
                        <h2 className="flex text-[26px] text-left w-[240px] h-[36px] text-[#333333] font-bold">Instagram : </h2>
                            <p className="sm:text-[20px] text-[9px] text-right sm:w-3 sm:mb-[10px] h-[26px] text-[#333333] font-bold">@learn.minerva_</p>
                        <h2 className="flex-col text-[26px] text-left w-[240px] h-[36px] text-[#333333] font-bold sm:mb-5">Whatsapp : 
                            
                            <div className="flex-col">
                                <button className="sm:mt-2 ml-6 mt-10 sm:w-[200px] w-[100px] h-[45px] rounded-2xl bg-[#0080FF] text-lg font-bold text-white hover:bg-[#0056d6] transition duration-200">
                                    Chat
                                </button>
                                <p className="text-xs sm:w-[83%] ml-6 w-[100px] font-medium text-[#A9A9A9] text-center">or</p>
                                <button className="sm:w-[200px] ml-6 w-[100px] h-[45px] rounded-2xl border border-spacing-0 border-[#0080FF] bg-white text-lg font-bold text-[#0080FF] hover:bg-slate-500 transition duration-200">
                                    Another
                                </button>
                            </div>
                        </h2>
                    </div>
                    </div>
                <p className="mt-10 text-center text-lg font-semibold text-[#333333]">@copyright 2021</p>
        </section>
        </>
    )
}

export default Footer;