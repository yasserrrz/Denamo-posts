import React, { useEffect, useState } from 'react'
import { Post } from '../types/Post'
import axios from 'axios'
const DataTable : React.FC = () => {
  const [posts , setPosts] = useState <Post[]> ([])
  const [loading , setLoading] = useState <boolean> (false)
  useEffect(() => {
    const 
  }, []);
  return (
    <div>DataTable</div>
  )
}

export default DataTable