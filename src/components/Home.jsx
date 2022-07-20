import React, { useEffect, useState } from "react";
import { EditFrom } from "./EditFrom";
import { Form } from "./Form";
import { List } from "./List";
import { Navbar } from "./Navbar";

export const Home = () => {
  const ff = () => {
    const form = document.querySelector(".cont-form");
    form.style.bottom = "60px";
  };

  const [lista, setLista] = useState([]);
  const [listDeleted, setListDeleted] = useState(false);
  useEffect(() => {
    llamar();
    setListDeleted(false);
  }, [listDeleted]);

  const llamar = async () => {
    try {
      const llamada = await fetch("http://localhost:3008/api");
      const data = await llamada.json();
      setLista(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const ingresos = [];
  const egresos = [];

  const ne = lista.filter((word) => word.type == "ingreso");
  ne.map((item) => egresos.push(item.mount));

  const nel = lista.filter((word) => word.type == "egreso");
  nel.map((item) => ingresos.push(-Math.abs(item.mount)));

  const totlal = ingresos.concat(egresos);
  let sume = 0;
  for (let i = 0; i < totlal.length; i++) {
    sume += totlal[i];
  }

  const mostrarFormEdit = ()=>{
    document.querySelector('.edit-form').style.display = 'flex'
  }


  const handleDelete = id =>{
    fetch('http://localhost:3008/api/'+id,{
      method:"DELETE",
      headers:{"Content-type":"application/json"}
  })

  setListDeleted(true)
}

  return (
    <React.Fragment>
      <div className="cont">
        <div className="cont-list">
          <List lista={lista} setListDeleted={setListDeleted} total={sume} />
        </div>
        <div className="cont-form">
          <Form />
        </div>
      </div>




      <div className="cont-btn-add-more">
        <button onClick={ff} className="btn-add-more">
          agregar mas
        </button>
      </div>

      <div className="cont-list-m">
        {lista.map((item) => (
          <div className="cont-item-m" >
            <div className="cont-uno">
              <h3>{item.concept}</h3>
              <h3>{item.type}</h3>
              <h4>{new Date(item.date).toDateString()}</h4>
            </div>
            <div className="cont-dos">
              {item.type === "egreso" ? (
                <i class="fa-solid fa-arrow-down-long"></i>
              ) : (
                <i class="fa-solid fa-arrow-up-long"></i>
              )}
            </div>
            <div className="cont-tres">
              <h2>${item.mount}</h2>
            </div>
            <div className="cont-cuatro">
              <button onClick={mostrarFormEdit} className="btn-editar-m">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>{" "}
              <button onClick={()=>handleDelete(item.id)} className="btn-eliminar-m">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-m">TOTAL: &nbsp; ${sume}</div>
    </React.Fragment>
  );
};
