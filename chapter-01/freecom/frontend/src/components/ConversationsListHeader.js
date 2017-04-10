import React, { Component} from 'react'
import './ConversationsListHeader.css'
import './App.css'

class ConversationsListHeader extends Component {

  render() {

    return (
      <div
        style={{backgroundColor: this.props.mainColor}}
        className='header header-padding header-shadow'
      >
        <div className='conversation-header gutter-left'>
          <h3 className='fadeInLeft'>Conversations</h3>
          <p className='text-opaque fadeInLeft'>with {this.props.companyName}</p>
        </div>
      </div>
    )

  }

}

export default ConversationsListHeader
