import React from 'react'
import cx from './artCarousel.module.css'
const ArtCarousel = () => {
    const artUrls = [
        'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F1.jpg?alt=media&token=a2c8879b-7ba2-45ec-8568-37fd93d3fb8a','https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F10.jpg?alt=media&token=c501ee0f-53f2-4967-9cb9-705e9747d7e3','https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F11.jpg?alt=media&token=c380cc35-da78-4cf2-971d-5db037d1f1c4', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F12.jpg?alt=media&token=43b5cd0b-a936-43f2-94f2-8dbfb8e95c54', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F13.jpg?alt=media&token=21ff6d1c-c18d-46da-bb8c-bdcd14a1a06b', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F14.jpg?alt=media&token=54bd2e05-a1af-4212-9b41-a0ab853eced1', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F15.jpg?alt=media&token=187eedc7-27f3-46e5-99e7-5aa0d88666d5', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F2.jpg?alt=media&token=778c11bb-8b36-4e08-8d04-30da6e17344e', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F3.jpg?alt=media&token=df9cab1b-0ec4-42bd-8d03-ded6bf0d777c', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F4.jpg?alt=media&token=cc15a64c-9f6f-4421-9b4f-c75eeed58e39', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F5.jpg?alt=media&token=f4d52c57-faf7-4e32-baa0-2a4bcfd3cc44', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F6.jpg?alt=media&token=612a5cf3-ce3a-40c8-b890-c3371f70eb8b', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F7.jpg?alt=media&token=644e9b2c-4a99-48bf-9260-c03659edcd37', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F8.jpg?alt=media&token=29015948-2319-4aa7-be50-9e32f5d61e96', 'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Artworks%2F9.jpg?alt=media&token=1f3053e5-6b99-4ef5-871e-670f8cf42f7f'
    ]

    const firstHalf = Array(3).fill(artUrls.slice(0,Math.ceil(artUrls.length/2))).flat()
    const secondHalf = Array(3).fill(artUrls.slice(Math.ceil(artUrls.length/2))).flat()


  return (
    <div className={cx['artworks']}>
        <div className={cx["artworks-container"]}>
            <div className={`flex ${cx["artworks-row-1"]}`}>
                {firstHalf.map((imgsrc, index)=>{
                    return <img key={index} className="h-56" src={imgsrc}/>
                })}
            </div>
        </div>
        <div className={cx["artworks-container"]}>
            <div className={`flex ${cx["artworks-row-2"]}`}>
                {secondHalf.map((imgsrc, index)=>{
                    return <img key={index} className="h-56" src={imgsrc}/>
                })}
            </div>
    </div>
</div>
  )
}

export default ArtCarousel