// function Class() {
//   return (
//     <section className="w-full flex justify-center py-24 px-4">
//       <div className="flex flex-col mx-auto">
//         {/* Title */}
//         <h1 className="w-[467px] h-[55px] sm:text-5xl text-[32px] text-center mx-auto mb-10 font-bold text-[#333333]">
//           Kelas di Minerva
//         </h1>

//         {/* Grid */}
//         <div className="grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 sm:gap-x-10 gap-6">
//           {[
//             "Basic",
//             "Advanced",
//             "Advanced",
//             "Basic",
//             "Moderate",
//             "Advanced",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="
//               relative
//               sm:w-[360px] w-full
//               h-[180px] sm:h-[360px]
//               bg-gradient-to-br from-[#e0e7ff] to-[#c7d2fe]
//               rounded-2xl
//               shadow-md hover:shadow-xl
//               transition duration-300
//               mx-auto overflow-hidden group
//               hover:scale-[1.03]
//               "
//             >
//               {/*  refactor code bro */}
//               {/* Overlay hover */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>

//               {/* Bottom content */}
//               <div
//                 className="
//               absolute bottom-0 left-0 w-full
//               h-[90px] sm:h-[120px]
//               bg-white rounded-t-2xl
//               shadow-inner
//               flex flex-col items-center justify-center
//               "
//               >
//                 <h3 className="text-center sm:text-2xl text-base text-[#333333] font-bold">
//                   {item}
//                 </h3>

//                 <button
//                   className="
//                 mt-2
//                 sm:w-[150px] w-[110px]
//                 h-[36px]
//                 rounded-lg
//                 bg-[#007bff]
//                 text-sm font-semibold text-white
//                 hover:bg-[#0056d6] transition duration-200
//                 "
//                 >
//                   Lihat
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Class;

function Class() {
  return (
    <section className="w-full flex justify-center py-24 px-4">
      <div className="flex flex-col mx-auto">
        {/* Title */}
        <h1 className="w-[467px] h-[55px] sm:text-5xl text-[32px] text-center mx-auto mb-10 font-bold text-[#333333]">
          Kelas di Minerva
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-6 sm:gap-x-10">
          {[
            "Basic",
            "Advanced",
            "Advanced",
            "Basic",
            "Moderate",
            "Advanced",
          ].map((item, i) => (
            <div
              key={i}
              className="
              relative 
              w-full sm:w-[360px]
              h-[300px] sm:h-[360px] 
              bg-gradient-to-br from-[#e0e7ff] to-[#c7d2fe] 
              rounded-2xl 
              shadow-md hover:shadow-xl 
              transition duration-300 
              mx-auto overflow-hidden group
              hover:scale-[1.03]
              "
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>

              {/* Bottom content */}
              <div
                className="
              absolute bottom-0 left-0 w-full 
              h-[100px] sm:h-[120px] 
              bg-white rounded-t-2xl
              shadow-inner 
              flex flex-col items-center justify-center
              "
              >
                <h3 className="text-center sm:text-2xl text-base text-[#333333] font-bold">
                  {item}
                </h3>

                <button
                  className="
                mt-2 
                sm:w-[150px] w-[120px] 
                h-[38px] 
                rounded-lg 
                bg-[#007bff] 
                text-sm font-semibold text-white 
                hover:bg-[#0056d6] transition duration-200
                "
                >
                  Lihat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Class;
