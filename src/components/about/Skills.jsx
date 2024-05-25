import React from 'react';

const Skills = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Figma</li>
                        <li>MySQL</li>
                        <li>Windows OS</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>Flask</li>
                        <li>MongoDB</li>
                        <li>NoSQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;