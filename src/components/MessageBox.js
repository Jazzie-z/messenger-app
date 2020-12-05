import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
  width: fit-content;
  &:first-child{
      margin-top:auto;
  }
`
const MessageBox = ({ msg }) => {
    return (
        <Container>
            {msg}
        </Container>
    )
}

export default MessageBox
