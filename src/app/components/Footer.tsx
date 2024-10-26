import Icon1 from '../../assets/icons/Socials.svg'
import Icon2 from '../../assets/icons/Socials (1).svg'
import Icon3 from '../../assets/icons/Socials (2).svg'
import Icon4 from '../../assets/icons/Socials (3).svg'
import Icon5 from '../../assets/icons/Socials (4).svg'
import Icon6 from '../../assets/icons/Socials (5).svg'


export const Footer=()=>{
    return(
       <footer className='bg-black text-white '>
        <div className="container flex justify-between items-center py-4 border-t border-white/30">
        <div>
            <p>@ 2024 Your Company, Inc. All rights reserved</p>
        </div>
        <div className='flex gap-1'>
        <Icon1/>
        <Icon2/>
        <Icon3/>
        <Icon4/>
        <Icon5/>
        <Icon6/>
        </div>
        </div>
       </footer>
    )
}