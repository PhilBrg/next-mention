const config = {
  mentionAPI: {
    endpoint: (accountId, alertId) => 'https://web.mention.com/api/accounts/' + accountId + '/alerts/' + alertId + '/mentions',
    token: 'YOUR_TOKEN',
    accountId: 'YOUR_ACCOUNT_ID',
    alertId: 'YOUR_ALERT_ID'
  },
};

export default config;
