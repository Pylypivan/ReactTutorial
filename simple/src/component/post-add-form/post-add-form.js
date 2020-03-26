import React from 'react';

const PostAddForm = ()=> {
    return (
       <form className = 'bottom-panel d-flex'>
           <input
           type = 'text'
           placeholder = 'про що ви думаєте?'
           className = 'form-control new-post-label'
           />
           <button

           type = 'submit'
           className = 'btn btn-outline-secondary'>

               добавити

           </button>

       </form>
    )
}

export default PostAddForm;