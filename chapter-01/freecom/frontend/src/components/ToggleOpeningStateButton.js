import React, { Component} from 'react'
import './App.css'
import cx from 'classnames'

class ToggleOpeningStateButton extends Component {

  render() {

    const buttonStyles = cx('button drop-shadow-hover pointer flex-center flex', {
      'drop-shadow-hover-active': this.props.isOpen
    })

    return (
      <div
        style={{backgroundColor: this.props.mainColor}}
        className={buttonStyles}
        onClick={() => this.props.togglePanel()}
      >
        <i className='material-icons'>{this.props.isOpen ? 'close' : 'chat_bubble'}</i>
      </div>
    )

  }

}

export default ToggleOpeningStateButton
