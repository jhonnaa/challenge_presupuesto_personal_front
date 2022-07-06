import React from 'react'

export const Form = () => {
    const fafa = async e=>{
            //e.preventDefault()
            let myConcept = document.getElementById('concept').value;
            let myMount = document.getElementById('mount').value;
            let myDate = document.getElementById('date').value;
            let myType = document.getElementById('type').value;

            const myTransaction ={
                concept:myConcept, 
                mount: parseInt(myMount),
                date: new Date(myDate),
                type: myType
            }
            let transaction = JSON.stringify(myTransaction)


            try{
                let res = await fetch('http://localhost:3008/api',{
                    method:"POST",
                    headers:{"Content-type":"application/json"},
                    body:transaction
                }
                )
                let json = await res.json
                console.log(json)
                } 
                catch(error){}
    }
    
        
        
    


  return (
    <React.Fragment>
        <div className='cont-form'>

        <form  id='myForm'>
        <label for="concept">Concepto</label>
        <input  type="text" name="concept" id="concept"/>

        <label for="mount">Monto</label>
        <input  type="number" name="mount" id="mount"/>

        <label for="date">fecha</label>
        <input  type="date" name="date" id="date"/>

        <label for="type">tipo</label>
        <select name="type" id="type">
            <option value="tipo"> Seleccione tipo de ingreso</option>
            <option value="ingreso">ingreso</option>
            <option value="egreso">Egreso</option>
        </select>

        <button type='submit' className='submit' onClick={fafa} >agregar</button>
    </form>


</div>

    </React.Fragment>
  )
}
