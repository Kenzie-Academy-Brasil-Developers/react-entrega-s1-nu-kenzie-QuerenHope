import { useState } from 'react'
import Lista from '../../components/lista'
import Form from '../../components/form'

const Dashboard = ({setloginPage}) => {

    const [tarefas, settarefas] = useState([])

    const soma = tarefas.reduce((a, b) => a + Number(b.valor), 0)
    


    return(
        <>
            <header className="cabecalho">
                <figure>
                    <img src="./assets/nuKenzie.png" alt="" />
                </figure>
                <button onClick={() => setloginPage(true)}  id='button_inicio'>Logout</button> 
            </header>

            <div className='container'>

                <Form settarefas = {settarefas}/>

                <div className='container_info'>
                    <div className='info'>
                    <div>
                    <span>Resumo financeiro</span>
                    </div>
                    <div className='buttons'>
                    <button id='todos'>Todos</button>
                    <button id='entradas'>Entradas</button>
                    <button id='despesas'>Despesas</button>
                    </div>
                </div>
                <div className='container_list'>
                    
                    <Lista tarefas = {tarefas}/>
                    
                </div>
                </div>
            </div>
            
                <div className='valorTotal'>
                <h2>Valor Total:</h2>
                <p>{`R$ ${soma}`}</p>
                </div>

            </>

    )
}

export default Dashboard