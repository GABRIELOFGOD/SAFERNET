import Image from "@editorjs/image"
import List from "@editorjs/list"
// import Paragraph from "@editorjs/paragraph"
import Header from "@editorjs/header"
import Quote from "@editorjs/quote"
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import InlineCode from "@editorjs/inline-code"
import Marker from "@editorjs/marker"
import { uploadImage } from "../utils/general"

const uploadImageByURL = async (e) => {
  let link = new Promise((resolve, reject) => {
    try {
      resolve(e)
    } catch (error) {
      reject(error);
    }
  });
  return link.then((url) => {
    return {
      success: 1,
      file: { url }
    }
  });
}

const uploadImageByFile = async (e) => {
  return uploadImage(e).then(url => {
    if(!url) return { success: 0 }
    return {
      success: 1,
      file: { url }
    }
  });
}

export const tools = {
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByFile: uploadImageByFile,
        uploadByUrl: uploadImageByURL
      }
    }
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header',
      levels: [2, 3],
      defaultLevel: 2,
    }
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  embed: Embed,
  table: Table,
  marker: Marker,
  inlineCode: InlineCode,
}