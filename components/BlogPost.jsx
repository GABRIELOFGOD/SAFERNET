// import React from 'react'
// import { IoCloseSharp } from 'react-icons/io5'
// import { ContextUser } from '../utils/Context'

// const BlogPost = ({close}) => {
//   const { blogPoster, blogTitle, blogDetails, setBlogTitle, setBlogDetails, setBlogFile } = ContextUser();

//   const imgUpload = e => {
//     try {
//       setBlogFile(e.target.files[0])
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div className='bg-button w-full relative py-20 px-12 max-h-[580px] overflow-auto rounded-md'>
//       <IoCloseSharp onClick={close} className='absolute top-8 right-10 text-white text-2xl cursor-pointer' />
//       <form className='flex flex-col gap-5' onSubmit={e => blogPoster(e, close)}>
//         <p className="text-white font-semibold text-center text-xl">Post Blog</p>
//         <input value={blogTitle} onChange={e => setBlogTitle(e.target.value)} type="text" className='px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm' placeholder='Blog Title' />
//         <textarea value={blogDetails} onChange={e => setBlogDetails(e.target.value)} className='h-[200px] text-white bg-transparent border-2 border-white rounded-md p-3 text-[12px] outline-none w-full' placeholder='Blog Contents'></textarea>
//         <div>
//           <p className="text-[12px] text-white">Blog Image/Flyer</p>
//           <input onChange={e => imgUpload(e)} className='text-white' type="file" />
//         </div>
//         <button className='bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold'>Post Blog</button>
//       </form>
//     </div>
//   )
// }

// export default BlogPost



import React, { useState, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ContextUser } from '../utils/Context';

