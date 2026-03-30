import Img from "../assets/MinervaBlue.png";

function Footer() {
  return (
    <section className="w-full bg-[#ECECEC] flex justify-center py-12 sm:py-24 px-4">
      
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-10">
        
        {/* LEFT */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
          
          <img
            src={Img}
            alt="Minerva"
            loading="lazy"
            className="mb-6 w-[180px] sm:w-[250px]"
          />

          <p className="text-[#333333] text-sm sm:text-base max-w-sm">
            Kami berusaha menjangkau semua lapisan masyarakat yang layak untuk
            mendapatkan pendidikan dengan Kelas Offline yang akan kami buat
            gratis untuk anak-anak yang belum mendapatkan kesempatan untuk
            bersekolah.
          </p>

          <h3 className="text-xl sm:text-3xl mt-6 font-bold">
            Di Yogyakarta
          </h3>

          <p className="text-sm mt-3 font-semibold max-w-sm">
            Jl. Laksda Adisucipto No.Km 8,5, Kalongan, Maguwoharjo, Kec.
            Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          
          <h1 className="text-2xl sm:text-4xl mb-6 font-bold text-[#333333]">
            Kontak kami
          </h1>

          {/* Email */}
          <div className="mb-4">
            <h2 className="text-lg sm:text-2xl font-bold">Email</h2>
            <p className="text-sm sm:text-base font-semibold">
              learnwminerva2021@gmail.com
            </p>
          </div>

          {/* Instagram */}
          <div className="mb-4">
            <h2 className="text-lg sm:text-2xl font-bold">Instagram</h2>
            <p className="text-sm sm:text-base font-semibold">
              @learn.minerva_
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg sm:text-2xl font-bold mb-3">
              Whatsapp
            </h2>

            <button className="w-[180px] h-[45px] rounded-2xl bg-[#0080FF] text-base font-bold text-white hover:bg-[#0056d6] transition duration-200">
              Chat
            </button>

            <p className="text-xs my-2 text-[#A9A9A9]">or</p>

            <button className="w-[180px] h-[45px] rounded-2xl border border-[#0080FF] bg-white text-base font-bold text-[#0080FF] hover:bg-slate-200 transition duration-200">
              Another
            </button>
          </div>

        </div>
      {/* Footer bottom */}
      <p className="mt-10 text-center text-sm sm:text-lg font-semibold text-[#333333]">
        @copyright 2021
      </p>
      </div>

    </section>
  );
}

export default Footer;