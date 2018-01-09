import React from 'react'
import EmailList from './EmailList'
import MailBox from './MailBox'

class Container extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email_id : null,
    }
    this.SelectHandler = this.SelectHandler.bind(this);
  }
  SelectHandler(mail_id){
    this.setState({email_id : mail_id});
  }
  render(){
   return (
     <div>
       <EmailList SelectHandler={this.SelectHandler} email_list={this.props.email_list} />
       <MailBox email_id = {this.state.email_id} email_list={this.props.email_list} />
     </div>
   )
  }
}

export default Container
