import React, { useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'
import { ContextUser } from '../utils/Context'
import { formatDate, urlFormatter } from '../utils/formatter'

const Blog = () => {
  const { viewBlog, blogs } = ContextUser();

  useEffect(() => {
    viewBlog();
  }, []);

  return (
    <div className="bg-secondary flex justify-center">
      <div className='md:w-[680px] flex flex-col justify-center w-full p-6 md:py-12'>
              {
          blogs ? <div>
          <p className="text-4xl font-bold pb-10 text-primary">Recent Blogs</p>
          <div className='md:mt-10 mt-5 justify-center flex flex-col gap-5'>
            {
              blogs?.slice(0).reverse().map(blog => (
                <Link
                  key={blog._id}
                  to={`/details/${urlFormatter(blog.title)}`}
                >
                  <BlogCard
                    topic={blog.title}
                    image={blog.image}
                    author={blog.postedBy}
                    content={blog.body}
                    date={formatDate(blog.createdAt)}
                  />
                </Link>
              ))
            }
          </div>
          </div>
          :<p className="text-4xl font-bold text-center text-gray-400">Loading blogs...</p>
        }
      </div>
    </div>
  )
}

export default Blog