import styles from './Ship.module.scss'

const shipsList = new Array(10).fill('');

export const Ships = () => {
  return (
    <>
      {shipsList.map((_, index)=>
        <img src='public/img/technikal/empire-flighter.png' key={index} className={styles.ship}/>
      )}
    </>
  )
}