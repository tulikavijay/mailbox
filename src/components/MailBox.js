import React from 'react'
var createReactClass = require('create-react-class');
import './style.css'


const MailBox = createReactClass({

  EmailDisp : function(){
    const email_id = this.props.email_id
    const email = this.props.email_list.filter((mail)=>mail.id === email_id )[0]
    console.log(email)
    return (
      <div class="mailbox">
         <ul>
         <li>From : {email.from}</li>
         <li>to : {email.to} </li>
         <li>Subject : {email.subject} </li>
         <div>
             <p>Body:</p>
             <div dangerouslySetInnerHTML={{__html: email.body}}>
             </div>
         </div>
         </ul>
      </div>
    )
  },

  NoneSelected : function(){
    return <div> No email Selected </div>
  },

  render : function(){
    return this.props.email_id ? this.EmailDisp() : this.NoneSelected()
  },

});
export default MailBox
