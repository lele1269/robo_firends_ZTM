import React, {Component} from 'react';
import CardList from '../components/CardList'
// import {robots} from './robots';
import Searchbox from '../components/Searchbox'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component { //utilizzo degli state di React
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField:''
    }
  }

  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()})
    .then(users => {
      this.setState({robots: users})
    })
    .catch(console.log())
    ;
  }

  onSearchChange = (event) => { //funzione passata come metodo al searchBox per intercettare l'evento
      this.setState({searchField: event.target.value})
      }

  render(){
    const {robots, searchField} = this.state
    const filteredRobots = robots.filter(robots =>{
        return robots.name.toLowerCase().includes(searchField.toLowerCase())
      })
      return !robots.length ?
        <h1>Loading</h1> :
        (
          <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </div>
        );
      }
    }
export default App;
