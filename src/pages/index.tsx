import Head from 'next/head'
import { Loader } from '../components/Loader'
import { Navbar } from '../components/Navbar'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>início |&nbsp; julia bresolin</title>
      </Head>
      <main className={styles.container}>
        <Loader />
        <header>
          <Navbar />
          <div className={styles.content}>
            <small>Olá! 👋 Seja bem vindo!</small>
            <h1>Eu sou a Julia e eu construo coisas para a web.</h1>
            <p>
              <span>
                Engenheira de software, dev e web designer apaixonada por
                programação, astronomia, games e tudo que envolve tecnologia.
              </span>
            </p>
          </div>
        </header>
      </main>
    </>
  )
}
