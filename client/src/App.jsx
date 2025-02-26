import { useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState ([])


function fetchPosts() {
  axios.get(' http://localhost:3000/api/posts')
  .then((res) => setPosts(res.data))
}

useEffect(fetchPosts, []);


return (
  <table className="table">
    <thead>
      <tr className="table-header">
        {posts.map((post) => (
          <th key={post.id} className="dynamic-table-header-cell">
            {post.title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="table-body">
      {posts.map((post) => (
        <tr key={post.id} className="table-row">
          {posts.map((post) => (
            <td key={post.id} className="table-cell">{post.title}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
}

export default App
