import React, { Component } from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostListItem from '../post-list-item';
import PostAddForm from '../post-add-form';






const App = ()=> {
    return ( 
    
    <div className = 'app'>
           <AppHeader />

    <div className = 'search-panel d-flex'>
           <SearchPanel />
           <PostStatusFilter />
    </div>         
            <PostList />
            <PostAddForm />

           

    </div>
   
             
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