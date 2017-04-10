import React, { Component} from 'react'
import './ConversationsList.css'
import ConversationItem from './ConversationItem'

class ConversationsList extends Component {

  static propTypes = {
    onSelectConversation: React.PropTypes.func.isRequired,
    companyName: React.PropTypes.string.isRequired,
    companyLogoURL: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className='conversation-list'>
        {this.props.conversations.map((conversation, i) => {
          return (conversation.messages.length > 0 && <ConversationItem
            key={i}
            conversation={conversation}
            onSelectConversation={this.props.onSelectConversation}
            companyName={this.props.companyName}
            companyLogoURL={this.props.companyLogoURL}
          />)
        })}
      </div>
    )
  }

}

export default ConversationsList
