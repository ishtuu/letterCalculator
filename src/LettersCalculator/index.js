import {Component} from "react"
import './index.css'
class LetterCalculator extends Component {
    state = {
        input: '',
        count: 0,
    }

    onCountLetter = event => {
        const {input, count} = this.state
        this.setState({
            input: event.target.value,
            count: event.target.value.length,
        })
    }

    render() {
        const {input, count} = this.state
        return (
            <div className="letter-bg">
                <div className="letter-main-bg">
                <div className="letter-counter">
                    <h1>Calculate the Letters you enter</h1>
                    <label htmlFor="userInput">Enter The Phrase</label>
                    <input
                      type="text"
                      value={input}
                      onChange={this.onCountLetter}
                      placeholder="Enter The Phrase"
                      id="userInput"
                    />
                    <div className="countValue"><p>No Of Letter: {count}</p></div>
                </div>
                <div>
                    <img 
                      src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" 
                      alt="letters calculator"
                      className="image"
                    />
                </div>
                </div>
                
            </div>
        )
    }
}

export default LetterCalculator
