import React, { useState } from "react";
import Header from "./Header";
import { Button } from "@material-tailwind/react";

function Login() {
const [isLogin, setisLogin] = useState(false);
const[fullName, setFullName] = useState("");
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const loginHanndler = () =>{
    setisLogin(!isLogin);
}
const getInputData = (e) =>{
e.preventDefualt();
console.log(fullName,email,password)
resetFields();
}

const resetFields = () =>{
    setEmail("");
    setFullName("");
    setPassword("");
}
  return (
    <div>
      <Header />

      <div>
        <img className="w-full h-[100vh]" src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="bg-image" />
      </div>
      <form onSubmit={getInputData} className="bg-black p-12 w-3/12 my-36 left-0 right-0 mx-auto items-center justify-center absolute flex flex-col opacity-85 top-16 ">
        <h1 className="text-white text-3xl mb-5 font-bold">{isLogin?"Sign Up":"Login" }</h1>
        <div className="">
            {isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder="Full Name" className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"/> }
            
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white" />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white" />
            <Button className="bg-red-600 p-3 w-full mt-2">{isLogin?"Signup":"Login"}</Button>
        <p className="text-white mt-2">{ isLogin ? "Already have an Account":"New to Netflix?" }<span onClick={loginHanndler} className="ml-1 text-blue-900 font-medium">{isLogin?"Signup":"Login"}</span> </p>
        </div>

      </form>
    </div>
  );
}

export default Login;
