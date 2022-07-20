import React from "react";
export const List = ({ lista , setListDeleted, total }) => {

  const handleDelete = async id =>{
        fetch('http://localhost:3008/api/'+id,{
          method:"DELETE",
          headers:{"Content-type":"application/json"}
      })
    
      setListDeleted(true)
  }
  const mostrarForm = item => {
    document.querySelector('.edit-form').style.display = 'flex'
    document.querySelector('.cont').style.opacity ='.3'
    document.querySelector('.edit-input-concept').value = item.concept
    document.querySelector('.edit-input-mount').value = item.mount
    document.querySelector('.edit-input-date').value = item.date
    document.querySelector('.edit-input-type').value = item.type
    document.querySelector('.edit-input-id').value = item.id
  }

  

  return (
    <React.Fragment>
      <table cellspacing="0" cellpadding="0">
        <thead>
          <th>CONCEPT</th>
          <th>MOUNT</th>
          <th>DATE</th>
          <th>TYPE</th>
          <th>ACTION</th>
        </thead>
        <tbody>
          {lista.map(item=> (
            
            
            <tr className="ooo" key= {item.id}> 
              <td>{item.concept}</td>
              <td>${item.mount}</td>
              <td>{new Date(item.date).toDateString()}</td>
              <td>{item.type}</td>
              <td>
                <div className="cont-btn">
                  <button onClick={()=>handleDelete(item.id)} className="btn-action delete-action"><i className="fa-solid fa-trash-can"></i></button>
                  <button onClick={()=>mostrarForm(item)} className="btn-action edit-action"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
              </td>
            </tr>
            
          ))}
        </tbody>

        
      </table>
      <div className="total">
          TOTAL: &nbsp; ${total}
        </div>
    </React.Fragment>
  );
};
