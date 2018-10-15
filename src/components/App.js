import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'

import Config from '@config/Config'
import { MentionList } from '@components/containers'
import { Mention } from '@actions/'

class App extends Component {

  componentDidMount () {
    // FETCH MENTION
    const bearer = 'Bearer ' + Config.mentionAPI.token
    const url = Config.mentionAPI.endpoint(Config.mentionAPI.accountId, Config.mentionAPI.alertId, Config.mentionAPI.token)

    console.log(bearer)
    console.log(url)
    const obj = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      }
    };

    fetch(url, obj)
    .then(response => console.log(response))
    .catch(error => this.props.fetchFailure())
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
