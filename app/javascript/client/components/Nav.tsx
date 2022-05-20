import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ to = '', title = '', count = '' }) => {
    return (
        <Link to={to} className="font-head sm-text">
            <span className="text-sec mr-2">{count}.</span>
            <span className="text-head hover:text-sec">{title}</span>
        </Link>
    )
}

export const Nav = () => {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between">
                <div className="flex">
                    <Link to='/'><p className="text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10 font-head border-2 border-sec text-sec font-bold px-2">I</p></Link>
                </div>
                <div>
                    <ul className="flex space-x-5">
                        <li>
                            <Navlink title="About" count="01" to="/about" />
                        </li>
                        <li>
                            <Navlink title="Experience" count="02" to="/jobs" />
                        </li>
                        <li>
                            <Navlink title="Work" count="03" to="/projects" />
                        </li>
                        <li>
                            <Navlink title="Contact" count="04" to="/conatact" />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}