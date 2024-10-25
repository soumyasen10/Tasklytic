import Icon from '../../assets/images/Frame 21.svg'
const features=[
    {title:'Integration ecosystem',description:'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.'},
    {title:'Goal setting and tracking',description:'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.'},
    {title:'Secure data encryption',description:'With end-to-end encryption, your data is securely stored and protected from unauthorized access.'}
]

export const Features=()=>{
    return(
        <div className="bg-black text-white py-14 sm:pt-4 ">
           <div className='container'>
           <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
            <div className='max-w-xl mx-auto'>
            <p className='text-center mt-5 text-xl text-white/70'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
            </p>
            </div>
            <div className='mt-16 flex flex-col sm:flex-row gap-4'>
                {features.map(({title,description})=>(
                    <div key={title} className='border border-white/30 px-5 py-10 text-center rounded-xl justify-center flex flex-col items-center gap-4 sm:flex-1'>
                        <div className='line-flex h-14 w-14 justify-center 
                        items-center'>
                            <Icon/>
                        </div>
                        <h3 className='mt-6 font-bold '>{title}</h3>
                        <div className='max-w-sm mx-auto'>
                        <p className='mt-2 text-white/70'>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </div>
    )
}