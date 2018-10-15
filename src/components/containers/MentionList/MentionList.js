import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { MentionCard } from '@components/organisms'

class MentionList extends PureComponent {

  render () {
    const {img, icon, date, url, title, content} = this.props

    const MentionsCard = this.props.mentions.map((mention, index) => (
    <li>
      <MentionCard
        key={index}
        img={img}
        icon={icon}
        content={content}
        title={title}
        url={url}
        date={date} />
    </li>
    ))

    return (
      <ul>
        {MentionsCard}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  mentions: state.mentions
})

export default connect(mapStateToProps, null)(MentionList)
