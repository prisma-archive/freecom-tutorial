import React, { Component } from 'react'
import './Chat.css'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import Dropzone from 'react-dropzone'

export default class Chat extends Component {

  state = {
    message: '',
  }

  render() {

    return (
      <Dropzone
        className='dropzone relative'
        onDrop={this._onFileDrop}
        accept='image/*'
        multiple={false}
        disableClick={true}
      >
        <div className='message-body chat-container'>
          <ChatMessages
            messages={[]}
            userSpeechBubbleColor={this.props.mainColor}
            profileImageURL={this.props.profileImageURL}
          />
          {this.state.isUploadingImage && <div className='upload-image-indicator'>Uploading image ...</div>}
          <ChatInput
            message={this.state.message}
            onTextInput={message => this.setState({message})}
            onResetText={() => this.setState({message: ''})}
            onSend={this._onSend}
            onDrop={this._onFileDrop}
          />
        </div>
      </Dropzone>
    )
  }

  _onSend = () => {

  }

  _onFileDrop = (acceptedFiles, rejectedFiles) => {

  }

}
