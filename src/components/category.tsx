

export default function Category(){
    return(
        <div className="h-[352] w-[1440] px-40 py-20 bg-white">
           <div className=" flex  justify-between"> <h1 className="text-xl text-black ">Browse By Category </h1> <img src="/Arrow`s (1).png" alt="icon" /></div>
            <div className="w-[1120px] h-[128px] flex  gap-8 font-medium mt-8 ">
                <div className="w-[160px] h-[128px] px-[48px] py-[20px] bg-gray-200 rounded-md ">
                    <img  src="/Phones.png" alt="phones" />
                    <h1 className="text-black text-[14px] mt-2">Phones</h1>
                </div>
                <div className="w-[160px] h-[128px] px-[48px] py-[20px] bg-gray-200 rounded-md ">
                    <img src="/Smart Watches.png" alt="smartwatches" />
                    <h1 className="text-black text-[14px] mt-2 ">SmartWatches</h1></div>
                    <div className="w-[160px] h-[128px] px-[48px] py-[20px] bg-gray-200 rounded-md ">
                    <img src="/Cameras.png" alt="cameras" />
                    <h1 className="text-black text-[14px] mt-2">Cameras</h1></div>
                    <div className="w-[160px] h-[128px] px-[48px] py-[20px] bg-gray-200 rounded-md">
                    <img src="/headphones.png" alt="headphones" />
                    <h1 className="text-black text-[14px] mt-2">Headphones</h1></div>
                    <div className="w-[160px] h-[128px] px-[48px] py-[20px] bg-gray-200 rounded-md ">
                    <img src="/Computers.png" alt="computers" />
                    <h1 className="text-black text-[14px] mt-2 ">Computers</h1></div>
                    <div className="w-[160px] h-[128px] px-[48px] py-[20px] bg-gray-200 rounded-md ">
                    <img src="/Gaming.png" alt="gaming" />
                    <h1 className="text-black text-[14px] mt-2 ">Gaming</h1></div>
            </div>

        </div>
    )
} 