import React, { Component } from 'react'
import { connect } from 'react-redux'

import Config from '@config/config'
import { MentionList } from '@components/containers'
import { Mention } from '@actions/Mention'

class App extends Component {

  componentDidMount () {
    // FETCH MENTION
    const bearer = 'Bearer ' + Config.mentionAPI.token;

    const obj = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      }
    };

    fetch(Config.mentionAPI.endpoint(Config.mentionAPI.accountId, Config.mentionAPI.alertId, Config.mentionAPI.token), obj)
    .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        <MentionList />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchMention: mention => dispatch(Mention.fetchMention(mention)),
  fetchSuccess: () => dispatch(Mention.fetchSuccess()),
  fetchFailure: () => dispatch(Mention.fetchFailure())
});



export default connect(null, mapDispatchToProps)(App);
