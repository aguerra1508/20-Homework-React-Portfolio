import React, { Component } from "react";

class Contact extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    textArea: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    alert("Thanks for contacting me! I will get back to you soon!");

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
			<div class="card">
				<div class="card-header">Contact</div>
  <div class="card-body">
	<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name:</label>
		<input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
	</div>
	<div class="form-group">
		 <label for="exampleFormControlInput1">Email:</label>
		<input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
  </div>
	<div class="form-group">
    <label for="exampleFormControlTextarea1">Message:</label>
    <textarea
            value={this.state.textArea}
            name="textArea"
            onChange={this.handleInputChange}
            rows="3"
            placeholder="Message"
          />
  </div>
	<button onClick={this.handleFormSubmit}>Submit</button>
</form>


  </div>
</div>
    );
  }
}

export default Contact;
