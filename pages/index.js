import React, { Component } from 'react'
import { FetchMentionsThunk } from '@redux/mentions/thunks'

import { MentionList } from '@components/containers'

class Index extends Component {

  constructor(props) {
    super(props)
  }

  static async getInitialProps ({ reduxStore, req }) {
    await reduxStore.dispatch(FetchMentionsThunk())

    return {}
  }

  render () {
    return (
      <div>
        <MentionList />
      </div>
    )
  }

}

export default Index;
