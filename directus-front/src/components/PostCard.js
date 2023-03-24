const assetsUrl = process.env.REACT_APP_PUBLIC_ASSETS_URL;

const PostCard = ({postId, image, title, body}) => {

    return(
      
        <div className="card" style={{
            width: '18rem', 
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom:'50px'
          }} key={ postId }>
          <img className="card-img-top" src={`${assetsUrl}/${image}`} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ body }</p>
          </div>
        </div>
          
    )

}

export default PostCard;