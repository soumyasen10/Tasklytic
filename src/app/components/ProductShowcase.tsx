import LargeScreen from '../../assets/images/App Night.svg'
import MediumProduct from '../../assets/images/Medium.svg'
import SmallScreen from '../../assets/images/Small.svg'

export const ProductShowcase=()=>{
    return(
<div className=" text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px]">
    <div className="container">
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Instutive interface</h2>
       <div className='max-w-xl mx-auto '>
       <p className='text-xl text-center text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
       </div>
     <div className='flex justify-center items-center lg:h-full lg:w-[90%] ml-20'>
     <LargeScreen className="hidden md:block mt-14" />
     <MediumProduct className="hidden sm:block  lg:hidden mt-14"/>
     <SmallScreen className="block sm:hidden mt-4 -ml-16" />
     </div>
    </div>

</div>
    )
}