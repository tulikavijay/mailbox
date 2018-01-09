import React from 'react';

const Email = (props)=>{
  return (
    <React.Fragment>
    <td>
    {props.subject}
    </td>
     <td>
       {props.from}
     </td>
     <td>
      {props.to}
     </td>
    </React.Fragment>
  )
}

export default Email
