import React from 'react'
import styled from 'styled-components'
import UserCard from 'components/UserCard'
import { USERS } from 'feed/user'
import { staticText } from 'constants/resource'
const Header = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.grey};
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  height: 100%;
  overflow: auto;
`
const SideNav = ({ activeFriend, setActiveFriend }) => {
    return (
        <List>
            <Header>{staticText.friendsList}</Header>
            {USERS.map(({ name, img, id }) => <UserCard key={id} name={name} img={img} onClick={setActiveFriend} id={id} isActive={activeFriend === id} />)}
        </List>
    )
}

export default SideNav
