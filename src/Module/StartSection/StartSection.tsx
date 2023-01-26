import styles from './StartSection.module.scss'

export const StartSection = () => {
  return (
    <section>
      <div className='container'>
        <div className={styles.wrapper__img}>
          <img
            className={[styles.img, styles.star__death].join(' ')}
            src="public/img/technikal/star-death.png"
            alt="Истребитель"
          />
          <img
            className={[styles.img,styles.star__text].join(' ')}
            src="https://media.tenor.com/1fRiaK_TnYcAAAAd/star-wars-text.gif"
            alt="Звёздный текст"
          />
          <img
            className={[styles.img,styles.dart__vaider].join(' ')}
            src="public/img/hero/darthVaider.png"
            alt="Дарт Вейдер"
          />
        </div>
      </div>
    </section>
  )
}