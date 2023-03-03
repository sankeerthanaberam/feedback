// Write your React code here.
import {Component} from 'react'

import ReplyItems from '../ReplyItem'

import './index.css'

class Feedback extends Component {
  state = {gotFeedBack: false}

  GetResponse = () => {
    this.setState({gotFeedBack: true})
  }

  render() {
    const {gotFeedBack} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-container">
        {gotFeedBack ? (
          <div className="inner-container">
            <img src={loveEmojiUrl} alt="love emoji" className="heart-img" />
            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="inner-container">
            <h1>
              How Satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-pattern">
              {emojis.map(eachItem => (
                <ReplyItems
                  key={eachItem.id}
                  ReplyDetails={eachItem}
                  GetResponse={this.GetResponse}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
