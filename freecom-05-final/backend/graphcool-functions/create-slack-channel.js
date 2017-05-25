require('isomorphic-fetch')

const token = ''

module.exports = function (event) {
  const customerName = event.data.Conversation.node.customer.name.toLowerCase()
  const numberOfExistingConversations = event.data.Conversation.node.customer._conversationsMeta.count
  const slackChannelName = customerName + '-' + numberOfExistingConversations
  
  const slackUrl = `https://slack.com/api/channels.create?token=${token}&name=${slackChannelName}`
  fetch(slackUrl)
  .then((response) => {
    return response.json()
  }).then((json) => {
    const text =  'New channel created: <%23' + json.channel.id + '|' + slackChannelName + '>'
    const username = 'Freecom Bot'
    const slackURL = `https://slack.com/api/chat.postMessage?token=${token}&username=${username}&channel=general&text=${text}`
    fetch(slackURL)
  })

}