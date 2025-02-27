import { useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState ([])
  const initialFormData = {
    id : '',
    title : '',
    image : ''
  }  

  const [formData, setFormData] = useState (initialFormData)




function fetchPosts() {
  axios.get('http://localhost:3000/api/posts')
  .then((res) => setPosts(res.data))
}


const handleDelete = (idSingoloPost) => {
axios
   .delete(`http://localhost:3000/api/posts/${idSingoloPost}`)
   .then(() => setPosts(posts.filter(elem => elem.id !== idSingoloPost)))

}


const handleField = (e) => {
  const { name, value} = e.target;

  setFormData(
    {
      ...formData,
      [name]: value,
    } 
    
  ) 
  console.log(formData)

}
const handleSubmit = (e) => {
  e.preventDefault();

  axios.post(` http://localhost:3000/api/posts/`, formData).then(fetchPosts)

}


useEffect(fetchPosts, []);

console.log("dati"+ posts);
return (
  <div>
    <table className="table">
  <thead>
    <tr className="table-header">
      <th className="table-header-cell">ID</th>
      <th className="table-header-cell">Title</th>
      <th className="table-header-cell">Image</th>
    </tr>
  </thead>
  <tbody className="table-body">
    {posts.map((elem) => (
      <tr key={elem.id}>
        <td className="table-cell">{elem.id}</td>
        <td className="table-cell">{elem.title}</td>
        <td className="table-cell">
          <img src={elem.image} alt={elem.title} width="100" />

          <button className='btn' onClick={() => handleDelete(elem.id)}>
            elimina

          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


<form onSubmit={handleSubmit} className='form'>
  <h3>Inserisci i dati per un nuovo post</h3>

  <input
  type='text'
  name='title'
  className='input_class'
  placeholder='inserisci il titolo'
  value={formData.title}
  onChange={ handleField }
  >

  </input>

  <input
  type='text'
  name='image'
  className='input_class'
  placeholder='inserisci url'
  value={formData.image}
  onChange={ handleField }
  >

  </input>
  <input
  type='number'
  name='id'
  className='input_class'
  placeholder='inserisci id'
  value={formData.id}
  onChange={ handleField }
  >

  </input>
  <button type='submit' className='btn_form'>
    invia

  </button>

</form>

  </div>
  


);

}

export default App
