import img from "../assets/profile.png"

function profile() {
    return (
        <div className=" bg-[#F0F0F0] mx-auto flex flex-col items-center justify-center pt-[100px] px-4 py-12">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center">
                    <img src={img} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                    <h2 className="text-xl font-bold text-[#333333]">Username</h2>
                </div>
                <div className="mt-6 grid-cols-1">
                    <button type="dropdown" className="w-full border-[#0080FF] border-2 py-2 bg-white font-bold text-[#0080FF] rounded-lg hover:bg-[#0056d6] transition duration-200 mb-4">
                        Pilih Kelas
                    </button>
                <div className="grid-rows-2">
                    <button className="w-[30%] mr-[26px] border-[#0080FF] border-2 py-2 bg-white font-bold text-[#0080FF] rounded-lg hover:bg-[#0056d6] transition duration-200 mb-4">
                        Jam
                    </button>
                    <button className="w-[62%] border-[#0080FF] border-2 py-2 bg-white font-bold text-[#0080FF] rounded-lg hover:bg-[#0056d6] transition duration-200 mb-4">
                        Hari
                    </button>
                </div>
                <div className="mt-6 grid-cols-1"></div>
                    <button className="w-full border-[#0080FF] border-2 py-2 bg-[#0080FF] font-bold text-white rounded-lg hover:bg-[#0056d6] transition duration-200 mb-4">
                        Pesan
                    </button> 
                </div>
            </div>
        </div>
    );
}

export default profile;