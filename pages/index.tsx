import Head from 'next/head'
import { Sidebar } from '../components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
    </div>
  )
}

export default Home
