/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./Btn12.css"

function Btn12() {
    const spanMotherRef = useRef(null);
    const spanMother2Ref = useRef(null);

    useEffect(() => {
        gsap.set(spanMotherRef.current.children, { y: '0%', opacity: 1 });
        gsap.set(spanMother2Ref.current.children, { y: '-100%', opacity: 0 });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(spanMotherRef.current.children, {
            y: '100%',
            opacity: 0,
            stagger: 0.03,
            duration: 0.3,
            ease: 'power2.inOut',
        });

        gsap.to(spanMother2Ref.current.children, {
            y: '0%',
            opacity: 1,
            stagger: 0.03,
            duration: 0.3,
            ease: 'power2.inOut',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(spanMotherRef.current.children, {
            y: '0%',
            opacity: 1,
            stagger: 0.03,
            duration: 0.3,
            ease: 'power2.inOut',
        });

        gsap.to(spanMother2Ref.current.children, {
            y: '-100%',
            opacity: 0,
            stagger: 0.03,
            duration: 0.3,
            ease: 'power2.inOut',
        });
    };

    return (
        <button
            className="relative w-[15vw] h-[10vh] bg-[bisque] font-medium text-[24px] rounded-2xl flex justify-center items-center overflow-hidden border-[black] border-2"
            id='Btn12'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <span className="absolute flex overflow-hidden" ref={spanMotherRef}>
                    {['B', 'U', 'T', 'T', 'O', 'N', ' ', '1', '2'].map((letter, index) => (
                        <span key={index} className="mx-[1px] text-black">
                            {letter}
                        </span>
                    ))}
                </span>

                <span className="absolute flex overflow-hidden" ref={spanMother2Ref}>
                    {['B', 'U', 'T', 'T', 'O', 'N', ' ', '1', '2'].map((letter, index) => (
                        <span key={index} className="mx-[1px] text-black">
                            {letter}
                        </span>
                    ))}
                </span>
            </div>
        </button>
    );
}

export default Btn12;
