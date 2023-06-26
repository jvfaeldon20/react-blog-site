import react,{useState} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Blogs from './component/Blogs';
import Form from './component/Form';
import BlogItems from './data/blog-post.json'

function App() {
const [blogs, setBlogs] = useState(BlogItems)

  return (
    <div className="App">
      <Navbar/>
      <Form/>
      <Blogs blogs={blogs}/>
      <Footer/>
    </div>
  );
}

export default App;
