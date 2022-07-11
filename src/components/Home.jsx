import React,{useEffect,useState} from 'react'
import { Form } from './Form'
import { List } from './List'
import { Navbar } from './Navbar'



export const Home = () => {

    const ff= () =>{
        const form = document.querySelector('.cont-form')
        form.style.bottom = '60px'
    }
    


    const [lista,setLista] = useState([])

    useEffect(()=>{
        llamar()
    },[])
    
    const llamar = async()=>{
        try{
            const llamada = await fetch('http://localhost:3008/api') 
            const data = await llamada.json()
            setLista (data)
            console.log(data)
        } 
        catch(error){
            console.log(error)
        }
    }

  return (
    <React.Fragment>

        <Navbar/>
        <div className="cont">
            <div className="cont-list">
            <List lista={lista}/>
            </div>
            <div className='cont-form'>
            <Form/>
            </div>
        </div>
        <div className='cont-btn-add-more'>
            <button onClick={ff} className='btn-add-more'>agregar mas</button>
        </div>
        
        
        <div className="cont-list-m">
            {lista.map(item=>(
            <div  className='cont-item-m'>
            <div className='alt-m'> <div className='btn-editar-m'><i class="fa-solid fa-pen-to-square"></i></div> <div className='btn-eliminar-m'><i className="fa-solid fa-trash-can"></i></div></div>
                <div className="cont-uno">
                <h3>{item.concept}</h3>
                <h3>{item.type}</h3>
                <h4>{item.date}</h4>
                </div>
                <div className="cont-dos">
                    <h2>${item.mount}</h2>
                </div>
                <div className="cont-tres">

                </div>
                <div className="cont-cuatro"></div>
            </div>
           ))}
        </div>
    

    </React.Fragment>
  )
}
