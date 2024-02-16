import styles from './SobrePage.module.css'
import arcoris3Img from '../../assets/arcoris3.png'
const SobrePage = () => {
    return (
        <>
        <div className={styles.card}>
            <img className={styles.imagemCard} src={arcoris3Img} />
      </div>
      <div className={styles.containerSobre} >
          <h1 className={styles.profissao}>Desenvolvedora Front-End Junior</h1>
    
          <p className={styles.sobreMim}>
              Oie!! Sou Ana Beatriz, tenho 25 anos e sou natural de Natal/RN. Sou bacharel e licenciada em Ciências Biológicas e no momento estou agregando o desenvolvimento de softwares para minha vida. Cresci na praia então sou apaixonada pelo oceano e natureza em sí, também faço pinturas com tinta acrílica e PVA em MDF e cerâmicas no geral.
          </p>
      </div>

      <div className={styles.subtitulo}>
        <p>
       Segue abaixo meus projetos realizados ao longo da minha formação no PRETALAB.</p> 
  
        <p>https://github.com/lua2798beatriz/pretalabcalculadorajavascript.git</p>
        <p>https://github.com/lua2798beatriz/portifolio-pretalab.git</p>
        
        
      </div>

      <div className={styles.containerVideo}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/civgUOommC8?si=CVLx2nNoaDR_ZLIE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className={styles.tituloSobre}>
          Desistir jamais! Vamos até o fim nos fortalecendo e acreditando cada vez mais em nós!
        </div>
      </div>
    </>
  )  
};
export default SobrePage;