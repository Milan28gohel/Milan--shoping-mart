import React, {Component} from 'react';
import { Header,Footer } from '../component/common';

class RootContainer extends Component{
    constructor(props){
        super(props);
    };
      render(){
        return(
            <div>
                <header>
                    <Header/>
                    <Footer/>
                </header>
            </div>
        );
      }
    }
      
export default  RootContainer;  