import React from 'react'

export const Form = () => {
    const send = async e=>{
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
                let json =  res.json
                console.log(json)
                } 
                catch(error){}
    }
    const cc =()=>{
        document.addEventListener('submit',e=>{
           
        })
        const form = document.querySelector('.cont-form')
        form.style.bottom ='1000px'
    }
    

    

  return (
    <React.Fragment>
        

        <form  id='myForm'>
        <label for="concept">Concepto</label>
        <input placeholder='Concepto' type="text" name="concept" id="concept"/>

        <label for="mount">Monto</label>
        <input placeholder='Monto' type="number" name="mount" id="mount"/>

        <label for="date">fecha</label>
        <input placeholder='fecha' type="date" name="date" id="date"/>

        <label for="type">tipo</label>
        <select name="type" id="type">
            <option value=""> Seleccione tipo de ingreso</option>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
        </select>

        <div className='cont-btns-form'>
        <button type='submit' className='btn-form' onClick={send} >Agregar</button>
        <div  className='btn-form-cancelar' onClick={cc}>Cancelar</div>
        </div>
    </form>



    </React.Fragment>
  )
}
