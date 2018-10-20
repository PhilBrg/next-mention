import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Avatar, IsRead, AvatarContainer, MentionIconContainer } from './styled'

class MentionIcon extends Component {
  render() {
    const { img, isRead } = this.props
    const CheckRead = isRead ? <IsRead /> : <IsRead />

    return (
      <MentionIconContainer>
        <AvatarContainer>
          <Avatar src={img} />
        </AvatarContainer>
        {CheckRead}
      </MentionIconContainer>
    )
  }
}

MentionIcon.propTypes = {
  img: PropTypes.string,
  isRead: PropTypes.bool
}

export default MentionIcon
