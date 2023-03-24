const assetsUrl = process.env.NEXT_PUBLIC_PUBLIC_ASSETS_URL;

const PostCard = ({id, image, title, body}) => {

    return(
      
        <div key={ id } className="card" style={{
            width: '18rem', 
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom:'50px'
          }}>
          <img className="card-img-top" src={`${assetsUrl}/${image}`} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ body }</p>
          </div>
        </div>
          
    )

}

export default PostCard;