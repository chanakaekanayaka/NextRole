import { Outlet } from "react-router-dom"


const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden items-center flex justify-center relative ">
        <img src="/assets/img/login.png" className="w-full absolute h-full object-cover opacity-30"></img>
     <Outlet/>  
     
    </div>
  )
}

export default AuthenticationLayout
