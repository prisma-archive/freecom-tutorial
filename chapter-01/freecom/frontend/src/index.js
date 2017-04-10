import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

const freecom = {
  render,
  companyName: 'Graphcool',
  companyLogoURL: 'http://imgur.com/qPjLkW0.png',
  mainColor: 'rgba(39,175,96,1)'
}

function render(element) {

  if (!element) {
    const root = document.createElement('div')
    root.id = '__freecom-root__'
    document.body.appendChild(root)
    element = root
  }

  ReactDOM.render(
    <App freecom={freecom}/>
    ,
    element
  )
}

render(document.getElementById('__freecom-root__'))