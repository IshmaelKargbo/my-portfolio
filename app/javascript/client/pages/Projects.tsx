import React from "react"
import { Link } from "react-router-dom";
import { Layout, Title } from "../components/Layout";

const Project = ({ index }) => {
    const direction = index % 2 === 1 ? 'Right' : 'Left';

    return (
        <div className={`flex items-center ${direction === 'Right' ? 'flex-row-reverse' : ''} mb-32`}>
            <div className="w-1/2">
                <div className={`${direction === 'Right' ? '-ml-10' : '-mr-10'}`}>
                    <h6 className={`text-sec font-head xs-text mb-2 ${direction === 'Right' ? 'text-right' : ''}`}>Production Project</h6>
                    <h1 className={`text-3xl text-head mb-4 font-semibold ${direction === 'Right' ? 'text-right' : ''}`}>Halcyon Theme</h1>
                    <p className={`bg-prim shadow-p p-5 rounded-md mb-5 ${direction === 'Right' ? 'text-right' : ''}`}>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
                        Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.</p>
                    <ul className={`flex space-x-5 ${direction === 'Right' ? 'justify-end' : 'justify-start'}`}>
                        <li className="sm-text font-head">React</li>
                        <li className="sm-text font-head">Express</li>
                        <li className="sm-text font-head">Spotify API</li>
                        <li className="sm-text font-head">Styled Components</li>
                    </ul>
                </div>
            </div>
            <div className="w-1/2 -z-10">
                <img className="shadow-p rounded-md" src="https://mobirise.com/assets52/images/poster.webp" />
            </div>
        </div>
    )
}

export const Projects = () => {
    return (
        <Layout>
            <div className=" mt-48">
                <div className="48">
                    <Title title='Some Things I’ve Built' count='02' />
                    <div className="mt-16">
                        {
                            [1, 2, 3].map((project, key) => (
                                <Project index={key} key={key} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className="text-head text-center text-3xl font-semibold mb-1">Other Noteworthy Projects</h1>
                    <Link className="text-center" to="/"><p className="text-sec sm-text font-head">view the archive</p></Link>
                    <div className="mt-10">
                        projects
                    </div>
                </div>
            </div>
        </Layout>
    );
}