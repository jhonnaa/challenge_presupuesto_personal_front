import React from 'react'

export const List = ({li ,cont}) => {
    const{concept,mount,date,type} = li
    
  return (
    
        <tr>
        
        <td>{concept}</td>
        <td>{mount}</td>
        <td>{date}</td>
        <td>{type}</td>
        
        </tr>
    
  )
}
