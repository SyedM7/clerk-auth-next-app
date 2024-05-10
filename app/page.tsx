import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full gap-4 '>
      <h1 className='text-4xl font-bold'>Home</h1>
      <div>
        <Button asChild>
          <Link href='/dashboard'>
            Go to Dashboard
          </Link>

        </Button>
      </div>
    </div>
  )
}

export default home
