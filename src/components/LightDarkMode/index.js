// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  changeTextMode = () => {
    const {isMode} = this.state
    return isMode ? 'Light Mode' : 'Dark Mode'
  }

  subContainerMode = () => {
    const {isMode} = this.state
    return isMode ? 'sub-dark-container' : 'sub-light-container'
  }

  headingMode = () => {
    const {isMode} = this.state
    return isMode ? 'heading-light-mode' : 'heading-dark-mode'
  }

  render() {
    const jsxElement = (
      <div className="bg-container">
        <div className={this.subContainerMode()}>
          <h1 className={this.headingMode()}>Click To Change Mode</h1>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onChangeMode}
            >
              {this.changeTextMode()}
            </button>
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default LightDarkMode
