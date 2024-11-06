import React from 'react'
import { getUserInfo } from '../services/api/user_endpoints'
import { useEffect } from 'react'

const HomePage = () => {

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
  </div>
  )
}

export default HomePage