import React from "react";
import { Link, useMatch } from "react-router-dom";

const Navlink = ({ to = '', title = '', count = '' }) => {
    let match = useMatch({
        path: to
    });

    return (
        <Link to={to} className="font-head sm-text">
            <span className="text-sec mr-2 no-select">{count}.</span>
            <span className={`hover:text-sec ${match ? 'text-sec' : 'text-head '}`}>{title}</span>
        </Link>
    )
}

export const Nav = () => {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between">
                <div className="flex">
                    <Link to='/' className="focus:outline-none no-select"><p className="text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10 font-head border-2 border-sec text-sec font-bold px-2">I</p></Link>
                </div>
                <div>
                    <ul className="flex space-x-5 items-center">
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
                            <Navlink title="Contact" count="04" to="/contact" />
                        </li>
                        <li>
                            <button className="border-sec border text-sec py-2 font-head text-sm px-4 rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Resume</span></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}