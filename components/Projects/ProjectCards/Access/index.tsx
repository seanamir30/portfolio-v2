import React from 'react'
import Card from '../../Card'
import Image from 'next/image'

const Access = () => {

  return (
    <Card.Container className="bg-cover bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Faccess-bg.png?alt=media&token=c25d1aaf-fcea-490b-a722-1cdc76660fcb')]">
      <div className='h-full flex flex-col justify-center gap-10'>
        <div className="flex items-center justify-center">
            <Image loader={()=>"https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Faccess-logo.svg?alt=media&token=3376c514-f99d-4210-8f40-54dc43b072df"} src="https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Faccess-logo.svg?alt=media&token=3376c514-f99d-4210-8f40-54dc43b072df" alt='access' width={195} height={64}/>
        </div>
        <p>
        Use ACCESS to create stunning, one of a kind, digital presentations that will bring your brand to life and propel you ahead of the competition. The goal of ACCESS is to help you secure more listings.
        </p>
      </div>
      <Card.Footer external='https://app.access.com/'/>
    </Card.Container>
  )
}

export default Access