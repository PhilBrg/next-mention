import styled from 'styled-components'

import { Text } from '@components/atoms'

export const MentionCardContainer = styled.section`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  border-color: #d3d3d3;
  padding: 24px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MentionUrl = styled(Text)`
  color: #d3d3d3;
`

export const MentionDate = styled(Text)`
  color: #d3d3d3;
`

export const MentionContent = styled(Text)`
  color: #808080;
`
