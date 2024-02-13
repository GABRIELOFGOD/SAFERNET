import React, { useEffect } from 'react'
import { ContextUser } from '../utils/Context'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom';
import AdminBlogCard from '../components/AdminBlogCard';

const AdminBlog = () => {
  const { viewBlog, blogs } = ContextUser();

  useEffect(() => {
    viewBlog();
  }, [])

  return (
    <div className='p-12'>
      {
        blogs ? <div>
          <p className="text-2xl font-bold capitalize">This are the recent blogs</p>
        <div className='mt-10 flex flex-wrap gap-5'>
          {
            blogs?.map(blog => (
              <Link
                key={blog._id}
                to={`/details/${blog._id}`}
              >
                <AdminBlogCard
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

export default AdminBlog;