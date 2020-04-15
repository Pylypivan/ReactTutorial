import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {

      this.setState({
          text:e.target.value
      })
    }

    render() {
        return(
            <form className = 'bottom-panel d-flex'>
            <input
            type = 'text'
            placeholder = 'про що ви думаєте?'
            className = 'form-control new-post-label'
            onChange = {this.onValueChange}
            />
            <button
 
            type = 'submit'
            className = 'btn btn-outline-secondary'
            
            
            >
 
                добавити
 
            </button>
 
        </form>
        )
    }
}

    