// import React, { useRef } from 'react'
// import { IoCloseSharp } from 'react-icons/io5'
// import { ContextUser } from '../utils/Context'

// const EditBlog = ({title, details, file, close, settingTitle, id, settingFile, settingDetails}) => {
//     const { editBlog } = ContextUser();

//     const imgUpload = e => {
//         try {
//           settingFile(e.target.files[0])
//         } catch (err) {
//           console.log(err)
//         }
//       }
    
//       return (
//         <div className='bg-button w-full relative py-20 px-12 max-h-[580px] overflow-auto rounded-md'>
//           <IoCloseSharp onClick={close} className='absolute top-8 right-10 text-white text-2xl cursor-pointer' />
//           <form className='flex flex-col gap-5' onSubmit={e => editBlog(e, id, close)}>
//             <input value={title} onChange={e => settingTitle(e.target.value)} type="text" className='px-3 text-white text-[12px] h-[40px] w-full bg-transparent outline-none border-2 border-white rounded-sm' placeholder='Blog Title' />
//             <textarea value={details} onChange={e => settingDetails(e.target.value)} className='h-[200px] text-white bg-transparent border-2 border-white rounded-md p-3 text-[12px] outline-none w-full' placeholder='Blog Contents'></textarea>
//             <div>
//               <p className="text-[12px] text-white">Blog Image/Flyer</p>
//               {file && <div className="h-[100px] overflow-hidden"><img src={file} className='w-[150px]' /></div>}
//               <input onChange={e => imgUpload(e)} className='text-white' type="file" />
//             </div>
//             <button className='bg-white w-full rounded-md text-primary py-3 font-semibold hover:bg-primary duration-200 hover:text-white text-sm'>Post Blog</button>
//           </form>
//         </div>
//       )
// }

// export default EditBlog

import React, { useRef, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ContextUser } from '../utils/Context';

const EditBlog = ({ title, details, file, close, settingTitle, id, settingFile, settingDetails }) => {
  const { editBlog } = ContextUser();
  const quillRef = useRef(null);
  const [preview, setPreview] = useState(false);

  const imgUpload = (e) => {
    try {
      settingFile(e.target.files[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreview = () => {
    setPreview(true);
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'align', 'link', 'image'
  ];

  return (
    <div className="bg-button w-full relative py-20 px-12 max-h-[580px] overflow-auto rounded-md">
      <IoCloseSharp onClick={close} className="absolute top-8 right-10 text-white text-2xl cursor-pointer" />
      <form className="flex flex-col gap-5" onSubmit={(e) => editBlog(e, id, close)}>
        <p className="text-white font-semibold text-center text-xl">Update Blog</p>
        <input
          value={title}
          onChange={(e) => settingTitle(e.target.value)}
          type="text"
          className="px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm"
          placeholder="Blog Title"
        />
        <ReactQuill
          ref={quillRef}
          value={details}
          onChange={settingDetails}
          theme="snow"
          modules={modules}
          formats={formats}
          className="text-black bg-white rounded-md overflow-hidden"
        />
        <div>
          <p className="text-[12px] text-white">Blog Image/Flyer</p>
          {file && <div className="h-[100px] overflow-hidden"><img src={file} className='w-[150px]' alt="blog" /></div>}
          <input
            onChange={imgUpload}
            className="text-white"
            type="file"
          />
        </div>
        <div className="flex justify-between">
          {/* <button
            type="button"
            onClick={handlePreview}
            className="bg-gray-300 w-full mr-2 rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
          >
            Preview Blog
          </button> */}
          <button
            type="submit"
            className="bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
          >
            Update Blog
          </button>
        </div>
      </form>

      {preview && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white w-3/4 max-h-[80vh] p-6 rounded-lg overflow-auto">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: details }} />
            <div className="flex flex-wrap mt-4">
              {file && Array.from(file).map((file, index) => (
                <img key={index} src={URL.createObjectURL(file)} alt={`Blog image ${index}`} className="w-full h-auto mb-4" />
              ))}
            </div>
            <button
              onClick={() => setPreview(false)}
              className="bg-primary w-full rounded-md text-white py-3 hover:bg-white duration-200 hover:text-primary text-sm font-semibold mt-4"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBlog;
