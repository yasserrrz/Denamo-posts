import React, { useState } from 'react'
import { Post } from '../types/Post'
const DataTable : React.FC = () => {
  const [posts , setPosts] = useState <Post[]> ([])
  const [loading , setLoading] = useState <boolean> (false)
  return (
    <div>DataTable</div>
  )
}

export default DataTable