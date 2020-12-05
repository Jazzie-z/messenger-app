import { staticText } from 'constants/resource'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import InputBox from './InputBox'
import MessageBox from './MessageBox'
const Container = styled.div`
  flex:1;
  position:relative;
`
const TitleBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};;
  text-align: center;
`
const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: flex-end;
  padding: 10px;
  overflow: scroll;
`
const ChatBox = ({ id }) => {
    const [inputValue, setInputValue] = useState('')
    const [chatHistory, setChatHistory] = useState({});
    const chatListRef = useRef();
    const updateChatHistory = () => {
        if (inputValue.trim()) {
            let newPayload = [...chatHistory[id] || []]
            newPayload.push({ msg: inputValue, sender: 'me' })
            setInputValue('')
            setChatHistory(prevChat => ({ ...prevChat, [id]: newPayload }))
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }
    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.key === 'Enter') updateChatHistory()
        }
        window.addEventListener('keydown', keyDownHandler)
        return () => {
            window.removeEventListener('keydown', keyDownHandler)
        }
    })
    return (
        <Container>
            <TitleBar>{staticText.welcome}</TitleBar>
            <ChatList ref={chatListRef}>{chatHistory[id] ? chatHistory[id].map(({ msg }, index) => <MessageBox key={index.toString()} msg={msg} />) : null}</ChatList>
            <InputBox inputValue={inputValue} setInputValue={setInputValue} onClick={updateChatHistory} />
        </Container>
    )
}

export default ChatBox
