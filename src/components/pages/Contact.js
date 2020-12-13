import React from "react";
import Container from "../Container";
import "../style.css";

const Contact = () => (
	<Container>
		<div class="card">
		<h2 class="card-title">Contact Me:</h2>
		<div class="card-body">
		<form class="gform pure-form pure-form-stacked" method="POST" data-email="aguerra1508@gmail.com"
						action="https://script.google.com/macros/s/AKfycbwLd0CsFwZNim32b2C3cIOS-AsF8SQGrqv4nK3Y/exec">

						<div class="form-elements form-group">
							<fieldset class="form-elements form-group text-dark">
								<label for="name">Name:</label>
								<input id="name" class="form-control" name="name" placeholder="Name" />
							</fieldset>

							<fieldset class="form-elements form-group text-dark">
								<label for="email">Email Address:</label>
								<input id="email" class="form-control" name="email" type="email" placeholder="example@email.com" />
							</fieldset>

							<fieldset class="form-elements form-group text-dark">
								<label for="message">Message: </label>
								<textarea id="message" class="form-control" name="message" rows="3" placeholder="Message"></textarea>
							</fieldset>

						
							<fieldset class="pure-group honeypot-field">
								<input id="honeypot" type="hidden" name="honeypot" value="" />
							</fieldset>

							<button class="button-success btn btn-dark">
								<i class="far fa-paper-plane"></i>&nbsp;Send</button>

						</div>

					</form>
		</div>
		</div>
	</Container>
)

export default Contact;