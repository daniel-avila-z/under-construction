// import Image from 'next/image'
import Stars from './Stars'
import styles from './styles/styles.module.css'
// import mountains from '../../public/backg.jpg'

const BackgroundPage = () => (
  <div>
    <Stars className={styles.bgWrap} />
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
      <h1 className={styles.h1}><span className={styles.span}>New Website</span> <br />      <span className={styles.span}>Coming Soon </span> <br /> <span class={styles.loader} /></h1>
    </div>
    {/* <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p> */}
  </div>
)

export default BackgroundPage
