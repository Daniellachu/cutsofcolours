import Image from "next/image"
import styles from "@/components/footer/footer.module.css"
import Link from "next/link"

export default function Footer(){
    return(
        <>
            <main>
                <div className={styles.footer}>
                    <Image
                        src={"/images/footer.jpeg"}
                        width={1440}
                        height={400}
                    /> 
                    <div className={styles.footer_background}>
                        <div className={styles.footer_row}>
                            <div className={styles.footer_nav}>
                                <Image
                                    src={"/logo/cutsofcolours_logo2.png"}
                                    width={180}
                                    height={180}
                                />
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
                            </div>
                            <div className={styles.footer_contact}>
                                <p className={styles.section}>contact</p>
                                <Link href={"/cutsofcolours@gmail.com"}>cutsofcolours@gmail.com</Link>
                                <p>250-123-4567</p>
                                <div className={styles.social_icons}>
                                    <Image
                                        src={"/icon/instagram_icon.svg"}
                                        width={24}
                                        height={24}
                                    />
                                    <Image
                                        src={"/icon/facebook_icon.svg"}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                            <div className={styles.footer_location}>
                                <p className={styles.section}>location</p>
                                <p>1234 something st. Vancouver BC 
                                123 ABC</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}