import React, { Component } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'

import { MentionCard } from '@components/organisms'

class MentionList extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return map(this.props.mentions, (mention, index) => (
        <MentionCard
          key={index}
          img={mention.picture_url}
          content={mention.description_short}
          title={mention.title}
          url={mention.source_type}
          date={mention.published_at}
          isRead={mention.read}
        />
    ))
  }
}

const mapStateToProps = state => ({
  mentions: state.mentions.cache
})

export default connect(mapStateToProps)(MentionList)
