import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { memoize } from 'lodash'
import Highlighter from 'react-highlight-words'

import { MentionIcon } from '@components/molecules'
import { Text, Title } from '@components/atoms'

import { MentionCardContainer, ContentContainer, TextContainer, MentionUrl, HeaderContainer, MentionDate, MentionContent } from './styled'

const formatDate = (date) => moment(date).format('D MMM')
const memoizedFormatDate = memoize(formatDate)

const isMultiple4 = (n) => n % 4

const formatingOffset = (arr) => {
  let offsetArr = []
  if (isMultiple4(arr.length) === 0 && arr.length > 1) {
    for (let i = 0; i < arr.length; i += 4) {
      let objectRange = {
        start: arr[i],
        end: arr[i] + arr[i + 2]
      }

      offsetArr.push(objectRange)
    }
  }
  return offsetArr
}

const wordToHighlight = (str, range) => str.substring(range.start, range.end)

class MentionCard extends PureComponent {

  render () {
    const {img, date, url, title, content, isRead, offsets} = this.props

    const dateFormated = memoizedFormatDate(date)
    const offsetTitle = formatingOffset(offsets.title)
    const offsetContent = formatingOffset(offsets.description_short)

    let wordsTitleHighlighted = [];
    let wordsContentHighlighted = [];

    for (let i in offsetTitle) {
      wordsTitleHighlighted.push(wordToHighlight(title, offsetTitle[i]))
    }

    for (let i in offsetContent) {
      wordsContentHighlighted.push(wordToHighlight(content, offsetContent[i]))
    }

    const CheckDate = isRead ? <MentionDate isRead>{dateFormated}</MentionDate> : <MentionDate>{dateFormated}</MentionDate>
    const CheckContent = isRead ? <MentionContent isRead>            <Highlighter
                  searchWords={wordsContentHighlighted}
                  autoEscape={true}
                  textToHighlight={content}
                /></MentionContent> : <MentionContent><Highlighter
                              searchWords={wordsContentHighlighted}
                              autoEscape={true}
                              textToHighlight={content}
                            /></MentionContent>
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
              <Highlighter
                            searchWords={wordsContentHighlighted}
                            autoEscape={true}
                            textToHighlight={title}
                          />
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
