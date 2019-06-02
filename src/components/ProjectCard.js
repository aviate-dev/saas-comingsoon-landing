import React from 'react';

const ProjectCard = () => (

    <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://cdn.dribbble.com/users/757683/screenshots/6451452/groupa.jpg" alt="Placeholder image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
       <p class="title is-4">CallTalkyzr</p>
          <p class="subtitle is-6">@rahulvyas</p>
        </div>
      </div>
  
      <div class="content">
        React Native based app for tracing calls with a web dashboard. Full monitisation.

        
      </div>
      <p class="title is-5 has-text-success">INR 50,000</p>
    </div>
    <footer class="card-footer">
    <p class="card-footer-item">
      <span>
      <time datetime="2016-1-1">Posted on 1 Jan 2016</time>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
      <a class="button is-primary">Buy Now</a>
      </span>
    </p>
  </footer>
  </div>
      

);


export default ProjectCard;
