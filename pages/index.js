import Head from 'next/head'
import fetch from "isomorphic-fetch"
import styles from '../styles/Home.module.css'

export default function Home({data, time}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>server: {time}</h1>
      {/* {JSON.stringify(data, null, 2)} */}
     <h2>client: {`${new Date().getMinutes()}:${new Date().getSeconds()}`}</h2>
     <h3>revalidate: 10</h3>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3031/posts')
  const data = await res.json()

  
  return {
    props: {
      data,
      time: `${new Date().getMinutes()}:${new Date().getSeconds()}`
    },
    revalidate: 10
  }
}