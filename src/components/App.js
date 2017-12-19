import React from 'react';
import Contact from './Contact';

class App extends React.Component {
  //생성자
    constructor(props){
      super(props);
      this.state = {
        name:''
      };
    }
 //렌더
    render(){
        return (
          <Contact/>
        );
    }
}

export default App;
