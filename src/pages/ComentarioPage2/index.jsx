import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import coreImg from '../../assets/core.png'
import styles from './ComentarioPage2.module.css'
import CampoTexto from '../Formulario/CampoTexto'



const ComentarioPage2 = () => {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
  
    if (items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }
  
  const [list, setList] = useState(getLocalList)
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    const task = {
      id: nanoid(),
      title: newTask,
      isComplete: false
    }

    if(task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  function handleRemoveTask(id) {
    // Remova uma task da listagem pelo ID
    const tasksFiltered = list.filter(task => task.id !== id)
    setList(tasksFiltered)
  }

  //salvar na localStorage
  useEffect(() => {
localStorage.setItem('list', JSON.stringify(list))}, [list])

  return (
    <>
    <div 
    className={styles.card}>
            <img className={styles.imagemCard} src={coreImg} />
    </div>
      <div className={styles.header}>
        <h1>
          Deixe seu comentário
        </h1>
      </div>
      <CampoTexto 
      label='Comentário:'
      placeholder='Digite seu comentario'
      obrigatorio={true} 
      aoAlterarCampo={valor=>(valor)} />
    <CampoTexto />
    
      </> 
  )
}

export default ComentarioPage2;