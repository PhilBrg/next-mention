import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, AvatarContainer, MentionIconContainer } from './styled'

const MentionIcon = ({ img, icon }) => (
  <MentionIconContainer>
    <AvatarContainer>
      <Avatar src={img} />
    </AvatarContainer>
  </MentionIconContainer>
)

MentionIcon.propTypes = {
  img: PropTypes.string,
  icon: PropTypes.string
}

export default MentionIcon
