import '../default.css'

import React, { Component } from 'react'

function EmailTitle() {
  return (<div>
          <h1 align = 'center' className = 'title'>Casual Staring Mailing List</h1>
        </div>);
}

class EmailBody extends Component {

    state = { email: "" , display_text:""};

    getEmail = () => {
        // Selecting the input element and get its value
        var format = /\w+@\w+\.(edu|com)/;
      
        var is_valid = false;
        if (this.state.email.search(format) !== -1) {
          is_valid = true;
        }
      
        if (!is_valid) {
            this.setState({
                display_text: 'Invalid email address.'
              })
          return;
        }
        this.setState({
            display_text: 'Email successfully recorded.'
          })
    }

    handleInput = event => {
        this.setState({ email: event.target.value });  
    };
    


    render() {
        return (
            <div className='Email Content'>
            <div className='content-line'>
                <label htmlFor='fname1'>E-mail address please:</label><br></br>
                <input type="text" onChange={this.handleInput}></input><br></br>
                <button type="button" onClick={this.getEmail}>Submit</button><br></br>
            </div>
            <p id="email_message">{this.state.display_text}</p>
            
            </div>
        );
    }
}

// function EmailBody() {
//     return (
//         <div className='Email Content'>
//         <div className='content-line'>
//             <label for='fname1'>E-mail address please:</label><br></br>
//             <input type="text" onChange={}></input><br></br>
//             <button type="button" onclick={getEmail()}>Submit</button><br></br>
//         </div>
//         <p id="email_message"></p>
        
//         </div>
//     );
// }

export {
    EmailTitle, 
    EmailBody,
}