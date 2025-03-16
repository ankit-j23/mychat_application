import React, { useEffect, useReducer } from 'react'
import { useChatStore } from '../store/useChatStore'
import SkeletonSidebar from './skeletons/SkeletonSidebar';
import { Users } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const Sidebar = () => {
  const {users, selectedUser, isUserLoading, getUsers, setSelectedUser} = useChatStore();
  const {onlineUsers} = useAuthStore();

  useEffect(()=>{
    getUsers();
    setSelectedUser(null)
  } , [getUsers])

  //using skeleton when users are loading
  if(isUserLoading) return <SkeletonSidebar/>
  return (
    <div>
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">People</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {users .map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/assets/profile.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
    </div>
  )
}

export default Sidebar
