import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from "../components/Main"
import { Header } from "../components/Header"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header /> 
      <Main page='index'/>

      <Footer />
    </div>
  )
}
