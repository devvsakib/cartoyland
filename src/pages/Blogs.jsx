import React, { useEffect, useState } from 'react'
import API from '../lib/API'
import Layout from '../components/Layout'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlogs = async () => { const res = await API.getBlogs(); setBlogs(res.blogs); setLoading(false) }
        fetchBlogs()

    }, [])

    return (
        <div className='my-10'>
            <Layout>
                <h1 className="text-3xl font-bold text-center mb-5">Blogs</h1>
                <div className="grid grid-cols-1 gap-4">
                    {
                        loading ? <div className='w-full h-full flex justify-center items-center mt-20'>
                            <img className='w-24' src="/images/loading.gif" />
                        </div> :
                            blogs.length > 0 ? blogs.map(blog => (
                                <div className="bg-white shadow-md rounded-md p-5">
                                    <img src={blog.thumbnail} alt="" className="w-full lg:h-96 object-cover" />
                                    <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
                                    <p className="text-gray-500 mt-2">{blog.description}</p>
                                </div>
                            )) : <h1 className="text-2xl font-semibold">No blog found</h1>
                    }
                </div>
            </Layout>
        </div>
    )
}

export default Blogs