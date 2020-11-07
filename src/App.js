import './App.css';
import React ,{Component} from 'react'
import List from './list.js'
import  ChartsPage from './piechart.js'
import Form from './form.js'

class App extends Component{
  render(){
    return(
      <div className="App">
      <div className="p">
      <div className="pie">
      < ChartsPage/>
      </div>
      <div>
      <div className="c">
      <h1>23%</h1>
      </div>
      <div className="form">
      
      <Form/>
       </div>
       </div>
      </div>

      
    
      
      <List/>

      </div>
      );
  }
}


export default App;
