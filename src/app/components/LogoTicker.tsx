import Logo1 from '../../assets/images/acme 1.svg'
import Logo2 from '../../assets/images/quantum 1.svg'
import Logo3 from '../../assets/images/echo 1.svg'
import Logo4 from '../../assets/images/celestia 1.svg'
import Logo5 from '../../assets/images/pulse 1.svg'
import Logo6 from '../../assets/images/apex 1.svg'

const images=[Logo1, Logo2,Logo3,Logo4,Logo5,Logo6]

export const LogoTicker=()=>{
    return(
        <div className="bg-black text-white sm:py-[72px] ">
            <div className="">
                <h2 className='text-xl text-center text-white/50'>Trusted by the world’s most innovative teams</h2>
                <div className="overflow-hidden mt-9 before:content-[''] before:content-[''] before:absolute after:absolute  before:h-full after:h-full before:w-20 after:w-20 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]">
                    <div className="flex gap-16">
                    {images.map((Logo)=>(
                    <Logo className="flex-none h-8 w-auto" key={Logo}/>
                   ))}
                   <Logo2/>
                   <Logo3/>
                   <Logo5/>
                    </div>
                </div>
            </div>
            </div>
    )
}