import React, { Component } from 'react';
import Navbar from './Components/Navigation';
import TextBox from './Components/TextBox';

//data
import { comments } from './comments.json'

//css
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './App.css';

class App extends Component {
   constructor (){
      super();
      this.state = {
         comments
      }
      this.handleAddComment = this.handleAddComment.bind(this);
   };

   handleAddComment (comment) {
      this.setState({
         comments: [...this.state.comments, comment]
      })
   };

   handleDelete (index) {
      if (window.confirm("¿Estás seguro de eliminar este comentario?")) {
         this.setState({
            comments: this.state.comments.filter((e, i) => {
               return i !== index
            })
         })   
      }
   }

   render () {
      const CommentBox = this.state.comments.map( (comment, i) => {
         return (
            <section className="comment-box" key={i}>
               <p className="comment-text" >{comment.text}</p>
                  <div className="buttons">
                     {/* <button className="edit btn" >EDITAR</button> */}
                     <button className="delete btn" onClick={ this.handleDelete.bind(this, i) }>ELIMINAR</button>
                  </div>
               <hr/>
            </section>
         )});

      return (
         <div>
            <Navbar/>
            <Container maxWidth="md">
               <div className="comment-section">
                  <TextBox onAddComment={this.handleAddComment}/>
                  <Box>
                     <h3>Comentarios</h3>
                     {CommentBox}
                  </Box>
               </div>
            </Container>
         </div>
      )
   }
}

export default App;
