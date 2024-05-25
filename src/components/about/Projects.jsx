import React from 'react';

const Projects = () => {
    return (
        <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Projects</h3>

                <div className="flex justify-between">
                    <p className="mr-auto">
                    <span className="font-bold">Capstone Research Project</span><br />
                    Shepherd University
                    </p>
                    <p className="text-right">
                    <span className="font-bold">Shepherdstown, WV</span><br />
                    Jan 2024 - Apr 2024
                    </p>
                </div>
                <ul className="list-disc list-inside">
                    <li>Led the deployment of a database for a web application prototype showcasing products from Amazon.</li>
                    <li>Engineered a Python web scraper for efficient data collection from Amazon, optimizing the prototype's content accuracy.</li>
                    <li>Collaborated through GitHub in a MERN stack project to develop a responsive, visually appealing prototype website.</li>                    <li>Documented development processes and research findings, enhancing the project's academic value and future adaptability.</li>
                </ul>
                
                <div className="mt-9 flex justify-between">
                    <p className="mr-auto">
                        <span className="font-bold">SRA International Career Center</span><br />
                        Lion Flower, LLC
                    </p>
                    <p className="text-right">
                        <span className="font-bold">Hagerstown, MD</span><br />
                        May 2019 - Aug 2019
                    </p>
                </div>
                <ul className="list-disc list-inside">
                    <li>Contributed to the current version of the SRA International Careers site and coordinated with UI/UX Lead in developing front-end interface using Angular.</li>
                    <li>Worked with Angular, TypeScript, HTML, CSS, and Bootstrap.</li>
                    <li><a className="text-blue hover:text-blue-700 hover:font-bold" href="https://careercenter.srainternational.org/index.php ">https://careercenter.srainternational.org/index.php</a></li>
                </ul>

            </div>
    );
};

export default Projects;