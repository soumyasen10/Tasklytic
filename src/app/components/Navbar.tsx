import Image from 'next/image'
import LogoImg from '../../assets/images/Default.svg'
import Menu from '../../assets/images/Icons.svg'
import Link from 'next/link'

export const Navbar=()=>{
    return(
        <div className="bg-black">
        <div className="px-8">
            <div className='py-4 flex items-center justify-between'>
           <div className='relative top-8 flex items-center '>
            <div className='absolute w-full bottom-0 bg-[linear-gradient(to-right,#F87BFF,#fb92cf,#FFDD9B,#C2F081,#2fD8fe)]'>
            <LogoImg className=""/>
            </div>
           </div>
            <div className='border border-white border-opacity-30 h-10 w-10 inline-flex items-center rounded-lg justify-center sm:hidden'>
            <Menu className="text-white"/>
            </div>
            <nav className='text-white hidden sm:flex gap-6 items-center '>
                <Link className=' text-white text-opacity-75 hover:text-opacity-100 transition' href="#">About</Link>
                <Link className='text-white text-opacity-75 hover:text-opacity-100 transition' href="#">Features</Link>
                <Link className='text-white text-opacity-75 hover:text-opacity-100 transition' href="#">Update</Link>
                <Link className='text-white text-opacity-75 hover:text-opacity-100 transition' href="#">Help</Link>
                <Link className='text-white text-opacity-75 hover:text-opacity-100 transition' href="#">Customer</Link>
                <button className='bg-white py-2 px-4 rounded-lg text-black'>Get for free</button>
            </nav>
            </div>
        </div>
        </div>

    )
}