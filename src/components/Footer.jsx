import Img from "../assets/MinervaBlue.png"

function Footer () {
    return (
        <>
        <section className="w-full bg-[#ECECEC] flex-row justify-center py-24 px-4 ">
            <div className="w-full max-w-3xl grid grid-cols-2 text-center mx-auto">
                <div className="flex">
                    <div className="bg-[#ECECEC] place-items-end mr-9">
                        <img src={Img} alt="Minerva" loading="lazy" className="mb-10 w-[70%]"></img>
                        <p className="text-right text-[#333333] text-base font-medium w-[337px] h-[162px] text-[17px] ml-11">
                            Kami berusaha menjangkau semua lapisan masyarakat yang layak untuk mendapatkan pendidikan dengan Kelas Offline yang akan kami buat gratis  untuk anak-anak yang belum mendapatkan kesempatan 
                            untuk bersekolah.
                        </p>
                        <h3 className="text-3xl mt-6 font-bold">Di Yogyakarta</h3>
                        <p className="text-sm mt-3 font-semibold text-right">Jl. Laksda Adisucipto No.Km 8,5, Kalongan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
                    </div>
                    <div className="bg-[#ECECEC] place-items-start">
                        <h1 className="text-4xl text-left w-[240px] h-[36px] text-[#333333] font-bold mb-7">Kontak kami</h1>
                        <h2 className="flex text-[26px] text-left w-[240px] h-[36px] text-[#333333] font-bold mb-5">Email : <p className="text-[20px] ml-6 text-right w-3 mt-[7px] h-[36px] text-[#333333] font-bold">learnwminerva2021@gmail.com</p></h2>
                        <h2 className="flex text-[26px] text-left w-[240px] h-[36px] text-[#333333] font-bold mb-5">Instagram : <p className="text-[20px] ml-6 text-right w-3 mt-[7px] h-[36px] text-[#333333] font-bold">@learn.minerva_</p></h2>
                        <h2 className="flex-col text-[26px] text-left w-[240px] h-[36px] text-[#333333] font-bold mb-5">Whatsapp : 
                            <button className="mt-2 w-[200px] h-[45px] rounded-2xl bg-[#0080FF] text-lg font-bold text-white hover:bg-[#0056d6] transition duration-200">
                                Chat
                            </button>
                            <p className="text-xs w-[83%] font-medium text-[#A9A9A9] text-center">or</p>
                            <button className="w-[200px] h-[45px] rounded-2xl border border-spacing-0 border-[#0080FF] bg-white text-lg font-bold text-[#0080FF] hover:bg-slate-500 transition duration-200">
                                Another
                            </button>
                        </h2>
                    </div>
                    </div>
                </div>
                <p className="mt-10 text-center text-lg font-semibold text-[#333333]">@copyright 2021</p>
        </section>
        </>
    )
}

export default Footer;