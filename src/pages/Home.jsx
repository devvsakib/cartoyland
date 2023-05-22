import { useEffect, useState } from "react"
import CTA from "../components/CTA/CTA"
import Feature from "../components/Feature/Feature"
import Slider from "../components/Feature/Slider"
import Banner from "../components/Header/Banner"
import Layout from "../components/Layout"
import API from '../lib/API';
import FeaturedToys from "../components/Feature/FeaturedToys"
import Products from "../components/Products/Products"
import GalleryS from "../components/Feature/GalleryS"

const Home = () => {
  const [categories, setCategories] = useState([])
  const [featuredToys, setFeaturedToys] = useState([])
  const [productByCategory, setProductByCategory] = useState([])
  const [categoryName, setCategoryName] = useState('Cars')
  const [loading, setLoading] = useState(true)


  const getCategories = async () => {
    try {
      const res = await API.getCategories()
      setCategories(res)
    } catch (error) { }
  }
  const getFeaturedToys = async () => {
    setLoading(true)
    try {
      const res = await API.featuredToys()
      setFeaturedToys(res)
      setLoading(false)
    } catch (error) { }
  }
  const getProductByCategory = async () => {
    setLoading(true)
    try {
      const res = await API.getToyByCategory(categoryName)
      setProductByCategory(res)
      setLoading(false)
    } catch (error) { }
  }
  useEffect(() => {
    getCategories()
    getFeaturedToys()
  }, [])
  useEffect(() => {
    getProductByCategory()
  }, [categoryName])


  return (
    <div className='text-3xl'>
      <Banner />
      <Layout>
        <Feature />
        <Slider categories={categories} />
        <FeaturedToys product={featuredToys} loading={loading} />
        <Products product={productByCategory} setCategoryName={setCategoryName} />
        <GalleryS />
        <CTA />
      </Layout>
    </div>
  )
}

export default Home