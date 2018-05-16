import React, { Component } from 'react'
import Logo from '../../assets/icons/logo.svg'
import styles from './app.scss'

const Decrease = (props) => {
  return <span className={styles.decrease}>{props.children}</span>
}

const ExperienceEntry = props => {
  return (<li>
    <span className={styles.h3}>{'{'}</span>
    <div className={styles.experienceEntry}>
      <h3><Decrease>position:</Decrease> {props.name}</h3>
      <h4><Decrease>employer:</Decrease> {props.employer}</h4>
      <small><Decrease>time_start:</Decrease> {props.start}</small>
      <small><Decrease>time_end:</Decrease> {props.end}</small>
      <p><Decrease>description:</Decrease> {props.description}</p>
    </div>
    <span className={styles.h3}>{'}'}</span>
  </li>)
}

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.fixed}><a href="#top"><Logo className={styles.appLogo} /></a></div>
        <main id="top">
          <div className={styles.section}>
            <header className={styles.appHeader}>
              <nav>
                <h1>andrew_krigline: {'{'}</h1>
                <ul className={styles.appNav}>
                  <li><a href='#self'>self</a></li>
                  <li><a href='#skills'>skills</a></li>
                  <li><a href='#experience'>experience</a></li>
                  <li><a href='#training'>training</a></li>
                  <li><a href='https://github.com/akrigline'>github</a></li>
                  <li><a href='https://www.linkedin.com/in/akrigline'>linkedin</a></li>
                </ul>
                <span className={styles.h1}>{'}'}</span>
              </nav>
            </header>
          </div>
          <article className={styles.section} id="self">
            <div className={styles.sectionWrapper}>
              <header className={styles.sectionHeader}>
                <h2>self: "</h2>
              </header>
              <div className={styles.sectionContent}>
                <p>
                  I am a front end developer with a strong creative background who specializes in writing React applications. I have a very firm understanding of React and Redux, and am capable of configuring a React project's webpack setup to do the things I want it to do. I've been described as a fast learner, hard worker, and quick problem solver by those I have worked with and for. My knowledge of javascript is strong enough for me to consider myself capable of picking up any javascript front end framework with limited training.
              </p>
              </div>
              <footer className={styles.sectionFooter}>
                "
              </footer>
            </div>
          </article>
          <article className={styles.section} id="skills">
            <div className={styles.sectionWrapper}>
              <header className={styles.sectionHeader}>
                <h2>skills: {'{'}</h2>
              </header>
              <div className={styles.sectionContent}>
                <section>
                  <h3>primary_skills: {'['}</h3>
                  <ul className={styles.skillList}>
                    <li>react: {'['}
                      <ul className={styles.skillSubset}>
                        <li>react-router</li>
                        <li>recompose</li>
                      </ul>
                      {']'}
                    </li>
                    <li>redux: {'['}
                      <ul className={styles.skillSubset}>
                        <li>redux-thunk</li>
                        <li>redux-saga</li>
                        <li>redux-form</li>
                      </ul>
                      {']'}
                    </li>
                    <li>Javascript (ES6+)</li>
                    <li>Webpack</li>
                    <li>HTML</li>
                    <li>CSS: {'['}
                      <ul className={styles.skillSubset}>
                        <li>SCSS</li>
                        <li>LESS</li>
                        <li>CSSNext</li>
                        <li>StyledComponents</li>
                      </ul>
                      {']'}
                    </li>
                    <li>GraphQL Integration (Apollo)</li>
                  </ul>
                  <span className={styles.h3}>{']'}</span>
                </section>
                <section>
                  <h3>secondary_skills: {'['}</h3>
                  <ul className={styles.skillList}>
                    <li>socket.io</li>
                    <li>Vue & Vuex</li>
                    <li>React Native</li>
                    <li>jQuery</li>
                    <li>Wordpress Theming</li>
                    <li>node.js</li>
                    <li>php</li>
                  </ul>
                  <span className={styles.h3}>{']'}</span>
                </section>
              </div>
              <footer className={styles.sectionFooter}>
                {'}'}
              </footer>
            </div>
          </article>
          <article className={styles.section} id="experience">
            <div className={styles.sectionWrapper}>

              <header className={styles.sectionHeader}>
                <h2>experience: {'['}</h2>
              </header>
              <div className={styles.sectionContent}>
                <ul className={styles.experienceList}>
                  <ExperienceEntry
                    name="Web Developer"
                    employer="Robots & Pencils"
                    start="March 2017"
                    end="Present"
                    description="Work closely with Pencil (Creative) and Server team members to create accessible and performant Web apps that exemplify modern UX patterns. Primarily focus on React and Redux front end stacks, with occasional HTML & jQuery work, as well as some React Native and Vue. Create estimates for prospective client work and aid sales team in their pitching of said work. Manage time and effort estimations of project epics and stories in order to keep team members on track to meet deadline goals. Assist junior talent in their acclimation to React and Redux, as well as explore new tech options for future work." />
                  <ExperienceEntry
                    name="Associate Experience Engineer"
                    employer="Rosetta (now SapeintRazorfish)"
                    start="December 2015"
                    end="February 2017"
                    description="Create and maintain web apps and websites built with a variety of tech capable of running on all major browsers. Focus on React and Redux, with additional projects requiring Wordpress, jQuery, and HTML Email expertise. Collaborate with Creative Team members to ensure that their ideas and planned interactions make it into the final products in a satisfactory way. Strong emphasis on accessibility and SEO in all web products." />
                  <ExperienceEntry
                    name="Web Guru, Co-Founder"
                    employer="Creative Folk Design"
                    start="December 2014"
                    end="December 2016"
                    description="Partner and Co-Creator of a creative group known as Creative Folk. Specialize in Web Design and Development (Front-End) with HTML/CSS/jQuery within a Wordpress theme. Responsible for client interactions, finances, and team management." />
                  <ExperienceEntry
                    name="Junior Front end Designer & Developer"
                    employer="A.M. Design Group"
                    start="June 2015"
                    end="November 2015"
                    description="Work with clients to create personalized website designs, and then build those designs into functional websites using Wordpress. Strong emphasis on SEO and accessibility." />
                  <ExperienceEntry
                    name="UI/UX Designer"
                    employer="Gormonjee Inc"
                    start="June 2014"
                    end="July 2015"
                    description="Worked with wireframes, mockups, and prototypes to design the interface and interactions within the Gormonjee web app. Did some initial code mocking as well." />
                </ul>
              </div>

              <footer className={styles.sectionFooter}>
                ]
                </footer>
            </div>
          </article>
          <article className={styles.section} id="training">
            <div className={styles.sectionWrapper}>
              <header className={styles.sectionHeader}>
                <h2>training: "</h2>
              </header>
              <div className={styles.sectionContent}>
                <p>In 2015 I graduated with a Bachelor of Fine Arts from The University of Akron's Graphic Design program. Before and during that program, I self taught HTML/CSS/JS enough to start working in the front end development field. Since then I've pushed myself to learn React and Redux's inner workings after being put on multiple projects running the pair. I have had a lot of great people pushing me towards where I am today, and in turn I have been helping to push others in similar fashion.</p>
              </div>
              <footer className={styles.sectionFooter}>
                "
              </footer>
            </div>
          </article>
        </main>
      </div>
    )
  }
}

export default App