import React,{useEffect,useState} from 'react'
import { Form } from './Form'
import { List } from './List'



export const Home = () => {

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

<h1>PRESUPUESTO PERSONAL</h1>
<div className='cont'>
<div class="cont-list">
    <table>
        <thead>
            
            <th>concept</th>
            <th>mount</th>
            <th>date</th>
            <th>type</th>
            <th>action</th>
        </thead>
        <tbody>
            
            {lista.map((item)=>(
            <List key ={item.id} li={item} />
            ))}
        </tbody>
    </table>
</div>
<Form/>
</div>
    </React.Fragment>
  )
}
