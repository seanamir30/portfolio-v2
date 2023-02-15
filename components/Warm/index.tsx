import Image from 'next/image'
import ArtCarousel from './ArtCarousel'

const Warm = () => {
    
    return (
        <section className="relative dark:bg-neutral-800 dark:text-white flex flex-col justify-center items-center">
            <ArtCarousel/>
            <div className='lg:max-w-screen-xl flex flex-col'>
                <div className="relative flex justify-center items-center w-full">
                    <Image loader={()=>'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2Fwarm-icon.jpg?alt=media&token=0fcfd969-3ee5-4f1b-977c-2b67d06a8347'} width={192} height={192} alt="warm logo" className="border-8 absolute rounded-full border-white drop-shadow-xl dark:border-neutral-700 z-10" src={'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2Fwarm-icon.jpg?alt=media&token=0fcfd969-3ee5-4f1b-977c-2b67d06a8347'}/>
                </div>
                <div className="h-24 lg:px-56 2xl:px-72 md:px-7 relative"><a className="fab fa-instagram fa-2x p-2 absolute left-0" href="https://www.instagram.com/warmedupcolors/" target="blank_"></a></div>
                <h2 className="text-center font-light text-4xl p-8">warmedupcolors</h2>
            </div>
        </section>
    )
}

export default Warm