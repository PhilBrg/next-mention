import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { MentionIcon } from '@components/molecules'
import { Text, Title } from '@components/atoms'

import { MentionCardContainer, ContentContainer, TextContainer, MentionUrl, HeaderContainer, MentionDate, MentionContent } from './styled'

class MentionCard extends PureComponent {

  render () {
    const {img, icon, date, url, title, content} = this.props

    return (
      <MentionCardContainer>
        <MentionIcon img={img} icon={icon} />
        <ContentContainer>
          <HeaderContainer>
            <MentionUrl>
              {url}
            </MentionUrl>
            <MentionDate>
              {date}
            </MentionDate>
          </HeaderContainer>
          <TextContainer>
            <Title>
              {title}
            </Title>
            <MentionContent>
              {content}
            </MentionContent>
          </TextContainer>
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
