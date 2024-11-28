import React, { useState } from 'react'
import { Posts } from '../types'
const DataTable : React.FC = () => {
  const [posts , setPosts] = useState <Posts[]> ([])
  return (
    <div>DataTable</div>
  )
}

export default DataTable