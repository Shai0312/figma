
export default function Header(){
    return(
            <div><div className="flex justify-around  px-40 py-4 bg-white w-[1440px] h-[88px] items-center  ">
            <div ><h1 className="  text-black text-3xl   font-semibold    ">cyber</h1></div>
<div className="flex justify-start  text-gray-400 rounded-md border-gray-100 bg-gray-100 h-[56px] w-[360px]"><img className="text-gray-400 h-6 w-6 mt-[16px] ml-2 " src="/search.png" alt="icon" /><input type="text" id="search" placeholder="Search" className="p-4  font-medium rounded-md bg-gray-100 outline-none  border-gray-100 "/></div>
           <div> <nav>
                <ul className="flex justify-around gap-10 text-xl ">
                    <li className="text-black font-medium">Home</li>
                    <li className="text-gray-400 font-medium">About</li>
                    <li className="text-gray-400 font-medium">Contact Us</li>
                    <li className="text-gray-400 font-medium">Blog</li>
                </ul>
            </nav>
            </div>
            <div className="flex items-center  gap-8  ">
                <img className=" h-6 w-6" src="/heart.jpg" alt="favourite " />
                <img className=" h-6 w-6" src="/shopping-cart.jpg" alt="cart" />
                <img  className=" h-6 w-6" src="/person.jpg" alt="user"  />
        
</div>
        </div></div>
    )
}