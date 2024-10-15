import { createContext, useState } from 'react';
import BlogForm from './BlogForm';
import Preview from './Preview';

const blogStructure = {
  title: '',
  content: '',
  image: null
}

export const EditorContext = createContext({});

const BlogPost = ({open, close}) => {
  const [blog, setBlog] = useState(blogStructure);
  const [blogState, setBlogState] = useState("edit");
  const [textEditor, setTextEditor] = useState({ isReady: false });
  
  return (
    <EditorContext.Provider value={{blog, setBlog, blogState, setBlogState, textEditor, setTextEditor}}>
      <div className={`fixed top-0 left-0 duration-300 p-6 z-50 flex justify-center items-center bg-white bg-opacity-90 w-full h-full ${open ? "scale-100" : "scale-0"}`}>
        {blogState == "edit" ?
          <BlogForm close={close} />:
          <Preview />  
        }
      </div>
    </EditorContext.Provider>
  )
}

export default BlogPost