import React, { useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'
import { ContextUser } from '../utils/Context'

const Blog = () => {
  const { viewBlog, blogs } = ContextUser();

  useEffect(() => {
    viewBlog();
  }, [])

  return (
    <div className='md:px-32 p-6 md:py-12 bg-secondary'>
            {
        blogs ? <div>
        <p className="text-4xl font-bold pb-10 text-primary">Recent Blogs</p>
        <div className='mt-10 justify-between flex flex-wrap gap-5'>
          {
            blogs?.slice(0).reverse().map(blog => (
              <Link
                key={blog._id}
                to={`/details/${blog._id}`}
              >
                <BlogCard
                  topic={blog.title}
                  image={blog.image}
                  author={blog.postedBy}
                  content={blog.body}
                />
              </Link>
            ))
          }
        </div>
        </div>
        :<p className="text-4xl font-bold text-center text-gray-400">No Blog posted</p>
      }
    </div>
  )
}

export default Blog