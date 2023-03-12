import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Warm from '../components/Warm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean</title>
        <meta name="description" content="Hi I'm Sean, I'm a software engineer specialized in typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
      </Head>
      <main>
        <Hero/>
        <Projects/>
        <Warm/>
      </main>
    </>
  )
}
