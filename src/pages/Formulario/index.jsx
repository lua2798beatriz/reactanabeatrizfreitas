import Botao from "../../componentes/Botao";
import CampoTexto from "./CampoTexto"
import './Formulario.css';



const Formulario = (props) => {  
return(

    <section className="formulario">
      
    <form>
    <h2>Entre em contato</h2>
    <CampoTexto 
      label='Nome'
      placeholder='Digite seu nome'
      obrigatorio={true} 
      aoAlterarCampo={valor=>(valor)} />
    <CampoTexto
     label='Email'
     placeholder="Digite seu Email"
     obrigatorio={true} 
     aoAlterarCampo={valor=>(valor)}/>
    <CampoTexto 
      label='Mensagem'
      placeholder='Digite sua mensagem'
      obrigatorio={true} 
      aoAlterarCampo={valor=>(valor)} />
      <Botao>Enviar</Botao>
    </form>
    </section> 
)
}

export default Formulario;