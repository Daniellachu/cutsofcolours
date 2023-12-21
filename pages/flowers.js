import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/flowers.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Flowers(){
    return(
        <>
            <main className={styles.main}>
                <Navbar></Navbar>
                <div className={styles.background}> 
                    <Image
                        src={"/images/flowers_background.png"}
                        height={624}
                        width={1440}
                        alt='flowers background pink lily'
                    />
                </div>
                <div className={styles.flower_categories}>
                    <Link href={"#focal"} className={styles.tab}>
                        focal flowers
                    </Link>
                    <Link href={"#secondary"} className={styles.tab}>
                        secondary flowers
                    </Link>
                    <Link href={"#textural"} className={styles.tab}>
                        textural flowers
                    </Link>
                    <Link href={"#foliage"} className={styles.tab}>
                        foliage
                    </Link>
                </div>
                <div id={"focal"}>
                    <p className={styles.tab_title}>focal flowers</p>
                </div>
                <div id={"secondary"}>
                    <p className={styles.tab_title}>secondary flowers</p>
                </div>
                <div id={"textural"}>
                    <p className={styles.tab_title}>textural flowers</p>
                </div>
                <div id={"foliage"}>
                    <p className={styles.tab_title}>foliage</p>
                </div>
                <Footer></Footer>
            </main>
        </>
    )
}