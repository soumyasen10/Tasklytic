import Link from "next/link"
import Arrow from "../../assets/images/Vector.svg"
import Cursor from "../../assets/images/cursor 2.svg"
import Message from '../../assets/images/message 1.svg'

export const Hero =()=>{
    return(
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] py-[92px] sm:py-24 relative overflow-clip">
        <div className="absolute sm:w-[1936px] sm:h-[768px]  h-[475px] w-[160vw] md:w-[2340px] md:h-[580px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side_at_center,#000_82%,#9560eb)] top-[calc(100%-120px)] sm:top-[calc(100%-140px)]">
        </div>
            <div className=" relative flex flex-col justify-center items-center -top-4">
            <div className="flex items-center justify-center  ">
            <Link href="#" className="border py-1 px-2 rounded-lg border-white/30">
                <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text ">Version 2.0 is here </span>
               <span className="inline-flex gap-2 justify-center items-center">
               <span>Learn more </span>
                <Arrow/>
               </span>
            </Link>
            </div>
            <div className="flex justify-center mx-auto">
            <div className="inline-flex mt-8 relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">One Task <br />at a Time</h1>
            <Cursor className="absolute right-[476px] top-[108px] hidden sm:inline"/>
            <Message className="absolute top-[56px] left-[498px]"/>
            </div>
            </div>
            <div className="flex justify-center mx-auto">
            <p className="text-center text-xl mt-8 max-w-lg">
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
            </p>
            </div>
            <div className="flex justify-center items-center mt-8">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
                Get for free
            </button>
            </div>
        </div>
        </div>
    )
}