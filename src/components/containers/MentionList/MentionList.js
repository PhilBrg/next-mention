import React, { Component } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'

import { MarkMentionReadThunk } from '@redux/mentions/thunks'
import { MentionCard } from '@components/organisms'
import { MentionListContainer } from './styled'

class MentionList extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.props.handleClick({id})
  }

  render () {
    return <MentionListContainer>{map(this.props.mentions, (mention, index) => (
        <MentionCard
          key={index}
          img={mention.picture_url}
          content={mention.description_short}
          title={mention.title}
          url={mention.source_type}
          date={mention.published_at}
          isRead={mention.read}
          offsets={mention.offsets}
          onClick={() => this.props.handleClick(mention.id)}
        />
    ))}</MentionListContainer>
  }
}

const mapStateToProps = state => ({
  mentions: state.mentions.cache
})

const mapDispatchToProps = dispatch => ({
  handleClick: (id) => dispatch(MarkMentionReadThunk(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(MentionList)
