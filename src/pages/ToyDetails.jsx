import { useParams } from 'react-router-dom';
import API from '../lib/API';
import { useContext, useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Layout from '../components/Layout';
import Rating from 'react-rating';
import { FaCartArrowDown, FaCartPlus, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import discountPrice from '../utils/getDiscountPrice'
import Reviews from '../components/Products/Reviews';
import Button from '../components/Common/Button';
import PrimaryButton from '../components/Common/PrimaryButton';
import { toast } from 'react-hot-toast';
import { CartContext } from '../contexts/CartProvider';

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getToy = async () => {
      try {
        const res = await API.getToy(id)
        setToy(res)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
      setLoading(false)
    }
    getToy()
  }, [id])
  const ratings = [1, 2, 3, 4, 5]

  return (
    <Layout>
      {loading ? <div className='w-full h-full flex justify-center items-center mt-20'>
        <img className='w-24' src="/images/loading.gif" />
      </div>
        :
        <div className='my-10'>
          <h2 className='flex items-center gap-5'><BsArrowRight className='text-accent' /> / Alltoys / {toy?.name}</h2>
          <div className='grid gap-12'>
            <div className='my-24 grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div>
                <img src={toy?.pictureUrl} alt="Cant Load Image!" />
              </div>
              <div>
                <div className='flex mb-5 gap-3'>
                  <p>Sub-Category</p>
                  <p className='text-accent'>{toy?.subcategory}</p>
                </div>
                <h2 className='text-3xl font-semibold text-secondary'>{toy?.name}</h2>
                <p className='text-primary my-5'>{toy?.detailDescription}</p>
                <div>
                  <div className='flex relative items-center justify-start'>
                    <p className='font-semibold text-xl text-accent'>${discountPrice(toy?.price)}</p>
                    <span className='line-through ml-1 text-sm font-semibold relative text-primary -top-2'>${toy?.price}</span>
                  </div>
                </div>
                <div>
                  <p className='text-primary text-lg'>In Stock</p>
                </div>
                <div className='flex items-center gap-2'>
                  <p className='text-lg'>{toy?.rating}</p>
                  <Rating
                    initialRating={toy?.rating}
                    fullSymbol={<FaStar className='text-sm text-accent' />}
                    emptySymbol={<FaStarHalfAlt className='text-sm' />}
                    readonly
                  />
                </div>
                <div className='flex flex-col gap-2 py-3'>
                  <div className='flex gap-3'>
                    <p>Sold By</p>
                    <p className='text-accent'>{toy?.sellerName}</p>
                  </div>
                  <div className='flex gap-3'>
                    <p>Email: {toy?.sellerEmail ? toy.sellerEmail : "Not Provided"}</p>
                  </div>
                </div>
                <div className='flex gap-5 mt-10'>
                  <button onClick={() => addToCart(toy)}>
                    <PrimaryButton icon={<FaCartPlus />} text='Add to Cart' />
                  </button>
                  <button onClick={() => toast.success("Added to cart")}>
                    <PrimaryButton text='Buy Now' />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold'>Reviews</h2>
              <div>
                {
                  ratings.reverse().map((rating, index) => (
                    <Reviews key={index} rating={rating} />
                  ))
                }
                <h2 className='text-gray-400 text-2xl'>Feature Coming soon...</h2>
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold'>Related Toys</h2>
            </div>
          </div>
        </div>}
    </Layout >
  )
}

export default ToyDetails