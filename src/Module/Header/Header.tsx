import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src="public/img/Logo/Star-Wars-Logo.png" alt="Звёздные войны"/>
    </header>
  )
}