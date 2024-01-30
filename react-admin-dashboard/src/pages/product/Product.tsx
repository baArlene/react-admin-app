import Single from '../../components/single/Single'
import { singleProduct } from '../../data'
import './product.scss'

const Product = () => {
  return (

    //Fetch data and send to Single component
    <div className='product'>
      <Single {...singleProduct} />
    </div>
  )
}

export default Product