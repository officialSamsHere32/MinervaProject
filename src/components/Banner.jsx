function Banner() {
  return (
    <>
      <section className="w-full flex justify-center py-24 px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg py-8 px-8 sm:px-12 transition duration-300 mb-9 text-center">
          <h1 className="text-2xl sm:text-3xl font-medium text-[#333333] w-[211px] h-[29px] mx-auto">Sekolah Digital</h1>
          <h2 className="mt-2 text-4xl sm:text-6xl font-bold text-[#333333] mb-5">Minerva</h2>
          <p className="mt-4 text-base sm:text-lg text-[#333333]">
            Minerva merupakan kursus online secara Private yang bertujuan untuk membantu proses
            pembelajaran dengan harga yang sangat terjangkau, dan penyampaian materi yang mudah
            dipahami.
          </p>
          <div className="mt-8 w-full flex flex-col items-center gap-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border w-[90px] h-[90px] border-[#d9d9d9] bg-[#fafafa] py-3 mx-auto">
                <div className="text-sm font-semibold text-[#333333]">Member</div>
                <div className="mt-1 text-3xl font-bold text-[#333333]">5</div>
              </div>
              <div className="rounded-xl border w-[90px] h-[90px] border-[#d9d9d9] bg-[#fafafa] py-3 mx-auto">
                <div className="text-sm font-semibold text-[#333333]">Jam</div>
                <div className="mt-1 text-3xl font-bold text-[#333333]">40</div>
              </div>
              <div className="rounded-xl border w-[90px] h-[90px] border-[#d9d9d9] bg-[#fafafa] py-3 mx-auto">
                <div className="text-sm font-semibold text-[#333333]">Kelas</div>
                <div className="mt-1 text-3xl font-bold text-[#333333]">4</div>
              </div>
            </div>
            <button className="mt-2 w-full max-w-xs rounded-xl bg-[#007bff] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0056d6] transition duration-200">
              Gabung
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;