import './App.css';
import React, { Component } from 'react';
import CardList from '../components/CardList';

class App extends Component{
  constructor(){
    super()
    this.state = {
      searchfield: '',
      age: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  componentDidMount() {
    this.setState({
      searchfield: '',
      age: []
    });
  }
   handleChange(event) {
    this.setState({searchfield: event.target.value});
  }
  //handles the form submit
  handleSubmit(event) {
    event.preventDefault();
    let { age, searchfield } = this.state;
    fetch(`https://api.agify.io?name=${searchfield}`)
      .then(response=> response.json())
      .then(user => {
        age.push(user);
        this.setState({ age: age   })
      })
  }

  handleClear(event){
    event.preventDefault();
    this.setState({
      searchfield:'',
      age: []
    });
  }

  render() {
    const { age, searchfield } = this.state;
    return (
      <div className = "tc">
        <h1 className = "washed-red b--dashed bw1 br4 grow dib w-90" >Agify</h1>
        <p className = "washed-red"> Enter the name and I will guess the age</p>
        <form  autoComplete="new-password" onSubmit = {this.handleSubmit}> 
          <input autoComplete="off" className= "name input-reset ba b--light-pink pa2 mb2 w-30" value = {searchfield} onChange = {this.handleChange}/><br/>
          <button type ="submit" className="submit f6 grow no-underline br-pill ba ph3 pv2  ma3 mb2 dib dark-pink b--light-pink">Submit</button>
          <button type ="cancel" onClick = {this.handleClear} className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-pink b--light-pink" >X</button>
        </form>
         <CardList person ={age}/>
      </div>


    );
  }
}

export default App;
