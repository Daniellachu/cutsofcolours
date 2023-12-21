import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/contact.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Contact(){
    return(
        <>
            <main className={styles.main}>
                <div>
                    <Navbar></Navbar>
                    <p>contact</p>
                    <Footer></Footer>
                </div>
            </main>
        </>
    )
}