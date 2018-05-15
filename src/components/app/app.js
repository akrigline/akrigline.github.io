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
          <Logo className={styles.appLogo} />
          <h1 className={styles.appTitle}>Greetings</h1>
          <p>
            I am Andrew Krigline.
          </p>
        </main>
      </div>
    )
  }
}

export default App