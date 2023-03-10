import Head from "next/head";
import { Sidenav } from "../components/shared/sidenav";
import { StartView } from "../components/start-view";

export default function Home() {
  return (
    <>
    <Head>
      <title>YWA</title>
    </Head>
    <div className='flex w-full h-full flex-grow'>
      <Sidenav />
      <div className='w-full'>
      <StartView />
      </div>
    </div>
    </>
  )
}
 