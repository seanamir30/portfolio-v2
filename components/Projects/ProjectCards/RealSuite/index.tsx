import React from 'react'
import Card from '../../Card'
import Image from 'next/image'

const RealSuite = () => {
  return (
    <Card.Container className='bg-gradient-to-br from-[#00E298] to-[#2857BD]'>
      <div className="h-full -m-6 rounded-t-md bg-cover bg-center z-10 shadow-md bg-[url('https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Frealsuite-bg.png?alt=media&token=368d3195-b0b9-440e-934c-12579aabe78f')]" />
        <div className='bg-white -mx-6 -mb-6 rounded-b-md text-[#2857BD] flex flex-col gap-4 justify-between p-6'>
        <div className="w-28">
          <Image loader={()=>'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Freal-logo.svg?alt=media&token=59cdb6f0-88fa-4e69-8017-ecfdef129fcb'} src={'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Freal-logo.svg?alt=media&token=59cdb6f0-88fa-4e69-8017-ecfdef129fcb'} alt='qtime' width={195} height={64}/>
          <p>Suite</p>
        </div>
          <p>
            Build your listing presentation & digital open house using our world-class template designs.
          </p>
          <Card.Footer external='https://suite.real.ph/' />
        </div>
    </Card.Container>
  )
}

export default RealSuite