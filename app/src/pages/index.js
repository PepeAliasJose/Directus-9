import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { useQuery } from 'react-query';
import { getCategories, getProducts } from '../queries/queries';
import ProductsCard from '../components/ProductsCard';
import Filters from '@/components/Filters';

import {useState, useEffect} from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const {  data: products, isSuccess } = useQuery('products', 
  async () => await getProducts(),{ refetchOnWindowFocus: false, enabled: true 
    // disable this query from automatically running
  });
  
  const {  data: categories, isSuccess: categoriesSuccess } = useQuery('categories', 
  async () => await getCategories(),{ refetchOnWindowFocus: false, enabled: true 
    // disable this query from automatically running
  });

  const [selectedCategories,setSelectedCategories] = useState([]);

  useEffect(() => {
    console.log(selectedCategories);
  },[selectedCategories])

  const getSelectedCategories = (category) => {
    setSelectedCategories([...selectedCategories, category]);
  };


  return (
    
    <div>
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <h2>Lista de telefonos</h2>
            <hr/>
          </div>
        </div>
        <div className='checkboxs'>
          {categoriesSuccess && <Filters getSelectedCategories={getSelectedCategories} categories={categories}  />}
        </div>
        <div className="row">
          { isSuccess && products.map((product) => <div className='col-lg-3 col-md-12 col-sm-12' key={product.id}><ProductsCard  key={product.id} id={product.id} image={product.product_image.id}  
                                                            name={product.product_name} description={product.product_description} price={product.price}
                                                            categorias={product.product_categories}/> </div>)}
        </div>
      </div>
      <div className='posts' >
        {/* {isSuccess && console.log(products)} */}
        {/* Los elementos en listad necesitan una key */}
        
      </div>
    </div>
      
  )
}
