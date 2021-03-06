import React from 'react';
import Footer from './footer.js'
import img1 from '../img/img1_Small.png';

import Pricing from './pricing.js'

const About = () => (
  <div className="aboutComp">
    <h2 className="subHeader">About</h2>
    <p>Joel Helander holds a bachelors degree in music from Clark University and has trained as a pianist across the jazz, pop, and classical styles for over thirteen years. He is a self-taught guitarist and ukulele player of ten years, a songwriter, and a composer. Over the past five years, Joel has taught music lessons, classes, and ensembles at Worcester Music Academy, Easthampton Music Conservatory, and the Academy at Charlemont. Joel's first two albums Flood and Passing Frames have been featured on Forbes Online and currently reside in the top ten artist-recommended classical albums on bandcamp.com. More recently, he played keyboards as a session musician on Jake Klar's Until the Wildfire Becomes Paradise and continues to perform in Klar's touring band.</p>

    <img src = {img1} alt = "Teaching Pic" />

    <p>    As a teacher, Joel emphasizes the crucial balance between patient preparation and free improvisation. From day one, he strives to identify what specifically draws his students to music, and what rudiments they will need to learn in order to meet their goals. This approach combined with an equal focus on in-the-moment creative expression helps the student to see music not as a test or a stressor, but as a lifelong companion and expressive outlet. Whether you hope to learn jazz, pop, or classical, to work on ear training, sight-reading, improvisation, or theory, Joel is excited to share his knowledge with you in a fun and relaxed lesson environment. Contact j.n.helander@gmail.com with inquiries about lesson pricing and availability. </p>

    <Pricing /> 

    <Footer /> 
  </div>
);

export default About;