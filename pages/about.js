import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/about.module.css'
import Navbar from '@/components/navbar'

export default function About(){
    return(
        <>
            <main className={styles.main}>
                <div>
                    <Navbar></Navbar>
                    <p>about</p>
                </div>
            </main>
        </>
    )
}