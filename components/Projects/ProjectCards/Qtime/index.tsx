import React from 'react'
import Card from '../../Card'
import Image from 'next/image'


const Qtime = () => {
  return (
    <Card.Container className='bg-[#ECF6F7] text-[#232323]'>
      <div className='h-full flex flex-col justify-center gap-6'>
        <div>
            <Image loader={()=>'https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Fqtime-logo.svg?alt=media&token=cd75174a-7c81-4ead-bf20-fbfe8a51b59b'} src='https://firebasestorage.googleapis.com/v0/b/sean-portfolio-82686.appspot.com/o/Projects%2Fqtime-logo.svg?alt=media&token=cd75174a-7c81-4ead-bf20-fbfe8a51b59b' alt='qtime' width={195} height={64}/>
        </div>
        <p>
        QTime is a beautifully designed time tracking app which can be accessed on any web or mobile browser. Easily track your staff’s total work hours and time logs for any given day, week or month.
        </p>
      </div>
      <Card.Footer external='https://qtimesoftware.com/' />
    </Card.Container>
  )
}

export default Qtime