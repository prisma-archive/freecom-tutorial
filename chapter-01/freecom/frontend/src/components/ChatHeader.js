import React, { Component} from 'react'
import './ChatHeader.css'
import './App.css'
import { timeDifferenceForDate } from '../utils'

export default class ChatHeader extends Component {

  render() {
    const headerSubtitle = this._generateHeaderSubtitle()
    return (
      <div
        style={{backgroundColor: this.props.headerColor}}
        className='header flex header-padding-chat items-center header-shadow'
      >
        {this.props.shouldDisplayBackButton &&
          <div className='radius fadeInLeft flex flex-center back-button pointer' onClick={this.props.resetConversation}>
            <i className='material-icons'>keyboard_arrow_left</i>
          </div>
        }
        <div className='padding-10 flex'>
          <img
            src={this.props.profileImageUrl}
            alt=''
            className='avatar fadeInLeft'></img>
          <div className='fadeInLeft gutter-left conversation-title'>
            {this.props.chatPartnerName}
            <p className='fadeInLeft text-opaque'>{headerSubtitle}</p>
          </div>
        </div>
      </div>
    )
  }

  _generateHeaderSubtitle = () => {

  }

}
