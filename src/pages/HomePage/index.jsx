import styles from './HomePage.module.css'

import florImg from '../../assets/flor.png'
const HomePage= () => {
  return (
    <>
     <div className={styles.card}>
            <img className={styles.imagemCard} src={florImg} />
      </div>
      <div className={styles.header}>
        <h1>
          Projeto Final Pretalab 2024!
        </h1>    
        
  </div>
 
  <div className={styles.subtitulo}>
        <p>
          O Ciclo formativo Básico da Pretalab teve início no mês de outubro do ano de 2023 e se encerra em fevereiro de 2024.
          A formação contou com trilhas como GitHub, HTML & CSS, JavaScrpt e React! Dedico esse projeto como forma de agradecimento á todas as professoras que nos auxiliaram ao longo dessa incrível formação.
        </p>
      </div>

  </>
  )
}
  export default HomePage;