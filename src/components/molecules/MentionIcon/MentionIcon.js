import React from 'react'
import PropTypes from 'prop-types'
import { Img } from '@components/atoms'

const MentionIcon = ({ img, icon }) => (
  <Img src={img} />
)

MentionIcon.propTypes = {
  img: PropTypes.string,
  icon: PropTypes.string
}

export default MentionIcon
