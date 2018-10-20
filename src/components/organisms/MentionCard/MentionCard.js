import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { memoize } from 'lodash'
import { Highlightable } from 'highlightable'

import { MentionIcon } from '@components/molecules'
import { Text, Title } from '@components/atoms'

import { MentionCardContainer, ContentContainer, TextContainer, MentionUrl, HeaderContainer, MentionDate, MentionContent } from './styled'

const formatDate = (date) => moment(date).format('D MMM')
const memoizedFormatDate = memoize(formatDate)

class MentionCard extends PureComponent {

  render () {
    const {img, date, url, title, content, isRead, offsets} = this.props
    const dateFormated = memoizedFormatDate(date)
    const CheckDate = isRead ? <MentionDate isRead>{dateFormated}</MentionDate> : <MentionDate>{dateFormated}</MentionDate>
    const CheckContent = isRead ? <MentionContent isRead>{content}</MentionContent> : <MentionContent>{content}</MentionContent>
    const CheckUrl = isRead ? <MentionUrl isRead>{url}</MentionUrl> : <MentionUrl>{url}</MentionUrl>

    return (
      <MentionCardContainer>
        <MentionIcon img={img} isRead={isRead} />
        <ContentContainer>
          <HeaderContainer>
            {CheckUrl}
            {CheckDate}
          </HeaderContainer>
          <TextContainer>
            <Title>
              {title}
            </Title>
            {CheckContent}
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
