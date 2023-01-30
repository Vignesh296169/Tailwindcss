import React,{useState} from "react";
import Button from "../Button";
import { GoBroadcast, GoGrabber } from "react-icons/go";
function Nav() {
  const [init,setinit]=useState(false)
  const items = [{ title: "Home" }, { title: "Login" }, { title: "About" }];
  const response = items.map((item, index) => (
    <li className="hover:text-indigo-200" key={index}>
      {item.title}
    </li>
  ));
  return (
    <div className=" drop-shadow-md relative  ">
      <div className="flex justify-between py-2 px-2 transition-all ease-in">
        <div className="m-0 flex items-center sm:px-4 sm:text-2xl text-xl cursor-pointer">
          <span className="mr-1">
         
            <GoBroadcast />
          </span>
          Brand
        </div>
        <GoGrabber className="text-3xl md:hidden" onClick={()=>setinit(!init)} />
        <ul className={`px-2   md:opacity opacity-4 md:mr-4 md:mt-2 mt-10 md:static absolute md:flex gap-3 md:bg-inherit  md:w-auto bg-slate-100 w-full md:leading-none leading-9 left-0 md:drop-shadow-none drop-shadow-md md:duration-75 duration-500 ease-in md:z-40 z-[-30] ${init ? "top-3":"top-[-400px]"}`}>
          <a href="#sfdvgsdf" className="md:flex gap-4 ">
            {" "}
            {response}
          </a>
          <Button />
        </ul>
      </div>
    </div>
  );
}

export default Nav;
