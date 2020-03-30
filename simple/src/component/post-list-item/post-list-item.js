import React, {Component} from 'react';

import './post-list-item.css';


export default class PostListItem extends Component {
        constructor(props) {
            super(props);
            this.state = {
                important:false
            };

            this.onImportant = this.onImportant.bind(this);
        }
      


        onImportant(){

            this.setState(({important}) =>{
                return {
                    important: !important
                }
            })
        }
  
  






















    

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         important:false
    //     };

    //     this.onImportant = this.onImportant.bind(this);
    // }

   


    // onImportant() {
    //     this.setState(({important}) =>{
    //        return {
    //            important: !important
    //        }
    //     })
    // }
     

    render() {
               const {label} = this.props;

               const {important} = this.state;

                 
        let classNames = 'app-list-item d-flex justify-content-between';
             if (important) {
                 classNames +=' important';
             }
        
        return (
            <div className = {classNames}>
             
                          <span className = 'app-list-item-label'>
                              {label}
            
            
                          </span>
            
                          <div className = 'd-flex justify-content-center align-items-center'>
                               <button type = 'button' onClick = {this.onImportant} className = 'btn-star btn-sm'>
                                   <i className = 'fa fa-star' ></i>
                               </button>
            
                               <button  type = 'button' className = 'btn-trash btn-sm'>
                                   <i className = 'fa fa-trash-o' ></i>
                                   <i className = 'fa fa-heart' ></i>
                               </button>
            
                          </div>
            
                    </div>
        )
    }
}





















