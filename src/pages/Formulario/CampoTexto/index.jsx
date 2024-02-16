import './CampoTexto.css';

const CampoTexto = (props) => {
    const aoDigitarnoCampo =(evento) => {
        props.aoAlterarCampo(evento.target.value)
    }

    const placeholderModificada = `${props.placeholder}...`;
    return(
       // <label>Nome</label>
       <div>
        <label>{props.label}</label>
        <input OnChange={aoDigitarnoCampo}required={props.obrigatorio} placeholder={placeholderModificada}/>
       </div>
        
    )
}

export default CampoTexto;