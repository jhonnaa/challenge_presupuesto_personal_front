import {React} from "react";

export const EditFrom = () => {

    const cancel =()=>{
        document.addEventListener('submit',e=>{
            
        })
        document.querySelector('.edit-form').style.display ='none'
            document.querySelector('.cont').style.opacity ='1'
        
    }

    const handleUpdate = async ()=>{
      let myConcept = document.querySelector('.edit-input-concept').value;
      let myMount = document.querySelector('.edit-input-mount').value;
      let myDate = document.querySelector('.edit-input-date').value;
      let myType = document.querySelector('.edit-input-type').value;
      let myId = document.querySelector('.edit-input-id').value

      const myTransaction ={
          concept:myConcept, 
          mount: parseInt(myMount),
          date: new Date(myDate),
          type: myType
      }
      console.log(myId)
      let transaction = JSON.stringify(myTransaction)
      


      try{
          let res = await fetch('http://localhost:3008/api/'+myId,{
              method:"PUT",
              headers:{"Content-type":"application/json"},
              body:transaction
          }
          )
          let json =  res.json
          console.log(json)
          } 
          catch(error){}
}


  return (
    <div>
      <form className="edit-form">
        <h1>Editar</h1><input type="hidden" className="edit-input-id" />
        <label for="concept">Concepto</label>
        <input className="edit-input-concept" placeholder="Concepto" type="text" name="concept" id="concept"/>

        <label for="mount">Monto</label>
        <input className="edit-input-mount"  placeholder="Monto" type="number" name="mount" id="mount" />

        <label for="date">fecha</label>
        <input className="edit-input-date"  placeholder="fecha" type="date" name="date" id="date" />

        <label for="type">tipo</label>
        <input className="edit-input-type" type="text" name="" id=""  readOnly />

        <div className="cont-btns-form-edit">
          <button onClick={handleUpdate} className="btn-form-editar">
            Editar 
          </button>
          <div className="btn-form-cancelar-edit" onClick={cancel}>
            Cancelar
          </div>
        </div>
      </form>
    </div>

  );
};
