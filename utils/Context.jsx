import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
// import { blog } from "./Constants";

const Context = createContext(null);
const baseUrl = 'http://localhost:3000'

export const CreateUserContext = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [blogs, setBlogs] = useState(null)
    const [event, setEvent] = useState(null)

    const [file, setFile] = useState();
    const [report, setReport] = useState('');
    const [title, setTitle] = useState('');
    const [information, setInformation] = useState('');
    const [url, setUrl] = useState('');

    const adminLogin = async (e, email, password) => {
        e.preventDefault();
        const res = await fetch(`${baseUrl}/admin/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        const response = await res.json()

        if(!res.ok){
            setIsLoading(true);
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            console.log('response', response)
        }

        if(res.ok){
            location.assign('/')
        }
    }

    // ======================== BLOGS ========================== //

    const viewBlog = async () => {
        const res = await fetch(`${baseUrl}/blog/get`)
        const response = await res.json()
        if(!res.ok) {
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            console.log(response)
        }
        if(res.ok){
            setBlogs(response)
        }
    }

    // ============================ EVENTS ============================ //

    const viewEvents = async () => {
        const res = await fetch(`${baseUrl}/event/get`)
        const response = await res.json()
        if(!res.ok) {
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            console.log(response)
        }
        if(res.ok){
            setEvent(response)
        }
    }

    const makeReport = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('url', url);
        formData.append('report', report);
        formData.append('title', title);
        formData.append('information', information);
        formData.append('file', file);

        if(report == 'no' || report == null || report == ''){
            return (
                toast.error(response.error, {
                    position: 'top-right',
                    className: 'text-[12px]',
                    duration: '500'
                })
            )
        }

        const res = await fetch(`${baseUrl}/report/post`, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })

        const response = await res.json();

        if(!res.ok){
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
        }

        if(res.ok){
            toast.success(response.message, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
        }
    }

    return (
        <Context.Provider
            value={{
                adminLogin,
                viewBlog,
                blogs,
                viewEvents,
                event,
                makeReport,
                setFile,
                setReport,
                setTitle,
                setInformation,
                setUrl
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const ContextUser = () => {
    const context = useContext(Context)
    return context;
}