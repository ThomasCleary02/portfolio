import React from 'react';

const Education = () => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <div className="flex justify-between">
                <p className="mr-auto ">
                    <span className="font-bold">Bachelor of Science in Computer/Info Tech</span><br />
                    Shepherd University<br />
                    <br />
                    <span className="font-bold">Early College Access Program</span><br />
                    Hagerstown Community College
                </p>
                <p className="text-right">                        
                    <span className="font-bold">Expected: May 2025</span><br />
                    Shepherdstown, WV<br />
                    <br />
                    <span className="font-bold">Sep 2018 - May 2020</span><br />
                    Hagerstown, MD
                </p>
            </div>
        </div>
    );
};

export default Education;