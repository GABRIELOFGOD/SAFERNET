import React, { useContext, useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { EditorContext } from './BlogPost';
import toast from 'react-hot-toast';
import EditorJS from "@editorjs/editorjs";
import { tools } from './EditorTools';
import { baseUrl } from '../utils/Context';
import { TailSpin } from 'react-loader-spinner';

const BlogForm = ({close}) => {
  const [blogImage, setBlogImage] = useState(null);
  const { blog, blog: { title, context, image }, setBlog, textEditor, setTextEditor } = useContext(EditorContext);
  const [closeQuestion, setCloseQuestion] = useState(false);

  const [postLoading, setPostLoading] = useState(false);

  const blogImageUploader = (e) => {
    const file = e.target.files[0];
    if(file){
      let loadingToast = toast.loading('Uploading blog image ...');
      setBlogImage(file);
      setBlog({ ...blog, image: file });
      toast.dismiss(loadingToast);
      toast.success('Blog image uploaded ✅');
    }
  }

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setBlog({ ...blog, title });
  }

  useEffect(() => {
    setTextEditor(new EditorJS({ 
      holder: 'blogEditor',
      data: "",
      tools: tools,
      placeholder: 'Write your blog here ...',
    }))
  }, []);

  const handlePost = async () => {
    setPostLoading(true);
    try {
      if(!title) return toast.error('Please provide a title for your blog');
      if(textEditor.isReady){
        textEditor.save().then( async (data) => {
          if(data.blocks.length){
            setBlog({ ...blog, context: data });

            // ============== POST BLOG TO SERVER ============== //
            console.log("data", data);
            const blogData = new FormData();
            blogData.append('title', title);
            blogData.append('body', JSON.stringify(data));
            blogData.append('image', image);

            const res = await fetch(`${baseUrl}/blog/post`, {
              method: 'POST',
              body: blogData,
              credentials: 'include'
            });

            const response = await res.json();
            if(!res.ok){
              toast.error(response.error);
              // console.log(response);
            }

            if(res.ok){
              toast.success('Blog posted successfully ✅');
              close();
            }
            
          } else {
            toast.error('Please write something on your blog');
          }
        })
      }
    } catch (error) {
      toast.error('An error occurred while posting your blog');
      console.log(error);
    } finally {
      setPostLoading(false);
    }
  }

  const closer = () => {
    setBlog({ title: '', context: '', image: null });
    setCloseQuestion(!closeQuestion);
    close();
  }

  function Asker(){
    return(
      <div className='fixed flex justify-center z-40 items-center top-0 left-0 bg-black bg-opacity-20 w-full h-full'>
        <div className='bg-white rounded-md w-[400px] h-fit px-10 py-5 border-2 border-gray-200'>
          <p className='font-bold border-b-2 border-gray-200'>Are you sure you want to close?</p>
          <p className="text-sm mt-5 text-neutral-400">If you close now, all this will be deleted unsaved!</p>
          <div className='flex justify-end gap-3 mt-3'>
            <button className='bg-red-500 hover:bg-red-800 duration-200 font-semibold rounded-full text-xs py-1 px-4 text-white' onClick={()=>setCloseQuestion(!closeQuestion)} >No</button>
            <button className='bg-button font-semibold rounded-full text-xs py-1 px-4 text-white' onClick={closer}>Yes</button>
          </div>
        </div>
      </div>
    )
  }

  const blogCloser = () => {
    if(!title && !context && !image){
      close();
    } else {
      setCloseQuestion(!closeQuestion)
    }
  }

  return (
    <div className="flex flex-col max-w-[500px] gap-10 overflow-auto max-h-full w-full px-10 bg-white rounded-md border-2 border-neutral-400 relative">
      <div className={`fixed h-full w-full top-0 left-0 z-50 bg-white bg-opacity-80 justify-center items-center ${postLoading ? "flex" : "hidden"}`}>
        <TailSpin color='#084ca1' height={50}/>
      </div>
      <div className='sticky py-3 top-0 bg-white left-0 border-b-2 border-gray-200 flex w-full justify-between mb-3'>
      <button className='bg-red-500 hover:bg-red-800 duration-200 font-semibold rounded-full text-xs py-1 px-4 text-white' onClick={blogCloser} >close</button>
        <div className="flex gap-3">
          <button className='bg-gray-400 font-semibold rounded-full text-xs py-1 px-4 text-white'>Preview</button>
          <button disabled={postLoading} className='bg-button font-semibold rounded-full disabled:bg-neutral-500 text-xs py-1 px-4 text-white' onClick={handlePost}>Post</button>
        </div>
      </div>
      <div className="absolute top-5 right-5">
      </div>
      <div className='w-full h-fit'>
        <input type="file" onChange={blogImageUploader} className='hidden' id='blogImage' />
        <label htmlFor='blogImage' className='w-full border-dashed border-2 border-opacity-50 border-primary h-[150px] flex justify-center items-center cursor-pointer rounded-lg text-neutral-400'>{blogImage ? <img src={URL.createObjectURL(blogImage)} alt="Blog Image" className='w-full h-[150px] object-cover rounded-lg' /> : "Upload blog Image"}</label>
        
      </div>
      <div>
        <textarea value={title} onChange={handleTitleChange} name="blog-title" className='w-full outline-none font-bold px-3 h-fit border-b-2 border-slate-600 rounded-md' placeholder='Blog title ...' id=""></textarea>
      </div>

      <div id='blogEditor'></div>
      {closeQuestion && <Asker />}
    </div>
  )
}

export default BlogForm