import React from 'react'
import { blog } from '../utils/Constants'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='md:px-32 p-6 md:py-12 bg-secondary'>
      <p className="text-4xl font-bold pb-10 text-primary">Recent Blogs</p>
      <div className='md:flex gap-5 flex-wrap'>
        {
          blog.map(post => (
            <Link to={post.path} key={post.id}>
              <BlogCard
                author={post.publisher}
                topic={post.topic}
                content={post.content}
                image={post.image}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Blog