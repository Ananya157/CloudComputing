import React,{Component} from 'react'
import './App.css';

const writeFileP = require("write-file-p");

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
    this.onClick = this.onClick.bind(this);
  };

  handleChange= (event) =>{
  event.preventDefault();
  const {name, value} = event.target;
  this.setState({[name]:value});
  console.log(this.state);
}

onClick = () =>{
  writeFileP.sync("/Users/ananya/Downloads/Third Semester/Cloud Computing/CloudComputing/data.json", {
    Name: this.state.Name,
    Email: this.state.Email,
    Level: this.state.Level,
    Taken: this.state.Taken,
    Expectation: this.state.Expectation
  })
}

   
  render() {
    return <div>
      <div className="container">
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
            {/* <input type="text" id="level" placeholder="Enter level" name="Level" value={this.state.Level} onChange={this.handleChange} required /> */}
             <div className="radio">
          <label>
            <input
              type="radio"
              value="BS"
              name="Level"
              checked={this.state.Level === "BS"}
              onChange={this.handleChange}
            />
            BS
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="MS"
               name = "Level"
              checked={this.state.Level === "MS"}
              onChange={this.handleChange}
            />
            MS
          </label>
        </div>
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
            <input type='submit' onClick={this.onClick}/>
          </div> 
      </div>
     
    </div>
  }
}
export default App;
