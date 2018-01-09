import React from 'react'
import Email from './Email'
var createReactClass = require('create-react-class');

const EmailList = createReactClass({
  render: function(){
    const email_list = this.props.email_list.map((email,i)=>{
      return (
        <tr onClick={()=>{this.props.SelectHandler(email.id)}}>
           <Email key={i} from={email.from} to={email.to} subject={email.subject} />
        </tr>
      )
    });
    return (
      <div>
        <table>
        <thead>
           <tr>
             <th> Subject </th>
             <th> From </th>
             <th> to </th>
            </tr>
        </thead>
         <tbody>
           {email_list}
          </tbody>
        </table>
      </div>
    )
  }
});

export default EmailList
