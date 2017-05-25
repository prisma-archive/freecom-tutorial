require('isomorphic-fetch')

const token = ''

module.exports = (event) => {

  const username = event.data.Message.node.agent ?
    event.data.Message.node.agent.slackUserName : event.data.Message.node.conversation.customer.name
  const emoji = event.data.Message.node.agent ? ':telephone_receiver:' : ':question:'

  const text = event.data.Message.node.text
  const customerName = event.data.Message.node.conversation.customer.name.toLowerCase()
  const slackChannelName = customerName + '-' + event.data.Message.node.conversation.slackChannelIndex

  const slackURL = `https://slack.com/api/chat.postMessage?token=${token}&channel=${slackChannelName}&username=${username}&text=${text}&icon_emoji=${emoji}`
  fetch(slackURL)
}