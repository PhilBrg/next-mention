import React, { Component } from 'react'
import { connect } from 'react-redux'

import { MentionCard } from '@components/organisms'

class MentionList extends Component {

  constructor(props) {
    super(props)
  }

  render () {

    const roro = this.props.mentions.map((mention, index) => console.log(mention))

    const MentionsCard = this.props.mentions.map((mention, index) => (
      <MentionCard
        key={index}
        img={mention.img}
        content={mention.content}
        title={mention.title}
        url={mention.url}
        date={mention.date} />
    ))


    return (
      <div>
        {MentionsCard}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mentions: state
})

export default connect(mapStateToProps, null)(MentionList)
