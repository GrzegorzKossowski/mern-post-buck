import React from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

interface PostbuckWidgetProps {}

const mernStack = [
    { icon: <SiMongodb />, letter: 'M' },
    { icon: <SiExpress />, letter: 'E' },
    { icon: <SiReact />, letter: 'R' },
    { icon: <SiNodedotjs />, letter: 'N' },
];

const PostbuckWidget = ({ ...restProps }: PostbuckWidgetProps) => {
    return (
        <div className='max-w-md'>
            <h1 className='text-4xl md:text-6xl font-semibold md:font-bold mb-4'>
                Postbuck
            </h1>
            <p className='text-xl md:text-2xl'>
                Postbuck pomaga kontaktować się z&nbsp;innymi developerami oraz
                udostępniać im różne informacje i&nbsp;materiały.
            </p>
            <div className='flex flex-row text-4xl gap-3 justify-center mt-8 text-center'>
                {mernStack.map((tech, index) => (
                    <div key={tech.letter + index}>
                        {React.cloneElement(tech.icon, {
                            className: 'border rounded-md p-1',
                        })}
                        <span>{tech.letter}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostbuckWidget;
