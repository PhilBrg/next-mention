import React, { Component } from 'react'
import { connect } from 'react-redux'

import { MentionCard } from '@components/organisms'

class MentionList extends Component {

  constructor(props) {
    super(props)
  }

  render () {

    const MentionsCard = this.props.mentions.map((mention, index) => (
      <MentionCard
        key={index}
        img={mention.picture_url}
        content={mention.description_short}
        title={mention.title}
        url={mention.source_type}
        date={mention.published_at} />
    ))

    return (
      <div>
        {MentionsCard}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mentions: state.mentions.cache
})

export default connect(mapStateToProps)(MentionList)
