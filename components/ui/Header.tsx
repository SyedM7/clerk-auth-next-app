import { UserResource } from '@clerk/types'
import React from 'react'
import { Button } from './button';
import { UserButton } from '@clerk/nextjs';
interface HeaderProps {
    user: UserResource | null | undefined;
}
const Header = ({ user }: HeaderProps) => {
    return (
        <div className='flex flex-cols-2 bg-slate-900 px-5 items-center justify-between h-[100px]'>
            <div>
                <h1 className='text-2xl text-white'>Logo</h1>
                
            </div>
            <div className='flex gap-4 px-5'>
                <div className='text-xl text-white '>Welcome</div>
                <h1 className='text-xl text-white '>
                    {user?.username}
                </h1>
                <UserButton afterSignOutUrl='/'/>
            </div>
        </div>

    )
}

export default Header
