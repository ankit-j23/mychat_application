import React, { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatSkeleton from './skeletons/ChatSkeleton'

const ChatContainer = () => {

  const {messages, isMessageLoading, getMessages, selectedUser} = useChatStore();

  useEffect(()=>{
    getMessages(selectedUser._id)
  } , [selectedUser._id , getMessages])

  if(true) return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader/>
      <ChatSkeleton/>
      <ChatInput/>
    </div>
  )


  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader/>

      <p>Messages gonna come here...</p>

      <ChatInput/>
    </div>
  )
}

export default ChatContainer
