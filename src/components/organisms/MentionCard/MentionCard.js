import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { MentionIcon } from '@components/molecules'
import { Text, Title } from '@components/atoms'

import { MentionCardContainer, ContentContainer, HeaderContainer } from './styled'

class MentionCard extends PureComponent {

  render () {
    const {img, icon, date, url, title, content} = this.props

    return (
      <MentionCardContainer>
        <MentionIcon img={img} icon={icon} />
        <ContentContainer>
          <HeaderContainer>
            <Text>
              {url}
            </Text>
            <Text>
              {date}
            </Text>
          </HeaderContainer>
          <Title>
            {title}
          </Title>
          <Text>
            {content}
          </Text>
        </ContentContainer>
      </MentionCardContainer>
    )
  }
}

MentionCard.propTypes = {
  date: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
  icon: PropTypes.string
}

export default MentionCard
