import Image from 'next/image'

const Warm = () => {
    const IgIcon = process.env.PUBLIC_URL + 'images/artworks/warm-icon.jpg'
    
    return (
        <section className="relative">
            <div className="relative flex justify-center items-center w-full">
                <Image loader={()=>IgIcon} width={192} height={192} alt="warm logo" className="border-8 absolute rounded-full border-white drop-shadow-xl" src={IgIcon}/>
            </div>
            <div className="h-24 lg:px-56 2xl:px-72 md:px-7"><a className="fab fa-instagram fa-2x p-2" href="https://www.instagram.com/warmedupcolors/" target="blank_"></a></div>
            <h2 className="text-center font-light text-4xl p-8">warmedupcolors</h2>
        </section>
    )
}

export default Warm