import { useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState({
    name:'',
    address: '',
    phoneNum: 0,
    email:'',
    complaint:'',
    contact:'',
    termsCon: true,
  })


  const handleSubmit = event => {
    event.preventDefault();
    console.log(state)
  }
  

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input 
            type="text" 
            name="name" 
            value={state.name}
            onChange={(event) => setState({...state, name: event.target.value})}
            required />
          </label>
          <label>
            Address
            <input
            type="text"
            name="address"
            value={state.address}
            onChange={(event) => setState({...state, address: event.target.value})} />
          </label>
          <label>
            Phone Number
            <input
             type="tel" 
             name="phone"
             value={state.phoneNum}
             onChange={(event) => setState({...state, phoneNum: event.target.value})} />
          </label>

          <label>
            Email
            <input 
            type="email" 
            name="email"
            value={state.email}
            onChange={(event) => setState({...state, email: event.target.value})} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={state.complaint}
              onChange={(event) => setState({...state, complaint: event.target.value})}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input 
              type="radio" 
              name="contact" 
              value="phone" 
              onChange={(event) => setState({...state, contact: event.target.value})}/>

              Phone
            </label>

            <label>
              <input 
              type="radio" 
              name="contact" 
              value="email"
              onChange={(event) => setState({...state, contact: event.target.value})} />
              Email
            </label>

            <label>
              <input 
              type="radio" 
              name="contact" 
              value="post" 
              onChange={(event) => setState({...state, contact: event.target.value})} />
              
              Slow Mail
            </label>

            <label>
              <input 
              type="radio" 
              name="contact" 
              value="none" 
              onChange={(event) => setState({...state, contact: event.target.value})} />
              
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={() => state.termsCon} required/>
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
