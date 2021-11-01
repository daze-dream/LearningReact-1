import React from 'react'
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.components'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this)
  }



  async componentDidMount() {
    let response  = await fetch('https://jsonplaceholder.typicode.com/users')
    let monstersJSON = await response.json()
    this.setState({monsters: monstersJSON})
  }

  handleChange =(e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => (monster.name.toLowerCase().includes(searchField.toLowerCase()))
    )
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
      <SearchBox 
        placeholder="search monsters"
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;
