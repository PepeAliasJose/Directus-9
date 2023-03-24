import Parser from 'html-react-parser';

const assetsUrl = process.env.NEXT_PUBLIC_PUBLIC_ASSETS_URL;

const ProductsCard = ({id, image, name, description, price, categorias}) => {

    return(

        <div key={ id } className="card" style={{
            width: '18rem', 
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom:'50px',
            Height:'26rem'
          }}>
          <img className="card-img-top" style={{height:'15rem',objectFit:'cover'}} src={`${assetsUrl}/${image}`} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            { Parser(description) }
            <div className='container-fluid' style={{
              width:'100%'
            }}>
              <div className='row'>
                {categorias.map(categoria => 
                  <div className='col-4 justify-content-start' key={categoria.categories_id.id} style={{
                    backgroundColor:'grey',
                    borderRadius:'20px',
                    fontSize:'0.7rem',
                    color:'white',
                    width:'fit-content',
                    paddingLeft:'1rem',
                    paddingRight:'1rem',  
                    marginRight:'2%'     
                  }}>
                  {categoria.categories_id.category_name}
                  </div>
                )}
              </div>
            </div>
            <br/>
            <b className="card-text"> { price }$</b>
            
          </div>
        </div>
          
    )

}

export default ProductsCard;