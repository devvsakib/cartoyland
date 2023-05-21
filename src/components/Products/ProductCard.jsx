import { Link } from "react-router-dom"
import PrimaryButton from "../Common/PrimaryButton"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import Rating from "react-rating"

const ProductCard = ({ product, index }) => {
    return (
        <div
            data-aos="fade-zoom-in"
            data-aos-delay={index * 200}
            data-aos-easing="ease-out-cubic"
            // data-aos="fade-right"
            // data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className='flex flex-col items-center shadow-lg text-secondary justify-center gap-2 rounded-md relative'>
            <div className='absolute top-2 left-2 badge bg-accent-content'>-10%</div>
            <div className='overflow-hidden h-44 w-full'>
                <img
                    className='object-cover h-full mx-auto'
                    src={product?.pictureUrl}
                    alt={product?.name}
                />
            </div>
            <div className='px-4 pt-4 min-w-full'>
                <Link to={`/toy/${product?._id}`}>
                    <h2 className='text-xl font-semibold'>{product?.name}</h2>
                    <div className='flex mt-3 items-center  justify-between'>
                        <div className='flex items-center gap-2'>
                            <p className='text-lg'>{product?.rating}</p>
                            <Rating
                                initialRating={product?.rating}
                                fullSymbol={<FaStar className='text-sm text-accent' />}
                                emptySymbol={<FaStarHalfAlt className='text-sm' />}
                                readonly
                            />
                        </div>
                        <div className=''>
                            <div className='flex relative items-center'>
                                <span className='text-xl font-semibold'>${product?.price}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='w-full px-3 pb-3'>
                <Link to={`/toy/${product?._id}`}>
                    <PrimaryButton fWidth={true} text='View Details' />
                </Link>
            </div>
        </div>
    )
}

export default ProductCard