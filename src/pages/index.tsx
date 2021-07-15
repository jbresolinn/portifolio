import Head from 'next/head'
import { useState } from 'react'
import { Loader } from '../components/Loader'

export default function Home() {
  return (
    <>
      <Head>
        <title>início |&nbsp; julia bresolin</title>
      </Head>
      <main>
        <Loader />
        <h1>hello world</h1>
      </main>
    </>
  )
}
