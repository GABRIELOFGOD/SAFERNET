import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContextUser } from '../../utils/Context';
import { urlFormatter } from '../../utils/formatter';

const RelatedContents = ({ blog }) => {
  const { viewBlog, blogs } = ContextUser();

  useEffect(() => {
    viewBlog();
  }, []);

  if (!blogs || !blog) {
    return <div className="flex justify-center items-center h-64"><span className="text-xl font-semibold">Loading...</span></div>;
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
  }

  return (
    <div className='py-3 md:py-20 md:flex-1'>
      <Link to="/blog" className='font-bold text-2xl underline text-primary'>More blogs:</Link>
      <div className='py-5 flex flex-col gap-3'>
        {blogs.reverse().filter(b => b._id !== blog._id).slice(0, 5).map((blog, i) => (
          <div key={i} className='relative flex flex-col md:flex-row gap-5'>
            <img src={blog.image} className='w-full md:w-[300px] h-[200px] object-cover' />
            <div className='absolute bottom-0 left-0 bg-black bg-opacity-30 text-white p-2 w-full'>
              <Link to={`/details/${urlFormatter(blog.title)}`} className='font-bold text-xl'>{blog.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedContents