import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Loader from '../Loading/Loading'
import './ParlourDetail.css';
import BasicTabs from '../Tab/Tab';

const ParlourDetail = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  const { Id } = useParams()

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${Id}`)
      setProduct(await response.json());
      setLoading(false)
    }
    getProduct()
  }, [Id]);

  useEffect(() => {
    document.title = product.title;
  }, [product.title]);

  const ShowParlour = () => {
    return (
  <>
    <div className='app'>
      <div className='details'>
        <div className='big-img'>
        <img src={product.image} alt="" height='400px' width='400px'/>
        </div>
        <div className='box'>
          <div className='row'>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        </div>
          <p>{product.description}</p>
          <p>{product.category}</p>
           <button className='cart' >Add to cart</button>
      </div>
      </div>
    </div>
    </>
    )
  }
  return (
    <>
      
      <Navbar />
      {loading ? <Loader /> : <ShowParlour />}
      <BasicTabs/>
    </>

  )
}

export default ParlourDetail;
