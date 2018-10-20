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
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`

export const Avatar = styled(Img)`
  border-radius: 50%;
  width: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
`

export const IsRead = styled.span`
  display: flex;
  align-items: center;
  margin-left: 50%;
  margin-top: 40%;
  height: 12px;
  width: 12px;
  background-color: #259ADB;
  border-radius: 50%;

`
