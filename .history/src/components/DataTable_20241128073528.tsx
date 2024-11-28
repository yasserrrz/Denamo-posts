import React, { useState } from 'react'
import { Post } from '../types/Post'
const DataTable : React.FC = () => {
  const [posts , setPosts] = useState <Post[]> ([])
  return (
    <div>DataTable</div>
  )
}

export default DataTable