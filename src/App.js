import React from 'react'
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: []
    }
  }

  async componentDidMount() {
    let response  = await fetch('https://jsonplaceholder.typicode.com/users')
    let monstersJSON = await response.json()
    this.setState({monsters: monstersJSON})
  }
  render() {
    return(
      
      <div className="App">
      <CardList monsters={this.state.monsters}> 

      </CardList>

    </div>
    )
  }
}

export default App;
