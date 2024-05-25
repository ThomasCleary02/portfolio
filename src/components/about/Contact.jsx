import React from 'react'

const Contact = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <div className="grid grid-cols-2 mb-4 mt-4">
                <div>
                    <a className="hover:text-blue-700 hover:font-bold mb-4" href="mailto:thomcleary15@gmail.com">thomcleary15@gmail.com</a>
                </div>
                <div className="hover:text-blue-700 hover:font-bold">
                    <a className="hover:text-blue-700 hover:font-bold" href="tel:3018002523">(301) 800-2523</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;