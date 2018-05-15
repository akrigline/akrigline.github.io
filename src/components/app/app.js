import React, { Component } from 'react'
import Logo from '../../assets/icons/logo.svg'
import styles from './app.scss'

class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
        </header>
        <main>
          <header>
            <Logo className={styles.appLogo} />
            <h1 className={styles.appTitle}>Andrew Krigline</h1>
            <ul>
              <li><a href='#skills'>Skills</a></li>
              <li><a href='#experience'>Experience</a></li>
              <li><a href='#training'>Training</a></li>
            </ul>
          </header>
          <section id="intro">
            <p>
              I am a front end developer with a strong creative background who specializes in writing React applications. I have a very firm understanding of React and Redux, and am capable of configuring a React project's webpack setup to do the things I want it to do. I've been described as a fast learner, hard worker, and quick problem solver by those I have worked with and for. My knowledge of javascript is strong enough for me to consider myself capable of picking up any javascript front end framework with limited training.
            </p>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Webpack</li>
              <li>HTML</li>
              <li>CSS
                <ul>
                  <li>SCSS</li>
                  <li>LESS</li>
                  <li>CSSNext</li>
                  <li>StyledComponents</li>
                </ul>
              </li>
              <li>GraphQL Integration</li>
              <li>Vue & Vuex</li>
            </ul>
          </section>
          <section id="experience">
            <h2>Experience</h2>
            <ul>
              <li>
                <h3>Web Developer</h3>
                <h4>Robots & Pencils</h4>
                <small>March 2017 - Present</small>
                <p>Work closely with Pencil (Creative) and Server team members to create accessible and performant Web apps that exemplify modern UX patterns. Primarily focus on React and Redux front end stacks, with occasional HTML & jQuery work, as well as some React Native and Vue. Create estimates for prospective client work and aid sales team in their pitching of said work. Manage time and effort estimations of project epics and stories in order to keep team members on track to meet deadline goals. Assist junior talent in their acclimation to React and Redux, as well as explore new tech options for future work.</p>
              </li>
              <li>
                <h3>Associate Experience Engineer</h3>
                <h4>Rosetta (now SapeintRazorfish)</h4>
                <small>December 2015 - February 2017</small>
                <p>Create and maintain web apps and websites built with a variety of tech capable of running on all major browsers. Focus on React and Redux, with additional projects requiring Wordpress, jQuery, and HTML Email expertise. Collaborate with Creative Team members to ensure that their ideas and planned interactions make it into the final products in a satisfactory way. Strong emphasis on accessibility and SEO in all web products.</p>
              </li>
              <li>
                <h3>Web Guru, Co-Founder</h3>
                <h4>Creative Folk Design</h4>
                <small>December 2014 - December 2016</small>
                <p>Partner and Co-Creator of a creative group known as Creative Folk. Specialize in Web Design and Development (Front-End) with HTML/CSS/jQuery within a Wordpress theme. Responsible for client interactions, finances, and team management.</p>
              </li>
              <li>
                <h3>Junior Front end Designer & Developer</h3>
                <h4>A.M. Design Group</h4>
                <small>June 2015 - November 2015</small>
                <p>Work with clients to create personalized website designs, and then build those designs into functional websites using Wordpress. Strong emphasis on SEO and accessibility.</p>
              </li>
              <li>
                <h3>UI/UX Designer</h3>
                <h4>Gormonjee Inc</h4>
                <small>June 2014 - July 2015</small>
                <p>Worked with wireframes, mockups, and prototypes to design the interface and interactions within the Gormonjee web app. Did some initial code mocking as well.</p>
              </li>
            </ul>
          </section>
          <section id="training">
            <h2>Training</h2>
            <p>In 2015 I graduated with a Bachelor of Fine Arts from The University of Akron's Graphic Design program. Before and during that program, I self taught HTML/CSS/JS enough to start working in the front end development field. Since then I've pushed myself to learn React and Redux's inner workings after being put on multiple projects running the pair. I have had a lot of great people pushing me towards where I am today, and in turn I have been helping to push others in similar fashion.</p>
          </section>
        </main>
      </div>
    )
  }
}

export default App