function Banner() {
  return (
    <>
      <section className="max-w-8xl flex justify-center py-12 sm:py-24 px-4">
        <div className="w-full sm:w-full sm:h-[900px] flex flex-col bg-white rounded-2xl py-8 px-6 sm:px-12 transition duration-300 mb-9 text-center">
          
          {/* Title */}
          <h1 className="text-xl sm:text-6xl mt-16 sm:mt-48 font-medium text-[#333333] mx-auto">
            Sekolah Digital
          </h1>

          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-[#333333] mb-5">
            Minerva
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-2xl text-[#333333] max-w-md sm:max-w-none mx-auto">
            Minerva merupakan kursus online secara Private yang bertujuan untuk membantu proses
            pembelajaran dengan harga yang sangat terjangkau, dan penyampaian materi yang mudah
            dipahami.
          </p>

          {/* Stats + Button */}
          <div className="mt-8 max-w-3xl w-full mx-auto gap-5 flex flex-col sm:flex-col items-center">
            
            {/* Stats */}
            <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border w-full sm:w-[90px] h-[90px] border-[#d9d9d9] bg-[#fafafa] py-3 mx-auto flex flex-col items-center justify-center">
                <div className="text-xs sm:text-sm font-semibold text-[#333333]">Member</div>
                <div className="mt-1 text-xl sm:text-3xl font-bold text-[#333333]">5</div>
              </div>

              <div className="rounded-xl border w-full sm:w-[90px] h-[90px] border-[#d9d9d9] bg-[#fafafa] py-3 mx-auto flex flex-col items-center justify-center">
                <div className="text-xs sm:text-sm font-semibold text-[#333333]">Jam</div>
                <div className="mt-1 text-xl sm:text-3xl font-bold text-[#333333]">40</div>
              </div>

              <div className="rounded-xl border w-full sm:w-[90px] h-[90px] border-[#d9d9d9] bg-[#fafafa] py-3 mx-auto flex flex-col items-center justify-center">
                <div className="text-xs sm:text-sm font-semibold text-[#333333]">Kelas</div>
                <div className="mt-1 text-xl sm:text-3xl font-bold text-[#333333]">4</div>
              </div>
            </div>

            {/* Button */}
            <button className="mt-4 w-full max-w-xs sm:h-[50px] h-[48px] rounded-xl bg-[#007bff] sm:px-6 sm:py-3 px-4 text-base font-semibold text-white shadow-md hover:bg-[#0056d6] transition duration-200">
              Gabung
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;