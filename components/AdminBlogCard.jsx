import React, { useEffect, useState } from 'react'
import { titleTrunc, wrap } from '../utils/truncator'
import { Link } from 'react-router-dom'

const AdminBlogCard = ({image, topic, content, author, id, show, title, details, file, setDeleter, idSetter}) => {
  const [menu, setMenu] = useState(false);

  const editor = () => {
    show(true)
    title(topic)
    details(content)
    file(image)
    idSetter(id)
  }

  const deletorer = () => {
    setDeleter(true)
    idSetter(id)
  }

  return (
    <div onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)} className='md:w-[280px] bg-white relative shadow-md rounded-md overflow-hidden mb-5'>
      <ul className={`${menu ? 'flex' : 'hidden'} flex-col shadow-md absolute top-2 bg-white py-2 px-3 text-[12px] gap-3 right-4`}>
        <Link className='hover:bg-button cursor-pointer p-2 hover:text-white text-primary font-semibold rounded-sm duration-100' to={`/details/${id}`}>View Blog</Link>
        <p onClick={editor} className='hover:bg-button cursor-pointer p-2 hover:text-white text-primary font-semibold rounded-sm duration-100'>Edit Blog</p>
        <p onClick={deletorer} className='hover:bg-red-500 cursor-pointer p-2 hover:text-white text-red-500 font-semibold rounded-sm duration-100'>Delete Blog</p>
      </ul>
    {image && <div className='max-h-[200px] overflow-hidden'><img className='w-fit' src={image} alt="blog image" /></div>}
        <div className='p-3 shadow-sm'>
            <p className="font-bold capitalize text-primary">{titleTrunc(topic)}</p>
            <p className="font-semibold text-[10px] py-2 text-gray-600">Posted By: {author}</p>
            <p className=' text-[12px]'>{wrap(content)}</p>
        </div>
    </div>
  )
}

export default AdminBlogCard