import React, { Component} from 'react'
import './ChatInput.css'
import Dropzone from 'react-dropzone'
import Textarea from 'react-textarea-autosize'

class ChatInput extends Component {

  state = {
    inputHasFocus: true
  }

  render() {
    return (
      <div className={`chat-input flex items-center radius-bottom
            ${this.state.inputHasFocus ? 'chat-input-shadow' : 'light-background'}`}>
        <Textarea
					minRows={1}
					maxRows={5}
          className={`InputField ${!this.state.inputHasFocus && 'light-background'}`}
          placeholder='Send a message ...'
          value={this.props.message}
          autoFocus={true}
          onChange={(e) => this.props.onTextInput(e.target.value)}
          onKeyDown={this._onKeyDown}
          onFocus={() => {
            this.setState({inputHasFocus: true})
          }}
          onBlur={() => {
            this.setState({inputHasFocus: false})
          }}
        />
        <Dropzone
          className='input-dropzone'
          onDrop={this.props.onDrop}
          accept='image/*'
          multiple={false}
        >
          <div className='attachment-container h100'>
            <img
              src={require('./../assets/attachment.svg')}
              alt=''
              width={26}
              height={26}
              className='opacity-3 pointer'
            />
          </div>
        </Dropzone>
      </div>
    )
  }

  _onKeyDown = (e) => {
    if (e.keyCode === 13) { // ENTER
      if (e.shiftKey) { // allow new lines with ENTER + SHIFT
        return
      }

      this.props.onSend()
      this.props.onResetText()
      e.preventDefault()
    }
  }
}

export default ChatInput
