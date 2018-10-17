import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { memoize } from 'lodash'

import { MentionIcon } from '@components/molecules'
import { Text, Title } from '@components/atoms'

import { MentionCardContainer, ContentContainer, TextContainer, MentionUrl, HeaderContainer, MentionDate, MentionContent } from './styled'

const formatDate = (date) => moment(date).format('Do MMM');
const memoizedFormatDate = memoize(formatDate)

class MentionCard extends PureComponent {

  render () {
    const {img, date, url, title, content, isRead} = this.props
    const dateFormated = memoizedFormatDate(date)

    return (
      <MentionCardContainer>
        <MentionIcon img={img} isRead={isRead} />
        <ContentContainer>
          <HeaderContainer>
            <MentionUrl>
              {url}
            </MentionUrl>
            <MentionDate>
              {dateFormated}
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
