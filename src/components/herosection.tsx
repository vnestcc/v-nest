import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
    const textVisible = useRef(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            textVisible.current = true;
            setShowText(true);  
        }, 100);
        return () => {
            clearTimeout(textTimer);
        };
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-cover animate-mymove"
                style={{
                    backgroundImage: `url('/heroscetion2.svg')`,
                }}
            ></div>
            <div className={`flex flex-col items-start justify-center h-full bg-opacity-40 transition-opacity duration-[1000ms] ease-in-out ${
                textVisible.current ? 'opacity-100' : 'opacity-0' 
            } z-10 relative pl-40`}>
                <h1 className="text-7xl text-white fancy-text">WELCOME TO V-NEST</h1>
                {showText && (
                    <>
                        <p className="mt-4 text-4xl text-gray-300 fancy-text">VIT Chennai Startups and Research</p>
                        <p className="text-4xl text-gray-300 fancy-text">Foundation</p>
                        <p className="mt-3 text-4xl text-gray-300 fancy-text">We Nurture You to Fly High</p>
                    </>
                )}
                <button className="mt-4 px-4 py-2 h-14 w-56 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl rounded transition-colors ease-in-out duration-1000 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 fancy-text">
                    Apply Now
                </button>
            </div>
        </section>
    );
}
