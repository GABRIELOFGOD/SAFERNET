import React, { useEffect, useState } from 'react'
import { ContextUser } from '../utils/Context'
import { Link } from 'react-router-dom';
import AdminBlogCard from '../components/AdminBlogCard';
import Poster from '../components/Poster';
import BlogPost from '../components/BlogPost';
import EditBlog from '../components/EditBlog';
import DeleteConfirm from '../components/DeleteConfirm';

const AdminBlog = () => {
  const [show, setShow] = useState(false)
  const { viewBlog, blogs, editDetails, editFile, editTitle, setEditDetails, setEditFile, setEditTitle } = ContextUser();
  const [showEdit, setShowEdit] = useState(false)

  const [deleted, setDelete] = useState(false)

  const [thisId, setThisId] = useState()


  useEffect(() => {
    viewBlog();
  }, []);

  const closer = () => {
    setShow(false)
  }

  const closing = () => {
    setShowEdit(false)
  }

  return (
    <div className='p-12'>
      {
        blogs ? <div>
        <button onClick={() => setShow(true)} className='bg-primary hover:bg-button duration-200 rounded-md py-3 px-4 text-[12px] whitespace-nowrap text-white h-fit'>Post New Blog</button>
        <div className='mt-10 flex flex-wrap gap-5'>
          {
            blogs?.slice(0).reverse().map(blog => (
              <div
                key={blog._id}
              >
                <AdminBlogCard
                  topic={blog.title}
                  image={blog.image}
                  author={blog.postedBy}
                  content={blog.body}
                  id={blog._id}
                  show={setShowEdit}
                  title={setEditTitle}
                  details={setEditDetails}
                  file={setEditFile}
                  setDeleter={setDelete}
                  idSetter={setThisId}
                />
              </div>
            ))
          }
        </div>
        </div>
        :<p className="text-4xl font-bold text-center text-gray-400">No Blog posted</p>
      }
      <Poster
        children={<BlogPost close={closer} />}
        show={show}
      />
      <Poster
        children={<EditBlog
            title={editTitle}
            close={closing}
            details={editDetails}
            file={editFile}
            settingFile={setEditFile}
            settingTitle={setEditTitle}
            settingDetails={setEditDetails}
            id={thisId}
          />}
        show={showEdit}
      />
      <Poster
        show={deleted}
        children={<DeleteConfirm id={thisId} setDeleter={setDelete} />}
      />
    </div>
  )
}

export default AdminBlog;