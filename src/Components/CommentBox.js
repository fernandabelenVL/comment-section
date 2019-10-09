import React, { Component } from 'react';
import './CommentBox.css'

class CommentBox extends Component {
    render () {
        return (
            <section className="comment-box">
                <p className="comment-text">{comment.text}</p>
                    <div className="buttons">
                        <button className="edit btn">EDITAR</button>
                        <button className="delete btn">ELIMINAR</button>
                    </div>
                <hr/>
            </section>
        )
    }
}

export default CommentBox;