import {FaTrashAlt} from 'react-icons/fa'

const Lista = ({tarefas}) => {

    console.log(tarefas)
    return(
        <>
            {
                tarefas.map((tarefas,index) => (
                    
                <ul key={index} className='list'>
                    <li className='liCards'>
                        <h2>{tarefas.descricao}</h2>
                        <span>{tarefas.tipo}</span>
                        <p>{`R$ ${tarefas.valor}`}</p>
                        <button><FaTrashAlt/></button>
                    </li>
                </ul>
                ))
            }
        </>
        
    )
}

export default Lista