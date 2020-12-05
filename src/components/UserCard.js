import React from 'react'
import styled, { css } from 'styled-components'
const Card = styled.div`
  display:flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  &:hover{
    background: ${({ theme }) => theme.colors.primaryWithOpacity};
  }
  ${({ isActive }) => isActive && css`
    background: ${({ theme }) => theme.colors.primary};
    color:white;
  `}
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`
const UserCard = ({ id, name, img, onClick, isActive }) => {
    return (
        <Card onClick={() => onClick(id)} isActive={isActive}>
            <Avatar src={img} alt={`avatar-${name}`}/>
            {name}
        </Card>
    )
}

export default UserCard
