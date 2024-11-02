
export default function Footer(){
    return(
        
        <div className="bg-black h-[504px] w-[1440] px-[160px] py-[104px] flex gap-8 ">
            <div className="w-[384px] h-[94.87px] ">
                <h1 className=" text-[16px] text-white font-bold">cyber</h1>
                <p className="mt-5 text-[14px] font-medium text-gray-400">We are a residential interior design firm located in <br />Portland. Our Boutique-studio offers more than </p>
                <div className=" flex  gap-5 h-4 w-4 mt-44">
                <img src="/Twitter.png" alt="twitter" />
                <img src="/Facebook.png" alt="facebook" />
                <img src="/Tiktok.png" alt="tiktok" />
                <img src="/Instagram.png" alt="instagram" />
            </div>
            </div>
            <div className="h-[256px] w-[295.5px]">
                <h1 className="text-white text-[16px] font-semibold">Services</h1>
                <ul className=" text-[14px] text-gray-400 mt-2">
                    <li className="mt-2">Bonus program</li>
                    <li className="mt-2">Gift cards</li>
                    <li className="mt-2">Credit and payment</li>
                    <li className="mt-2">Service contracts</li>
                    <li className="mt-2">Non-Cash account</li>
                    <li className="mt-2">Payment</li>
                </ul>
            </div>
            <div className="h-[256px] w-295.5px]">
                <h1 className="text-white text-[16px] font-semibold">Assistance to the buyer</h1>
                <ul className=" text-[14px] text-gray-400 mt-2">
                    <li className="mt-2">Find an order</li>
                    <li className="mt-2">Terms of delivery</li>
                    <li className="mt-2">Exchange and return of goods</li>
                    <li className="mt-2">Guarantee</li>
                    <li className="mt-2">Frequently asked questions</li>
                    <li className="mt-2">Terms of use of the site</li>
                </ul>
            </div>
            
            
        
            </div>
    )
}