import React, { Component } from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostListItem from '../post-list-item';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';




const AppBlock = styled.div`
   
   margin: 0 auto;
   max-width: 800px;

`




const App = ()=> {
   
     const data = [
            {label : 'go learn react', imortant:false, id: 'qwe'},
            {label : 'that is so good', imortant:false, id: 'qww'},
            {label : 'good work', imortant:false, id: 'qrt'}

     ];
   
       return ( 
    
      <AppBlock>   
           <AppHeader />

    <div className = 'search-panel d-flex'>
           <SearchPanel />
           <PostStatusFilter />
    </div>         
            <PostList posts={data} />
            <PostAddForm />

      </AppBlock>

   
   
             
    )
}

export default App;

// export default class App extends Component {
//     render() {



//         return (
//             <div className = 'app'>
//            <AppHeader />
//             <PostList />

//      <div className = 'search-panel d-flex'>
//             <SearchPanel />
//             <PostStatusFilter />
//      </div>

//      </div>
//         )
//     }
// }