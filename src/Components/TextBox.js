import React, { Component } from 'react';
import Box from '@material-ui/core/Box';


class TextBox extends Component {
   constructor () {
      super();
      this.state = {
         text: ''
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleSend = this.handleSend.bind(this);
   };

   handleInput (e){
      const {value, name} = e.target;
      this.setState({
         [name]: value
      })
   };

   handleSend () {
      this.props.onAddComment(this.state);
   };

   render () {
      return (
         <Box className="comment-input">
         <textarea rows="6" placeholder="Escribe tu comentario" name="text" onChange={ this.handleInput }></textarea>
         <div className="flex-right" >
            <button className="btn send" onClick={this.handleSend}>ENVIAR COMENTARIO</button>
         </div>
      </Box>
)
   }
}

export default TextBox;