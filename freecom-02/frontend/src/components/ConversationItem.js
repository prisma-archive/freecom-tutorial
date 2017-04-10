import React, { Component} from 'react'
import './ConversationItem.css'
import { timeDifferenceForDate } from '../utils'

class ConversationItem extends Component {

  render() {
    const {ago, messageText, chatPartnerName, profileImageUrl} = this._previewForMessage()
    return (
      <div
        className='conversation interior-padding fadeInLeft pointer hover-gray'
        onClick={() => this.props.onSelectConversation(this.props.conversation)}
      >
        <div className='flex'>
          <img
            src={profileImageUrl}
            alt=''
            className='avatar'></img>
          <div className='conversation-text-padding full-width'>
            <div className='flex'>
              <p className='full-width opacity-6'>{chatPartnerName}</p>
              <p className='opaque conversation-ago'>{ago}</p>
            </div>
            <p className='full-width opacity-8'>{messageText}</p>
          </div>
        </div>
      </div>
    )
  }

  _previewForMessage = () => {
    const message = this.props.conversation.messages[0]
    let ago
    let messageText
    if (message) {
      ago = timeDifferenceForDate(message.createdAt)
      messageText = message.text.split('').length > 32 ?
        message.text.split('').splice(0,32).join('') + '...' : message.text
    } else {
      ago = ''
      messageText = 'Start a new conversation'
    }

    const chatPartnerName = this.props.conversation.agent ?
      this.props.conversation.agent.slackUserName :
      this.props.companyName

    const profileImageUrl =  this.props.conversation.agent && this.props.conversation.agent.imageUrl ?
      this.props.conversation.agent.imageUrl :
      this.props.companyLogoURL

    return {ago, messageText, chatPartnerName, profileImageUrl}
  }

}

export default ConversationItem
