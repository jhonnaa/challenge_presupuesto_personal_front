import React from "react";

export const List = ({ lista }) => {

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
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>
                <div className="cont-btn">
                  <button className="btn-action delete-action"><i className="fa-solid fa-trash-can"></i></button>
                  <button className="btn-action edit-action"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
