import Rating from 'react-rating'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import discountPrice from '../../utils/getDiscountPrice'
import PrimaryButton from '../Common/PrimaryButton'
import ProductCard from '../Products/ProductCard'
const FeaturedToys = ({ product }) => {
    return (
        <div className='my-32'>
            <h2 className='text-2xl font-bold mb-8'>Featured Toys</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10'>
                {product?.map((toy, index) => (
                    <div data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className='flex flex-col items-center shadow-lg text-secondary justify-center gap-2 rounded-md relative'>
                        <div className='absolute top-2 left-2 badge bg-accent-content'>-10%</div>
                        <div className='overflow-hidden h-44 w-full'>
                            <img
                                className='object-cover h-full mx-auto'
                                src={toy?.pictureUrl}
                                alt={toy?.name}
                            />
                        </div>
                        <div className='px-4 pt-4 min-w-full'>
                            <Link to={`/toy/${toy?._id}`}>
                                <h2 className='text-xl font-semibold'>{toy?.name}</h2>
                                <div className='flex mt-3 items-center  justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-lg'>{toy?.rating}</p>
                                        <div className='-mt-2'>
                                            <Rating
                                                initialRating={toy?.rating}
                                                fullSymbol={<FaStar className='text-sm text-accent' />}
                                                emptySymbol={<FaStarHalfAlt className='text-sm' />}
                                                readonly
                                            />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex relative items-center'>
                                            <p className='text-xl font-semibold'>${discountPrice(toy?.price)}</p>
                                            <span className='line-through ml-1 text-sm font-semibold text-primary absolute right-0 -top-3'>${toy?.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full px-3 pb-3'>
                            <Link to={`/toy/${toy?._id}`}>
                                <PrimaryButton fWidth={true} text='View Details' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedToys