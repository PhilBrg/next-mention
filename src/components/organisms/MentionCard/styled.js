import styled from 'styled-components'

import { Text } from '@components/atoms'

export const MentionCardContainer = styled.section`
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  padding: 24px;
  margin-bottom: 3px;
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
