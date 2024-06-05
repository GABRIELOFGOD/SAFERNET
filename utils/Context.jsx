import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
// import { blog } from "./Constants";

const Context = createContext(null);
// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://safernet-v1.vercel.app'
// const baseUrl = 'https://api.thesafernet.org'


export const CreateUserContext = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [event, setEvent] = useState(null)
    const [reportLoading, setReportLoading] = useState(false)

    const [file, setFile] = useState();
    const [report, setReport] = useState('');
    const [title, setTitle] = useState('');
    const [information, setInformation] = useState('');
    const [url, setUrl] = useState('');

    // ==================== FOR BLOG ================== //
    const [blogFile, setBlogFile] = useState()
    const [blogTitle, setBlogTitle] = useState('')
    const [blogDetails, setBlogDetails] = useState('');
    const [blogs, setBlogs] = useState(null);
    const [blog, setBlog] = useState(null)

    const [editTitle, setEditTitle] = useState('')
    const [editDetails, setEditDetails] = useState('')
    const [editFile, setEditFile] = useState()

    // ============== FOR CAMPAIGN ==================== //
    const [campaignTitle, setCampaignTitle] = useState('');
    const [campaignAbout, setCampaignAbout] = useState('');
    const [campaignImg, setCampaignImg] = useState();

    const [singleCampaign, setSingleCampaign] = useState(null)

    const [campaigns, setCampaign] = useState(null)

    const [username, setUsername] = useState(null)

    const [news, setNews] = useState(null) // TODO

    const [publication, setPublication] = useState(null) // TODO

    const [deleteLoad, setDeleteLoad] = useState(false)

    // ====================== WORKING ON ADMIN ============================ //
    const adminGetter = async () => {
        const res = await fetch(`${baseUrl}/admin/getter`, {credentials: 'include'})
        const response = await res.json();
        if(!res.ok){
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            console.log(response)
            if(!username) location.assign('/admin/login')
        }

        if(res.ok){
            setUsername(response.user)
        }
    }

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
            setUsername(response.user)
            location.assign('/dashboard/blog')
            console.log(username)
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

    const blogPoster = async (e, close) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('image', blogFile);
        formData.append('title', blogTitle);
        formData.append('body', blogDetails);

        const res = await fetch(`${baseUrl}/blog/post`, {
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
            console.log(response)
        }

        if(res.ok){
            toast.success(response.message, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            close();
            location.reload()
        }
    }

    const singleBlog = async id => {
        const res = await fetch(`${baseUrl}/blog/get/${id}`, {credentials: 'include'})
        const response = await res.json();
        if(!res.ok){
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            console.log(response)
        }
        if(res.ok){
            setBlog(response)
            console.log(response)
        }
    }

    const editBlog = async (e, id, close) => {
        const formData = new FormData();
        formData.append('title', editTitle)
        formData.append('body', editDetails)
        formData.append('image', editFile)
        e.preventDefault();
        const res = await fetch(`${baseUrl}/blog/get/${id}`, {
            method: 'PUT',
            body: formData,
            credentials: 'include'
        })
        const response = res.json();
        if(!res.ok){
            toast.error('blog update failed', {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
        }

        if(res.ok){
            toast.success('Blog updated successfully', {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '700'
            })
            close()
            location.reload();

        }
    }

    const blogDeleter = async (id, close) => {
        setDeleteLoad(true)
        const res = await fetch(`${baseUrl}/blog/get/${id}`, {
            method: 'DELETE',
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
                duration: '700'
            })
            close();
            location.reload();
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

    // ================================ WORKING ON REPORT ================================= //

    const makeReport = async (e) => {
        e.preventDefault();
        setReportLoading(true)
        let formData = new FormData();
        formData.append('url', url);
        formData.append('report', report);
        formData.append('title', title);
        formData.append('information', information);
        formData.append('file', file);

        if(report == 'no' || report == null || report == ''){
            toast.error('Please choose a report', {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            setReportLoading(false)
        } else {
            
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
                setReportLoading(false)
            }

            if(res.ok){
                toast.success(response.message, {
                    position: 'top-right',
                    className: 'text-[12px]',
                    duration: '500'
                })
                setFile('')
                setReport('no')
                setTitle('')
                setInformation('')
                setUrl('')
                setReportLoading(false)
                console.log(response)
            }
        }

    }

    // ===================================== CAMPAIGN APIs ==================================== //

    const campaignPoster = async (e, close) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('title', campaignTitle);
        formData.append('about', campaignAbout);
        formData.append('file', campaignImg);

        const res = await fetch(`${baseUrl}/campaign/post`, {
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
            console.log(response)
        }

        if(res.ok){
            toast.success(response.message, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
            setCampaignTitle('');
            setCampaignAbout('');
            close();
        }

        // const formData = new FormData();
        // formData.append('title', campaignTitle);
        // formData.append('body', campaignAbout);
        // formData.append('file', campaignImg);
        
        // const res = await fetch(`${baseUrl}/campaign/post`, {
        //     method: 'POST',
        //     body: formData,
        //     credentials: 'include'
        // })

        // const response = await res.json();
        // if(!res.ok){
        //     toast.error(response.error, {
        //         position: 'top-right',
        //         className: 'text-[12px]',
        //         duration: '500'
        //     })
        //     console.log(response)
        // }

        // if(res.ok){
        //     toast.success(response.message, {
        //         position: 'top-right',
        //         className: 'text-[12px]',
        //         duration: '500'
        //     })
        //     setCampaignTitle('');
        //     setCampaignAbout('');
        //     close();
        // }
    }

    const campaignGetter = async () => {
        const res = await fetch(`${baseUrl}/campaign/get`, {credentials: 'include'})
        const response = await res.json();
        if(!res.ok){
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
        }

        if(res.ok){
            setCampaign(response.allCampaign)
            console.log(response.allCampaign)
        }
    }

    const getSingleCampaign = async (id) => {
        const res = await  fetch(`${baseUrl}/campaign/get/${id}`)
        const response = await res.json()
        if(!res.ok){
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '500'
            })
        }

        if(res.ok){
            setSingleCampaign(response.data)
        }
    }

    // ========================== NEWSLETTER ====================================== //
    const newsletterSubscribe = async email => {
        const res = await fetch(`${baseUrl}/newsletter/subscribe`, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Content-Type':'application/json'
            },
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
                file,
                setReport,
                report,
                setTitle,
                title,
                setInformation,
                information,
                setUrl,
                url,
                reportLoading,
                campaignGetter,
                campaigns,
                adminGetter,
                username,
                campaignPoster,
                campaignTitle,
                campaignAbout,
                setCampaignAbout,
                setCampaignTitle,
                setCampaignImg,
                news,
                publication,
                blogPoster,
                blogDetails,
                setBlogFile,
                blogTitle,
                setBlogTitle,
                setBlogDetails,
                blog,
                singleBlog,
                editBlog,
                editDetails,
                editFile,
                editTitle,
                setEditFile,
                setEditDetails,
                setEditTitle,
                deleteLoad,
                blogDeleter,
                getSingleCampaign, singleCampaign
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