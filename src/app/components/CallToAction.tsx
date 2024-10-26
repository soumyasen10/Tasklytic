import SettingIcon from '../../assets/images/helix2 1.svg'
import CircleIcon from '../../assets/images/emojistar 1.svg'

export const CallToAction=()=>{
    return (
        <div className='bg-black text-white py-[72px] sm:py-24 text-center'>
            <div className="container max-w-[576px] md:max-w-[776px] relative">
            <CircleIcon className="absolute
            hidden sm:block sm:-left-48 sm:top-10"/>
            <SettingIcon className="absolute hidden sm:block sm:-top-[120px] sm:-right-40"/>
                <h2 className='font-bold text-5xl tracking-tighter sm:text-6xl'>Get instant access</h2>
                <p className='text-xl text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                <form className='mt-10 max-w-sm mx-auto sm:flex-row flex flex-col gap-2.5'>
                    <input type='email' placeholder='your@gmail.com'
                    className='h-12  bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] flex-1'/>
                    <button className='bg-white text-black h-12 rounded-lg px-5'>Get access</button>
                </form>
            </div>
        </div>
    )
}