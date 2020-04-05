import React from 'react';

import './app-headr.css';
import styled from 'styled-components';


const Header = styled.div`

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1{
        font-size: 23px;
        :hover{
            color:#BD8F6C;
        }
    }

    h2{
        font-size: 1.1rem;
        color: grey;
        :hover{
            color:#0BBFA5;
        }
    }
    

`


const AppHeader = ()=> {
    return (
         <Header>   

           <h1> Ivan Pylyp</h1>
           <h2> 5 записів , з них вподобали 0  </h2>

          </Header>
    ) 
}

export default AppHeader;