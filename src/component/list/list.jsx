import React from 'react'
import './list.css'
import  UserInfo from './userInfo/userInfo'
import  ChatList from './chatList/chatList'
const list = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default list