import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Click the oil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      
      <Footer/>
      
    </div>
  )
}

export default Home
