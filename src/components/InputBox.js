import { staticText } from 'constants/resource'
import React from 'react'
import styled from 'styled-components'
const InputContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`
const InputWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  height: 35px;
  background: ${({ theme }) => theme.colors.white};
  width: 90%;
  align-items: center;
  overflow: hidden;
`
const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  padding: 0 10px;  
`
const Button = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  height: 100%;
  width: 10%;
  display:flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`
const InputBox = ({ inputValue, setInputValue, onClick }) => {
    return (
        <InputContainer>
            <InputWrapper>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={staticText.typeHere} />
                <Button onClick={onClick}>{staticText.send}</Button>
            </InputWrapper>
        </InputContainer>
    )
}

export default InputBox
