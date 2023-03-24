import './App.css';
import { useQuery } from 'react-query';
import { getHomepagePosts } from './queries/queries';
import PostCard from './components/PostCard';



function App() {

  const {  data: posts, isSuccess } = useQuery('posts', 
  async () => await getHomepagePosts(),{ refetchOnWindowFocus: false, enabled: true 
    // disable this query from automatically running
    });

  console.log(posts);

  return (
    // Envolvemos los componentes con un query client provider donde el client es el objeto anterior
    
      <div className="App">
        <br/>
        Todos los posts:
        <hr/>
        <br/>
        <div className='posts' >
          { isSuccess && posts.map((post) => <PostCard postId={post.id} image={post.featured_image.id}  
                                              title={post.title} body={post.body}/>)}
        </div>
      </div>
    
  );
}

export default App;
