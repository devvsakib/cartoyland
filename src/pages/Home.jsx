import { useEffect, useState } from "react"
import CTA from "../components/CTA/CTA"
import Feature from "../components/Feature/Feature"
import Slider from "../components/Feature/Slider"
import Banner from "../components/Header/Banner"
import Layout from "../components/Layout"
import API from '../lib/API';
import FeaturedToys from "../components/Feature/FeaturedToys"
import Products from "../components/Products/Products"
import AOS from 'aos';
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
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const getFeaturedToys = async () => {
    try {
      const res = await API.featuredToys()
      setFeaturedToys(res)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const getProductByCategory = async () => {
    try {
      const res = await API.getToyByCategory(categoryName)
      setProductByCategory(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    AOS.init();
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
        <FeaturedToys product={featuredToys} />
        <Products product={productByCategory} setCategoryName={setCategoryName} />
        <GalleryS />
        <CTA />
      </Layout>
    </div>
  )
}

export default Home