import React from 'react'
import Card from '../../Card'

const messages = [
  "Interested on building something?",
  "Wanna build something cool?",
  "Let's start building something incredible!",
  "Start building your digital masterpiece now.",
  "Take the first step in building something revolutionary.",
  "Join the online revolution and build something great."
]

const CTA = () => {
  const CTAMessage = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      if((CTAMessage.current?.scrollTop || 0) + (CTAMessage.current?.clientHeight || 0) === CTAMessage.current?.scrollHeight){
        CTAMessage.current?.scrollTo(0,0)
      } else {
        CTAMessage.current?.scrollBy(0, 160)
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card.Container className='bg-gradient-to-br from-orange-500 to-orange-700 !w-full hover:scale-100'>
        <div className='flex flex-col items-center justify-center h-full gap-9'>
          <div className='flex flex-col items-center justify-center gap-9 md:gap-0'>
            <div ref={CTAMessage} className='max-h-40 overflow-hidden scroll-smooth'>
              {messages.map(message => (
                <h1 key={message} className='flex justify-center items-center text-4xl text-center h-40'>{message}</h1>
              ))}
            </div>
            <a href="mailto:hi@seancafe.com" className='underline hover:opacity-90'>hi@seancafe.com</a>
          </div>
          <a href="mailto:hi@seancafe.com" className='rounded-lg hover:bg-white hover:text-orange-600 px-5 py-3 border border-white transition hover:bg-transparent text-xl'>Contact me</a>
        </div>
    </Card.Container>
  )
}

export default CTA