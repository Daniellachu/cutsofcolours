import styles from '@/components/navbar/navbar.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar(){
    return(
        <>
            <div className={styles.navbar}>
                <Link href={"/"}>
                    <Image
                        src="/logo/cutsofcolours-logo.png"
                        width={40}
                        height={50}
                        alt='logo'
                    />
                </Link>
                <div className={styles.links}>
                    <Link href={"/bouquet"}>
                        bouquets
                    </Link>
                    <Link href={"/flowers"}>
                        flowers
                    </Link>
                    <Link href={"/about"}>
                        about
                    </Link>
                    <Link href={"/contact"}>
                        contact
                    </Link>
                </div>
                <Link id={styles.title} href={"/"}>cuts of colours</Link>
            </div>
        </>
    )
}