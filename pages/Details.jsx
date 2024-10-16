// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { ContextUser } from '../utils/Context';
// import { IoArrowBack } from "react-icons/io5";
// import { convertTextToHTML } from '../utils/TextConverter';
// import { formatDate } from '../utils/formatter';
// import { Helmet } from 'react-helmet-async';
// // import './styles.css'; // Ensure the CSS file is imported

// const Details = () => {
//   const { id } = useParams();
//   const { singleBlog, blog } = ContextUser();
//   const [htmlContent, setHtmlContent] = useState([]);

//   useEffect(() => {
//     singleBlog(id);
//   }, [id]);

//   useEffect(() => {
//     if (blog?.theBlog.body) {
//       const paragraphs = blog.theBlog.body.split('\n').filter(paragraph => paragraph.trim() !== '');
//       const convertedParagraphs = paragraphs.map(paragraph => convertTextToHTML(paragraph));
//       setHtmlContent(convertedParagraphs);
//       // setHtmlContent(convertedParagraphs);
//     }
//   }, [blog]);

//   const navigate = useNavigate();

//   return (
//     <div className='md:px-52 px-3 py-12'>
//       <Helmet>
//         <title>{blog?.theBlog.title}</title>
//         <meta name="description" content={blog?.theBlog.postedBy} />
//         <meta property="og:title" content={blog?.theBlog.title} />
//         <meta property="og:description" content={blog?.theBlog.body} />
//         <meta property="og:image" content={blog?.theBlog.image} />
//         <meta property="og:url" content={`https://thesafernet.org/details/${blog?.theBlog.title}`} />
//       </Helmet>
//       <button onClick={() => navigate(-1)} className="flex w-fit pb-3 gap-3">
//         <IoArrowBack className='my-auto' />
//         <p className="semi-bold">Back</p>
//       </button>
//       {blog ? (
//         <div>
//           <p className="md:text-3xl text-2xl capitalize mb-5 font-bold text-black">{blog?.theBlog.title}</p>
//           {blog?.theBlog.image && <img src={blog?.theBlog.image} alt="blog Img" />}
//           <div className="flex justify-between mt-2 md:mt-10 gap-5 md:gap-10">
//             {blog.theBlog.postedBy && <p className="text-[15px] pl-3 font-mono py-2 text-gray-600">Posted by: {blog?.theBlog.postedBy}</p>}
//             <p className='mr-5 my-auto text-neutral-700'>{formatDate(blog?.theBlog.createdAt)}</p>
//           </div>
//           <div className='flex flex-col gap-1'>
//             {htmlContent.map((paragraph, i) => (
//               <p key={i} className=' text-[16px] break-words  pt-5 -pb-5' dangerouslySetInnerHTML={{ __html: paragraph.trim() }}></p>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p className='text-4xl font-bold text-center text-gray-400'>Loading Blog...</p>
//       )}
//     </div>
//   );
// }

// export default Details;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl, ContextUser } from '../utils/Context';
import { IoArrowBack } from "react-icons/io5";
import { formatDate } from '../utils/formatter';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import { convertTextToHTML } from '../utils/TextConverter';
import BlogInterractivity from '../components/blog/BlogInterractivity';
import BlogContentBody from '../components/blog/BlogContentBody';
import useFetchBlog from '../hooks/BlogHook';

const Details = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchBlog(`${baseUrl}/blog/get/${id}`);
  const [blogBody, setBlogBody] = useState(null);
  const [blog, setBlog] = useState(null);
  const [htmlContent, setHtmlContent] = useState([]);

  useEffect(() => {
    if (data) {
      setBlog(data.theBlog);
      console.log(data.theBlog.body);
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

  // useEffect(() => {
  //   const fetchBlog = async () => {
  //     await singleBlog(id);
  //     setBlogBody(blog?.theBlog.body);
  //     console.log(blog);
  //   };

  //   fetchBlog();
  // }, [id, blog]);

  const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col items-center justify-center px-3 py-12 blogPage'>
      <Helmet>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.title} />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.body} />
        <meta property="og:image" content={blog?.image} />
        <meta property="og:url" content={`https://thesafernet.org/details/${blog?.title}`} />
      </Helmet>
      <div className='md:w-[600px] w-full flex  flex-col gap-3'>
        <img src={blog?.image} alt="" />
        <p className="font-bold text-4xl">{blog?.title}</p>
        <div className="flex justify-between gap-5 md:gap-10 mb-10">
          {blog?.postedBy && <p className="text-[15px] pl-3 font-mono py-2 text-gray-600">Posted by: {blog?.postedBy}</p>}
          <p className='mr-5 my-auto text-neutral-700'>{formatDate(blog?.createdAt)}</p>
        </div>
        <div>
          <BlogInterractivity />
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
          <BlogInterractivity />

          <div>
            <p className="text-3xl font-bold">"Comments"</p>
            <p className="font-semibold text-neutral-400">Cool feature huh? coming soon!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

