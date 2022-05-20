import React from "react";
import {FiGithub, FiInstagram, FiLinkedin, FiTwitter} from "react-icons/fi";
import { Link } from "react-router-dom";

export const Connect = () => {

    return (
        <div className="h-full w-10">
            <div className="flex absolute bottom-0 flex-col items-center">
                <ul className="mb-10">
                    <li className="mb-10 align-middle hover:text-sec"><Link to='/https://github.com/ishmaelkargbo' target='_blank'><FiGithub /></Link></li>
                    <li className="mb-10 align-middle hover:text-sec"><Link to='/https://twitter.com/ishodev' target='_blank'><FiInstagram /></Link></li>
                    <li className="mb-10 align-middle hover:text-sec"><Link to='/https://twitter.com/ishodev' target='_blank'><FiTwitter /></Link></li>
                    <li className="hover:text-sec"><Link to='https://www.linkedin.com/in/ishmael-kargbo-503660169' target='_blank'><FiLinkedin /></Link></li>
                </ul>
                <div className="border-l h-20 border-alt"></div>
            </div>
        </div>
    );
}

export const Email = () => {

    return (
        <div className="h-full w-10">
            <div className="flex absolute bottom-0 flex-col items-center">
                <a className="font-head xs-text text-v text-space mb-10 hover:text-sec" href="mailto:ishmaelkargbo5@outlook.com?subject=Get in touch">ishmaelkargbo5@outlook.com</a>
                <div className="border-l h-20 border-alt"></div>
            </div>
        </div>
    );
}