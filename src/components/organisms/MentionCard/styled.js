import styled from 'styled-components'


import { Text } from '@components/atoms'

export const MentionCardContainer = styled.section`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  border-color: #d3d3d3;
  padding: 6px;
  :last-child {
    border-bottom: none;
  }
  cursor: pointer;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  width: 100%;
  justify-content: flex-start;
  padding-bottom: 12px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  margin-top: 0px;
  justify-content: flex-start;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 6px;
  padding-top: 12px;
`

export const MentionUrl = styled(Text)`
  color: ${props => props.isRead ? '#A9A9A9' : '#C0C0C0'};
`

export const MentionDate = styled(Text)`
  color: ${props => props.isRead ? '#259ADB' : '#C0C0C0'};
`

export const MentionContent = styled(Text)`
  padding-top: 6px;
  color: ${props => props.isRead ? '#2F4F4F' : '#808080'};
`
