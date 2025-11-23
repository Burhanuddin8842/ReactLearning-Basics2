import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import Singlechattile from "./Singlechattile";
import { Singlechatdata } from "./Singlechatdata";

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col w-full">

                <div className="grid grid-cols-10 p-0 mt-10 w-full">
                    <div className="col-span-2">
                        <div className="border rounded-s-full p-4">
                            <IoSearchSharp />
                        </div>
                    </div>
                    <input type="text" className="col-span-8 border rounded-e-full" />
                </div>


                <div className="mt-5">
                    <ul className="px-3">
                        {
                            Singlechatdata.map((items, index) => {
                                return (
                                    <li className="h-[15vh] m-0"><Singlechattile {...items} key={items.id}/></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
