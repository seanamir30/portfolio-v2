import React from 'react'
import Card from '../../Card'
import Image from 'next/image'

const RealWB = () => {
  return (
    <Card.Container>
      <div className="h-full -m-6 rounded-t-md bg-cover bg-bottom z-10 shadow-md bg-[url('https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Frealwb-bg.png?alt=media&token=2fa2a036-4d2d-429b-906e-e9f8c6eb824e')]" />
      <div className='bg-white -mx-6 -mb-6 rounded-b-md text-[#2857BD] flex flex-col gap-7 justify-between p-6'>
      <div className="w-28">
      <Image loader={()=>'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Frealwb-logo.svg?alt=media&token=6def87f8-dd6a-4dbc-8756-37cffe360bc8'} src={'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Frealwb-logo.svg?alt=media&token=6def87f8-dd6a-4dbc-8756-37cffe360bc8'} alt='qtime' width={195} height={64}/>
      <p>Website Builder</p>
      </div>
      <p>
        Build your website in minutes. <br/>No coding or design skills required.
      </p>
        <Card.Footer external='https://builder.real.ph/' />
      </div>
    </Card.Container>
  )
}

export default RealWB