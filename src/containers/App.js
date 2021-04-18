import React, {Component} from 'react';
import CardList from '../components/CardList'
// import {robots} from './robots';
import Searchbox from '../components/Searchbox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

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
      return response.json()}) //response in formato json
    .then(user => {
      this.setState({robots: user}) //selezione ed imposta lo state come da sintassi standard di REACT
    })
    .catch(console.log('catching response',Response)) //Intercetta evenuali errori
    ;
  }

//Questa funzione ha il compito di memorizzare il valore dell'evento inserito nel searchbox da passare allo STATE dell'app
  onSearchChange = (event) => { //funzione passata come metodo al searchBox per intercettare l'evento
      this.setState({searchField: event.target.value }) //target.value ritorna il valore passato dall'evento
      }

  render(){
    const {robots, searchField} = this.state //destrutturazione di assegnazione dei valori di state a due variabili
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
              <ErrorBoundry>
                <CardList robots={filteredRobots}/>
              </ErrorBoundry>
            </Scroll>
          </div>
        );
      }
    }
export default App;
