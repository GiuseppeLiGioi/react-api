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
        <th className="table-header-cell">id</th>
        <th className="table-header-cell">title</th>
        <th className="table-header-cell">image</th>
      </tr>
    </thead>
    <tbody className="table-body">
      {posts.map((elem) => {
        return (
          <tr key={elem.id}>
            <td className="table-cell">{elem.id}</td>
            <td className="table-cell">{elem.title}</td>
            <td className="table-cell">
              <img src={elem.image} alt={elem.title} width="100" />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

}

export default App
