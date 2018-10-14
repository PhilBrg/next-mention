import React, { PureComponent } from 'react'

import { MentionCard } from '@components/organisms'

class MentionList extends PureComponent {

  render () {
    const {img, icon, date, url, title, content} = this.props

    const MentionsCard = this.props.mention.map((mention, index) => (
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

export default MentionList
