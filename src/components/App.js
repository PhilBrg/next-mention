import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MentionList } from '@components/containers'
import { Mention } from '@actions/'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    fetch('http://localhost:3001/mentionApi/alert')
    .then(response => response.json())
    .then(data => {
        data.mentions.forEach(mention => {
          let img = mention.picture_url
          let url = mention.source_url
          let date = mention.created_at
          let content = mention.description_short
          let title = mention.title

          this.props.fetchMention({ img, url, date, content, title })
        })

    })
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
