// import Image from 'next/image'
// import Stars from './Stars'
import Link from 'next/link'
import styles from './styles/styles.module.css'
// import mountains from '../../public/backg.jpg'

const BackgroundPage = () => (
  <>
    <div>
      {/* <Stars className={styles.bgWrap} /> */}
      {/* <div className={styles.bgWrap}>
      <Image
        alt='Mountains's
        src={mountains}
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        style={{
          objectFit: 'cover'
        }}
      />
    </div> */}
      <div className={styles.textMainContainer}>
        <h1 className={styles.h1}><span className={styles.span}>New Website</span>
          <br />
          <span className={styles.loader}>...</span>
          <br />
          <span className={styles.span}>Coming Soon </span>
        </h1>
      </div>
      {/* <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p> */}
    </div>
    <div className={styles.contactContainer}>
      <h2 className={styles.contactH2}>Contact:</h2>
      <p>+1 (786) 471-7050</p>
      <p className={styles.contactEmail}>Email: jfprojects871@gmail.com</p>
      <Link blank href='https://www.instagram.com/_jfprojects/?hl=es'>Instagram: _jfprojects</Link>
    </div>
  </>
)

export default BackgroundPage
