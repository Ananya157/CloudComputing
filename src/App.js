import React,{Component} from 'react'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Level: '',
      Taken: '',
      Expectation: ''
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange= (event) =>{
  event.preventDefault();
  const {name, value} = event.target;
  this.setState({[name]:value});
  console.log(this.state);
}

   
  render() {
    return <div className="App">
      <form method='post' action='http://localhost:3001'>
        <div>
          <label>Name</label>
          <input type="text" id="name" placeholder="Enter name" name="Name" value={this.state.Name} onChange={this.handleChange} required /> 
        </div>
        <div>
          <label>Email</label>
          <input type="text" id="email" placeholder="Enter email" name="Email" value={this.state.Email} onChange={this.handleChange} required />
        </div>
        <div>
          <label>College Level</label>
          <input type="text" id="level" placeholder="Enter level" name="Level" value={this.state.Level} onChange={this.handleChange} required />
        </div>
        <div>
          <label>Classes Taken</label>
         <input type="text" id="taken" placeholder="Enter Courses Taken" name="Taken" value={this.state.Taken} onChange={this.handleChange} required />
        </div>
        <div>
          <label>Class Expectation</label>
         <input type="text" id="expectation" placeholder="Enter expectation" name="Expectation" value={this.state.Expectation} onChange={this.handleChange} required />
        </div>
         <div className='submit'>
              <input type='submit'/>
            </div> 
      </form>

     
    </div>
  }
}
export default App;
