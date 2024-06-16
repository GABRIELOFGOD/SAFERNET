import React, { useEffect } from 'react'
import { ContextUser } from '../utils/Context'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const CampaignDetails = () => {
  const { id } = useParams()
  const { singleCampaign, getSingleCampaign } = ContextUser()

  useEffect(() => {
    getSingleCampaign(id)
  }, [])

  useEffect(() => {
    if (singleCampaign?.body) {
      const paragraphs = singleCampaign.body.split('\n').filter(paragraph => paragraph.trim() !== '');
      const convertedParagraphs = paragraphs.map(paragraph => convertTextToHTML(paragraph));
      setHtmlContent(convertedParagraphs);
    }
  }, [blog]);

  // console.log(singleCampaign)
  
  return (
    // <div className='py-12 flex w-full flex-col justify-center items-center'>
    //   <div>
    //     <p className="text-4xl font-bold text-center">{singleCampaign?.title}</p>
    //   </div>
    //   <div className='w-full flex justify-center h-[300px] overflow-hidden'>
    //     <img className='w-fit flex h-full' src={singleCampaign?.image} alt="" />
    //   </div>
    //   <p>{singleCampaign?.body}</p>
    // </div>
    <div>
      <Helmet>
        <title>{singleCampaign.title}</title>
        {/* <meta name="description" content={blogData.description} /> */}
        <meta property="og:title" content={singleCampaign.title} />
        <meta property="og:description" content={singleCampaign.body} />
        <meta property="og:image" content={singleCampaign.image} />
        <meta property="og:url" content={`https://thesafernet.org/campaign/${singleCampaign._id}`} />
      </Helmet>
      <p className="md:text-3xl text-2xl capitalize mb-5 font-bold text-black">{singleCampaign.title}</p>
      {singleCampaign.image && <img src={singleCampaign.image} alt="blog Img" />}
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
  )
}

export default CampaignDetails