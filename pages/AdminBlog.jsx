import React, { useEffect, useState } from 'react'
import { ContextUser } from '../utils/Context'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom';
import AdminBlogCard from '../components/AdminBlogCard';
import Poster from '../components/Poster';
import BlogPost from '../components/BlogPost';

const AdminBlog = () => {
  const [show, setShow] = useState(false)
  const { viewBlog, blogs } = ContextUser();

  useEffect(() => {
    viewBlog();
  }, [])

  return (
    <div className='p-12'>
      {
        blogs ? <div>
        <button onClick={() => setShow(true)} className='bg-primary hover:bg-button duration-200 rounded-md py-3 px-4 text-[12px] whitespace-nowrap text-white h-fit'>Post New Blog</button>
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
      <Poster
        children={<BlogPost />}
        show={show}
      />
    </div>
  )
}

export default AdminBlog;