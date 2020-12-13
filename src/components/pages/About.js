import React from "react";
import "../style.css";
import Container from "../Container";
import Wrapper from "../Wrapper"

const About = () => (
	<Wrapper>
<Container>
<div class="card">
<h2 class="card-title">About Me:</h2>
  <div class="card-body">
	<img src="https://media-exp1.licdn.com/dms/image/C4E03AQHsugInc3qX3w/profile-displayphoto-shrink_400_400/0?e=1609977600&v=beta&t=mzXR650hBBKSPTIefn1dRUr3EC9re0PZK3p9B4CKPGQ" className="imgindex" alt="Analee Guerra"></img>
		<p>
		Hi, I'm Analee Guerra. I am a proud member of the Fightin'
		Texas Aggie Class of 2012 (Whoop!). I have a bachelors degree in Microbiology,
		a second bachelors in Clinical Laboratory Sciences and am currently enrolled
		in the UTSA Coding Bootcamp for Full Stack Web Development. Currently, I work as a
		Medical Laboratory Scientist at University Hospital. In my spare time, I love going
		hunting, fishing and being in the outdoors. Health and fitness are also passions
		of mine. I am also a certified CrossFit Level 1 and USA Weightlifting Level 1 Coach.
		</p>
		<ul>
						<p>
						<i class="fab fa-github-square"></i> Git Hub: <a href="https://github.com/aguerra1508" target="_blank">aguerra1508</a>
						</p>
						<p>
						<i class="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/analee-guerra-b23198168" target="_blank">Analee
								Guerra</a>
						</p>
						<p>
						<i class="far fa-file"></i> Resume: <a href="https://www.linkedin.com/in/analee-guerra-b23198168/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACfk4UsB1LZhLhgMrjPCapGTbwTXhP-QAjQ,1604705594532)/" type="application/pdf" target="_blank">Analee Guerra</a>
						</p>
						<p>
						<i class="fas fa-mobile-alt"></i> Phone: 210-846-5452
						</p>
						<p>
						<i class="far fa-envelope"></i> Email: <a href="mailto: aguerra1508@gmail.com">aguerra1508@gmail.com</a></p>
					</ul>
  </div>
	</div>
	</Container>
	</Wrapper>
);

export default About;
