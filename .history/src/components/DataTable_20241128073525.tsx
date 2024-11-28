import React, { useState } from 'react'
import { Post } from '../types/Post'
const DataTable : React.FC = () => {
  const [posts , setPosts] = useState <Posts[]> ([])
  return (
    <div>DataTable</div>
  )
}

export default DataTable