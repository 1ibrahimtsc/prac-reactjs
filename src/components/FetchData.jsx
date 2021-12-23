import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const FetchData = ()=> {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
          console.log(res.data)
          setPosts(res.data)
      })
      .catch(err => {
          console.log("Error")
          console.log(err.message)
      })
  }, [])

  return (
      <div>
          <ul>
              {posts.map((post, index) => {
                  return <li key={post.id} >{post.title}</li>
              })}              
          </ul>
      </div>
  )
}

export default FetchData;