import pic from "../assets/pricepic.png"

function PriceHold() {
    return (
    <>
        <section className="w-full flex justify-center py-24 px-4">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg transition duration-300 text-center flex">
                <img src={pic} className="w-[50%] rounded-xl"></img>
                <div className="p-3">
                    <h1 className="w-[240px] h-[43px] text-[29px] font-bold text-left text-[#333333]">Harga Kelas</h1>
                    <h2 className="flex w-[270px] h-[auto] text-[36px] font-bold text-left text-[#333333]">Rp 100.000</h2><h3 className="text-[24px] font-bold text-left text-[#333333] mt-[10px]">/jam</h3>
                    <h2 className="flex w-[270px] h-[auto] text-[20px] font-bold text-left text-[#333333] mb-4">Setiap hari | 08.00 - 22.00</h2>
                    {/* Checkmark */}
                    <ul className="space-y-1 text-gray-700">
                        <li className="flex items-end font-semibold">
                        <span className="mr-2 text-[12px]">✔</span>
                        Khursus secara private
                        </li>
                        <li className="flex items-center font-semibold">
                        <span className="mr-2 text-[12px]">✔</span>
                        Online dengan Google Meet
                        </li>
                        <li className="flex items-center font-semibold">
                        <span className="mr-2 text-[12px]">✔</span>
                        Khusus Jogja bisa offline
                        </li>
                        <li className="flex items-center font-semibold text-left">
                        <span className="mr-2 text-[12px]">✔</span>
                        Di Mentorin oleh instruktur yang expert pada bidangnya
                        </li>
                    </ul>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
          Gabung
        </button>
        </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default PriceHold;