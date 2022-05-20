import React from "react"
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
const Image = require('../images/me.jpeg');

const Tech = ({ name }) => {
    return (
        <Link to='#'>
            <div className="flex space-x-2 items-center">
                <FiPlay className="xs-text text-sec" />
                <p className="sm-text font-head">{name}</p>
            </div>
        </Link>
    )
}

export const About = () => {
    const techs = ["JavaScript (ES6+)", "TypeScript", "React", "Vue", "Node.js", "Ruby", "Rails", "Python"];

    return (
        <Layout>
            <div className="flex">
                <div className="w-3/5">
                    <div className="flex items-center mb-10">
                        <div className="w-96 flex space-x-2">
                            <p className="text-xl font-head text-sec no-select">01.</p>
                            <p className="text-3xl font-semibold text-head">About Me</p>
                        </div>
                        <div className="border-t h-1 w-full border-gray-700"></div>
                    </div>
                    <p className="mb-5">Hello! My name is Ishmael and I enjoy creating things that live on the internet. My interest in development started back in 2016 when I was curious about games and decided to enroll for a software development course.</p>
                    <p className="mb-5">Fast-forward to today, and I’ve had the privilege of working at a tech start-up, a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                    <p className="mb-5">Here are a few technologies I’ve been working with recently:</p>
                    <div className="flex flex-wrap">
                        {
                            techs.map((tech) => (
                                <div className="w-1/2 mb-2">
                                    <Tech name={tech} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-2/5 p-10 pt-20 pl-20">
                    <div className="relative">
                        <div className="w-full h-full -z-10 absolute border-2 border-alt rounded-md top-4 left-4">
                        </div>
                        <div className="w-full">
                            <img src={Image} alt="me" className="rounded-md block" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}