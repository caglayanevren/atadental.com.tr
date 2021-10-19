import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ata Dental Optima Ağız ve Diş Sağlığı Merkezi</title>
                <meta
                    name="description"
                    content="ATA DENTAL OPTİMA, Ağız ve Diş Sağlığı Merkezi, (312) 426 36 46"
                />
                <link href="/ata.ico" rel="shortcut icon" type="image/x-icon" />
            </Head>

            <div className="container mx-auto bg-ata bg-170 sm:bg-contain lg:bg-cover bg-no-repeat bg-left-top">
                <div className="flex-col">
                    <div className="mb-60 sm:hidden">&nbsp;</div>
                    <div className="py-3 sm:py-20 2xl:py-40 px-8">
                        <div className="text-right italic text-mor text-xl">
                            <span className="bold">Doktorlarımız</span>
                            <br />
                            Diş Hekimi Pırıl Tüz
                            <br />
                            Diş Hekimi Müjgan Kocagözoğlu
                        </div>
                    </div>
                    <div className="pt-0 sm:pt-20 pb-20 px-8">
                        <div className="text-right italic text-mor text-base sm:text-2xl">
                            Ata Dental Ağız ve Diş Sağlığı Merkezi
                            <br />
                            Tunalı Hilmi caddesi 103/1 Kavaklıdere / Ankara
                            <br />
                            <span className="bold">Tel:</span>{' '}
                            <a href="tel:+90-312-426-3646">(312) 4 26 36 46</a>,{' '}
                            <br className="sm:hidden" />
                            <span className="bold">Fax:</span>{' '}<a href="#">(312) 4 26 36 48</a>
                            <br />
                            <span className="bold">e-posta:</span>{' '}info@atadental.com.tr
                        </div>
                    </div>
                </div>
            </div>

            {/* <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer> */}
        </>
    );
}
