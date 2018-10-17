import styled from 'styled-components'
import { Img } from '@components/atoms'

export const AvatarContainer = styled.div`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    right: -12px;
    height: 24px;
    width: 24px;
    border-style: solid;
    border-color: white;
    border-width: 2px;
    background-color: white;
    background-image: url(../../../static/newspaper.svg);
    border-radius: 50%;
  }
`

export const MentionIconContainer = styled.div`
  height: auto;
`

export const Avatar = styled(Img)`
  border-radius: 50%;
  width: 64px;
`

export const IsRead = styled.span`
  display: inline-block;
  height: 12px;
  width: 12px;
  background-color: blue;
  border-radius: 50%;
`
