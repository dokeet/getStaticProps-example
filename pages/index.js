import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({time}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>server: {time}</h1>
     <h2>client: {`${new Date().getMinutes()}:${new Date().getSeconds()}`}</h2>
     <h3>revalidate: 10</h3>
    </div>
  )
}

export async function getStaticProps() {
  
  return {
    props: {
      time: `${new Date().getMinutes()}:${new Date().getSeconds()}`
    },
    revalidate: 10
  }
}