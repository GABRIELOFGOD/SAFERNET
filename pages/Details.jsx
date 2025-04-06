
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../utils/Context';
import { formatDate } from '../utils/formatter';
import { Helmet } from 'react-helmet-async';
import { convertTextToHTML } from '../utils/TextConverter';
import BlogInterractivity from '../components/blog/BlogInterractivity';
import BlogContentBody from '../components/blog/BlogContentBody';
import useFetchBlog from '../hooks/BlogHook';
import RelatedContents from '../components/blog/RelatedContents';
import CommentSection from '../components/blog/CommentSection';

const Details = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchBlog(`${baseUrl}/blog/get/${id}`);
  const [blogBody, setBlogBody] = useState(null);
  const [blog, setBlog] = useState(null);
  const [htmlContent, setHtmlContent] = useState([]);

  useEffect(() => {
    if (data) {
      setBlog(data.theBlog);
      // console.log(data.theBlog.body);
      try {
        setBlogBody(JSON.parse(data.theBlog.body));
      } catch (error) {
        console.error("Failed to parse blog body:", error);
        const paragraphs = data.theBlog.body.split('\n').filter(paragraph => paragraph.trim() !== '');
        const convertedParagraphs = paragraphs.map(paragraph => convertTextToHTML(paragraph));
        setHtmlContent(convertedParagraphs);
      }
    }
  }, [data]);

  const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col md:flex-row gap-20 md:px-20 justify-center px-3 py-12 blogPage'>
      <Helmet>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.title} />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.body} />
        <meta property="og:image" content={blog?.image} />
        <meta property="og:url" content={`https://thesafernet.org/details/${blog?.title}`} />
      </Helmet>
      <div className='md:w-[700px] w-full flex md:flex-[3] flex-col gap-3'>
        <img src={blog?.image} alt="" />
        <p className="font-bold text-4xl">{blog?.title}</p>
        <div className="flex justify-between gap-5 md:gap-10 mb-10">
          {blog?.postedBy && <p className="text-[15px] pl-3 font-mono py-2 text-gray-600">Posted by: {blog?.postedBy}</p>}
          <p className='mr-5 my-auto text-neutral-700'>{formatDate(blog?.createdAt)}</p>
        </div>
        <div>
          <BlogInterractivity blog={blog} />
          {htmlContent.length?
            htmlContent.map((paragraph, i) => (
              <p key={i} className=' text-[16px] break-words  pt-5 -pb-5' dangerouslySetInnerHTML={{ __html: paragraph.trim() }}></p>
            )):
            blogBody && <BlogContentBody block={blogBody.blocks} />
          }
          {/* {blogBody && <BlogContentBody block={blogBody.blocks} />} */}
          {/* {
            blog?.theBlog.body.map((block, i) => (
              <BlogContentBody block={blogJsonFyer} />))
          } */}
          <BlogInterractivity blog={blog} />

          <div id='comments'>
            <CommentSection blog={blog} />
          </div>
        </div>
      </div>
      <RelatedContents blog={blog} />
    </div>
  );
}

export default Details;

