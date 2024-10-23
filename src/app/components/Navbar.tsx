import Image from 'next/image'
import LogoImg from '../../assets/images/Default.svg'
import Menu from '../../assets/images/Icons.svg'
import Link from 'next/link'

export const Navbar=()=>{
    return(
        <div className="container bg-black">
            <div className='py-4 flex items-center justify-between'>
           <div className='relative sm:top-14 top-8'>
            <div className='absolute w-full bottom-0 bg-[linear-gradient(to-right,#F87BFF,#fb92cf,#FFDD9B,#C2F081,#2fD8fe)]'>
            <LogoImg className="relative"/>
            </div>
           </div>
            <div className='border border-white border-opacity-30 h-10 w-10 inline-flex items-center rounded-lg justify-center sm:hidden'>
            <Menu className="text-white"/>
            </div>
            <nav>
                <Link href="#">About</Link>
                <Link href="#">Features</Link>
                <Link href="#">Update</Link>
                <Link href="#">Help</Link>
                <Link href="#">Customer</Link>
            </nav>
            </div>
        </div>
    )
}