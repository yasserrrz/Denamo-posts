import React, { useEffect, useState } from 'react'
import { Post } from '../types/Post'
import axios from 'axios'
const DataTable : React.FC = () => {
  const [posts , setPosts] = useState <Post[]> ([])
  const [loading , setLoading] = useState <boolean> (false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      axios.get<>('https://jsonplaceholder.typicode.com/posts').then(res => {
        setPosts(res.data)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
    }
  }, []);
  return (
    <div>DataTable</div>
  )
}

export default DataTable