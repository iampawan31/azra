import Head from 'next/head'
import Script from 'next/script'
import { Sidebar } from '../components'

const Dashboardlayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Azra - Dashboard</title>
        <meta name="description" content="Azra Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="scroll-smooth bg-gray-dashboard h-screen flex items-center justify-center">
        <div className="flex w-full h-full space-x-4">
          <div className="w-1/6">
            <Sidebar className="w-1/6" />
          </div>
          <div className="w-5/6 p-4 overflow-y-scroll">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Dashboardlayout
