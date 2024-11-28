import React, { useState } from 'react'
import { Post } from '../types/Post'
const DataTable : React.FC = () => {
  const [posts , setPosts] = useState <Post[]> ([])
  const [loading , setLoading] = useState <boolean> (false)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>DataTable</div>
  )
}

export default DataTable