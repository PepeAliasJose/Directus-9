import './App.css';
import { useQuery } from 'react-query';
import { getHomepagePosts } from './queries/queries';

const assetsUrl = process.env.REACT_APP_PUBLIC_ASSETS_URL

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
          { isSuccess && posts.map(
            post => 
            <div className="card" style={{
                width: '18rem', 
                marginLeft:'auto',
                marginRight:'auto',
                marginBottom:'50px'
              }} key={ post.id }>
              <img className="card-img-top" src={`${assetsUrl}/${post.featured_image.id}`} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{ post.title }</h5>
                <p className="card-text">{ post.body }</p>
              </div>
            </div>
          )}
        </div>
      </div>
    
  );
}

export default App;