const BlogPost = ({ close }) => {
  const { blogPoster, blogTitle, blogDetails, blogFile, setBlogTitle, setBlogDetails, setBlogFile } = ContextUser();
  const quillRef = useRef(null);
  const [preview, setPreview] = useState(false);

  const imgUpload = (e) => {
    try {
      setBlogFile(e.target.files);
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
      <form className="flex flex-col gap-5" onSubmit={(e) => blogPoster(e, close)}>
        <p className="text-white font-semibold text-center text-xl">Post Blog</p>
        <input
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          type="text"
          className="px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm"
          placeholder="Blog Title"
        />
        <ReactQuill
          ref={quillRef}
          value={blogDetails}
          onChange={setBlogDetails}
          theme="snow"
          modules={modules}
          formats={formats}
          className="text-black bg-white rounded-md overflow-hidden"
        />
        <div>
          <p className="text-[12px] text-white">Blog Images</p>
          <input onChange={imgUpload} className="text-white" type="file" multiple />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePreview}
            className="bg-gray-300 w-full mr-2 rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
          >
            Preview Blog
          </button>
          <button
            type="submit"
            onClick={blogPoster}
            className="bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
          >
            Post Blog
          </button>
        </div>
      </form>

      {preview && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white w-3/4 max-h-[80vh] p-6 rounded-lg overflow-auto">
            <h2 className="text-2xl font-bold mb-4">{blogTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: blogDetails }} />
            <div className="flex flex-wrap mt-4">
              {blogFile && Array.from(blogFile).map((file, index) => (
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

export default BlogPost;


// import React, { useState, useRef, useEffect } from 'react';
// import { IoCloseSharp } from 'react-icons/io5';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { ContextUser } from '../utils/Context';
// import { useNavigate } from 'react-router-dom';

// const BlogPost = ({ close }) => {
//   const { blogPoster, blogTitle, blogDetails, blogFile, setBlogTitle, setBlogDetails, setBlogFile } = ContextUser();
//   const quillRef = useRef(null);
//   const [preview, setPreview] = useState(false);
//   const navigate = useNavigate();

//   const imgUpload = (e) => {
//     try {
//       setBlogFile(e.target.files);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     const editor = quillRef.current.getEditor();
//     editor.on('selection-change', (range, oldRange, source) => {
//       if (range && range.length > 0) {
//         const formats = editor.getFormat(range.index, range.length);
//         if (formats.image) {
//           if (window.confirm('Are you sure you want to remove the image?')) {
//             editor.deleteAt(range.index, range.length);
//           }
//         }
//       }
//     });
//   }, []);

//   const handlePreview = () => {
//     setPreview(true);
//   };

//   const removeImage = () => {
//     const editor = quillRef.current.getEditor();
//     const range = editor.getSelection();
//     if (range && range.length > 0) {
//       const formats = editor.getFormat(range.index, range.length);
//       if (formats.image) {
//         editor.deleteAt(range.index, range.length);
//       }
//     }
//   };

//   const imageHandler = () => {
//       const input = document.createElement('input');
//       input.setAttribute('type', 'file');
//       input.setAttribute('accept', 'image/*');
//       input.click();
    
//       input.onchange = () => {
//         const file = input.files[0];
//         if (file) {
//           const reader = new FileReader();
//           reader.onload = () => {
//             const quill = quillRef.current.getEditor();
//             const range = quill.getSelection();
//             quill.insertEmbed(range.index, 'image', reader.result);
//           };
//           reader.readAsDataURL(file);
//         }
//       };
//     };

//   return (
//     <div className="bg-button w-full relative py-20 px-12 max-h-[580px] overflow-auto rounded-md">
//       <IoCloseSharp onClick={close} className="absolute top-8 right-10 text-white text-2xl cursor-pointer" />
//       <form className="flex flex-col gap-5" onSubmit={(e) => blogPoster(e, close)}>
//         <p className="text-white font-semibold text-center text-xl">Post Blog</p>
//         <input
//           value={blogTitle}
//           onChange={(e) => setBlogTitle(e.target.value)}
//           type="text"
//           className="px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm"
//           placeholder="Blog Title"
//         />
//         <ReactQuill
//           ref={quillRef}
//           value={blogDetails}
//           onChange={setBlogDetails}
//           className="text-black bg-white border-2 border-white rounded-md p-3 text-[12px] outline-none w-full"
//           theme="snow"
//           modules={{
//             toolbar: {
//               container: [
//                 [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                 ['bold', 'italic', 'underline'],
//                 ['link', 'image'],
//                 ['clean'],
//                 [{ 'custom': removeImage }], // Add custom button
//               ],
//             },
//             // ... other modules
//           }}
//         />
//         <div>
//           <p className="text-[12px] text-white">Blog Images</p>
//           <input onChange={imgUpload} className="text-white" type="file" multiple />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handlePreview}
//             className="bg-gray-300 w-full mr-2 rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
//           >
//             Preview Blog
//           </button>
//           <button
//             type="submit"
//             className="bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
//           >
//             Post Blog
//           </button>
//         </div>
//       </form>

//       {preview && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white w-3/4 max-h-[80vh] p-6 rounded-lg overflow-auto">
//             <h2 className="text-2xl font-bold mb-4">{blogTitle}</h2>
//             <div dangerouslySetInnerHTML={{ __html: blogDetails }} />
//             <div className="flex flex-wrap mt-4">
//               {Array.from(blogFile).map((file, index) => (
//                 <img key={index} src={URL.createObjectURL(file)} alt={`Blog image ${index}`} className="w-[300px] h-auto mb-4" />
//               ))}
//             </div>
//             <button
//               onClick={() => setPreview(false)}
//               className="bg-primary w-full rounded-md text-white py-3 hover:bg-white duration-200 hover:text-primary text-sm font-semibold mt-4"
//             >
//               Close Preview
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPost;


// import React, { useState, useRef } from 'react';
// import { IoCloseSharp } from 'react-icons/io5';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import Quill styles
// import 'quill-image-resize-module-react'; // Import image resize module
// import { ContextUser } from '../utils/Context';
// import { useNavigate } from 'react-router-dom';

// // Quill imports
// import Quill from 'quill';
// import ImageResize from 'quill-image-resize-module-react';

// // Register the image resize module
// Quill.register('modules/imageResize', ImageResize);

// const BlogPost = ({ close }) => {
//   const { blogPoster, blogTitle, blogDetails, blogFile, setBlogTitle, setBlogDetails, setBlogFile } = ContextUser();
//   const quillRef = useRef(null);
//   const [preview, setPreview] = useState(false);
//   const navigate = useNavigate();

//   const imgUpload = (e) => {
//     try {
//       setBlogFile(e.target.files);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handlePreview = () => {
//     setPreview(true);
//   };

//   return (
//     <div className="bg-button w-full relative py-20 px-12 max-h-[580px] overflow-auto rounded-md">
//       <IoCloseSharp onClick={close} className="absolute top-8 right-10 text-white text-2xl cursor-pointer" />
//       <form className="flex flex-col gap-5" onSubmit={(e) => blogPoster(e, close)}>
//         <p className="text-white font-semibold text-center text-xl">Post Blog</p>
//         <input
//           value={blogTitle}
//           onChange={(e) => setBlogTitle(e.target.value)}
//           type="text"
//           className="px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm"
//           placeholder="Blog Title"
//         />
//         <ReactQuill
//           ref={quillRef}
//           value={blogDetails}
//           onChange={setBlogDetails}
//           className="text-black bg-white border-2 border-white rounded-md p-3 text-[12px] outline-none w-full"
//           theme="snow"
//           modules={{
//             toolbar: {
//               container: [
//                 [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                 ['bold', 'italic', 'underline'],
//                 ['link', 'image'],
//                 ['clean']
//               ],
//               handlers: {
//                 'image': imageHandler
//               }
//             },
//             imageResize: {} // Configure the image resize module here if needed
//           }}
//         />
//         <div>
//           <p className="text-[12px] text-white">Blog Images</p>
//           <input onChange={imgUpload} className="text-white" type="file" multiple />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handlePreview}
//             className="bg-gray-300 w-full mr-2 rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
//           >
//             Preview Blog
//           </button>
//           <button
//             type="submit"
//             className="bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
//           >
//             Post Blog
//           </button>
//         </div>
//       </form>

//       {preview && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white w-3/4 max-h-[80vh] p-6 rounded-lg overflow-auto">
//             <h2 className="text-2xl font-bold mb-4">{blogTitle}</h2>
//             <div dangerouslySetInnerHTML={{ __html: blogDetails }} />
//             <div className="flex flex-wrap mt-4">
//               {Array.from(blogFile).map((file, index) => (
//                 <img key={index} src={URL.createObjectURL(file)} alt={`Blog image ${index}`} className="w-full h-auto mb-4" />
//               ))}
//             </div>
//             <button
//               onClick={() => setPreview(false)}
//               className="bg-primary w-full rounded-md text-white py-3 hover:bg-white duration-200 hover:text-primary text-sm font-semibold mt-4"
//             >
//               Close Preview
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Function to handle image upload through the rich text editor
// const imageHandler = () => {
//   const input = document.createElement('input');
//   input.setAttribute('type', 'file');
//   input.setAttribute('accept', 'image/*');
//   input.click();

//   input.onchange = () => {
//     const file = input.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const quill = quillRef.current.getEditor();
//         const range = quill.getSelection();
//         quill.insertEmbed(range.index, 'image', reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
// };

// export default BlogPost;



// import React, { useState, useRef } from 'react';
// import { IoCloseSharp } from 'react-icons/io5';
// import ReactQuill, { Quill } from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import ImageResize from 'quill-image-resize-module-react';
// import { ContextUser } from '../utils/Context';
// import { useNavigate } from 'react-router-dom';

// // Register the image resize module
// Quill.register('modules/imageResize', ImageResize);

// const BlogPost = ({ close }) => {
//   const { blogPoster, blogTitle, blogDetails, blogFile, setBlogTitle, setBlogDetails, setBlogFile } = ContextUser();
//   const quillRef = useRef(null);
//   const [preview, setPreview] = useState(false);
//   const navigate = useNavigate();

//   const imgUpload = (e) => {
//     try {
//       setBlogFile(e.target.files);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handlePreview = () => {
//     setPreview(true);
//   };

//   const imageHandler = () => {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click();

//     input.onchange = () => {
//       const file = input.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//           const quill = quillRef.current.getEditor();
//           const range = quill.getSelection();
//           quill.insertEmbed(range.index, 'image', reader.result);
//         };
//         reader.readAsDataURL(file);
//       }
//     };
//   };

//   return (
//     <div className="bg-button w-full relative py-20 px-12 max-h-[580px] overflow-auto rounded-md">
//       <IoCloseSharp onClick={close} className="absolute top-8 right-10 text-white text-2xl cursor-pointer" />
//       <form className="flex flex-col gap-5" onSubmit={(e) => blogPoster(e, close)}>
//         <p className="text-white font-semibold text-center text-xl">Post Blog</p>
//         <input
//           value={blogTitle}
//           onChange={(e) => setBlogTitle(e.target.value)}
//           type="text"
//           className="px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm"
//           placeholder="Blog Title"
//         />
//         <ReactQuill
//           ref={quillRef}
//           value={blogDetails}
//           onChange={setBlogDetails}
//           className="text-black bg-white border-2 border-white rounded-md p-3 text-[12px] outline-none w-full"
//           theme="snow"
//           modules={{
//             toolbar: {
//               container: [
//                 [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                 ['bold', 'italic', 'underline'],
//                 ['link', 'image'],
//                 ['clean']
//               ],
//               handlers: {
//                 'image': imageHandler
//               }
//             },
//             imageResize: {}
//           }}
//         />
//         <div>
//           <p className="text-[12px] text-white">Blog Images</p>
//           <input onChange={imgUpload} className="text-white" type="file" multiple />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handlePreview}
//             className="bg-gray-300 w-full mr-2 rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
//           >
//             Preview Blog
//           </button>
//           <button
//             type="submit"
//             className="bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-sm font-semibold"
//           >
//             Post Blog
//           </button>
//         </div>
//       </form>

//       {preview && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white w-3/4 max-h-[80vh] p-6 rounded-lg overflow-auto">
//             <h2 className="text-2xl font-bold mb-4">{blogTitle}</h2>
//             <div dangerouslySetInnerHTML={{ __html: blogDetails }} />
//             <div className="flex flex-wrap mt-4">
//               {Array.from(blogFile).map((file, index) => (
//                 <img key={index} src={URL.createObjectURL(file)} alt={`Blog image ${index}`} className="w-full h-auto mb-4" />
//               ))}
//             </div>
//             <button
//               onClick={() => setPreview(false)}
//               className="bg-primary w-full rounded-md text-white py-3 hover:bg-white duration-200 hover:text-primary text-sm font-semibold mt-4"
//             >
//               Close Preview
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPost;


