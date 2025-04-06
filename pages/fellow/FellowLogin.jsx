import { useState } from "react"
import toast from "react-hot-toast";
import { CiLock } from "react-icons/ci"
import { MdNumbers } from "react-icons/md"
import { baseUrl, ContextUser } from "../../utils/Context";
import { useNavigate } from "react-router-dom";
import MiniLoader from "../../utils/MiniLoader";

const FellowLogin = () => {
  const [fellowId, setFellowId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { fellow, setFellow } = ContextUser();
  const navigate = useNavigate();

  const loginSend = async e => {
    e.preventDefault()
    setIsLoading(true);
    try {
      const request = await fetch(`${baseUrl}/fellow/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fellowId, password })
      });

      const response = await request.json();

      if (!request.ok) throw new Error(response.error);

      if (response.error) throw new Error(response.error);

      setFellow(response.fellow);
      const token = response.token;
      localStorage.setItem("fellow", token);
      toast.success("Login successful");
      navigate("/fellow");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  
  return (
    <div className='h-[100vh] md:w-[100vw] bg-primary flex items-center justify-center'>
      <form onSubmit={loginSend} className='bg-white px-12 py-12 rounded-md flex flex-col gap-5'>
          <div className='relative h-fit'>
              <MdNumbers className='text-primary absolute text-2xl top-2 left-2' />
              <input
                value={fellowId}
                onChange={e => setFellowId(e.target.value)}
                className='outline-none border border-primary rounded-sm px-10 py-2 text-sm text-primary font-semibold'
                type="text"
                placeholder='Fellow ID'
              />
          </div>
          <div className='relative h-fit'>
              <CiLock className='text-primary absolute text-2xl top-2 left-2' />
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='outline-none border border-primary rounded-sm px-10 py-2 text-sm text-primary font-semibold'
                type="password"
                placeholder='Password'
              />
          </div>
          <button className={` text-white hover:bg-opacity-90 duration-200 bg-primary w-full py-3 justify-center flex items-center rounded-sm text-sm`}>{isLoading ? <MiniLoader size={20} /> : "Login"}</button>
      </form>
    </div>
  )
}
export default FellowLogin