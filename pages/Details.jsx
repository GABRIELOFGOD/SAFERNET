import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContextUser } from '../utils/Context';
import { IoArrowBack } from "react-icons/io5";
import { convertTextToHTML } from '../utils/TextConverter';
import { formatDate } from '../utils/formatter';
// import './styles.css'; // Ensure the CSS file is imported

const Details = () => {
  const { id } = useParams();
  const { singleBlog, blog } = ContextUser();
  const [htmlContent, setHtmlContent] = useState([]);

  useEffect(() => {
    singleBlog(id);
  }, [id]);

  useEffect(() => {
    if (blog?.theBlog.body) {
      const paragraphs = blog.theBlog.body.split('\n').filter(paragraph => paragraph.trim() !== '');
      const convertedParagraphs = paragraphs.map(paragraph => convertTextToHTML(paragraph));
      setHtmlContent(convertedParagraphs);
    }
  }, [blog]);

  return (
    <div className='md:px-52 px-6 py-12'>
      <Link to='/blog' className="flex w-fit pb-3 gap-3">
        <IoArrowBack className='my-auto' />
        <p className="semi-bold">Back</p>
      </Link>
      {blog ? (
        <div>
          <p className="md:text-3xl text-2xl capitalize mb-5 font-bold text-black">{blog.theBlog.title}</p>
          {blog.theBlog.image && <img src={blog.theBlog.image} alt="blog Img" />}
          <div className="flex justify-between mt-5 md:mt-10 gap-5 md:gap-10">
            {blog.theBlog.postedBy && <p className="text-[15px] pl-6 font-mono py-2 text-gray-600">Posted by: {blog.theBlog.postedBy}</p>}
            <p className='mr-10 my-auto text-neutral-700'>{formatDate(blog.theBlog.createdAt)}</p>
          </div>
          <div className='flex flex-col gap-1'>
            {htmlContent.map((paragraph, i) => (
              <p key={i} className='text-justify text-[16px] break-words  pt-10 pb-3' dangerouslySetInnerHTML={{ __html: paragraph.trim() }}></p>
            ))}
          </div>
        </div>
      ) : (
        <p className='text-4xl font-bold text-center text-gray-400'>Loading Blog...</p>
      )}
    </div>
  );
}

export default Details;
