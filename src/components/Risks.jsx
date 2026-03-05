import React, { useRef, useEffect } from 'react';

// Shimmer raindrop streaks config
const shimmers = [
    { left: '5%', width: 3, height: 700, duration: 6.5, delay: -1.2, opacity: 0.15 },
    { left: '12%', width: 2, height: 500, duration: 8.2, delay: -4.8, opacity: 0.10 },
    { left: '20%', width: 4, height: 780, duration: 5.6, delay: -2.5, opacity: 0.17 },
    { left: '29%', width: 2, height: 560, duration: 9.4, delay: -7.1, opacity: 0.11 },
    { left: '38%', width: 3, height: 640, duration: 7.0, delay: -3.3, opacity: 0.14 },
    { left: '47%', width: 2, height: 500, duration: 6.2, delay: -5.9, opacity: 0.12 },
    { left: '56%', width: 4, height: 720, duration: 8.8, delay: -1.7, opacity: 0.16 },
    { left: '65%', width: 2, height: 600, duration: 5.8, delay: -6.4, opacity: 0.10 },
    { left: '74%', width: 3, height: 680, duration: 7.5, delay: -0.9, opacity: 0.13 },
    { left: '83%', width: 2, height: 520, duration: 9.0, delay: -3.8, opacity: 0.11 },
    { left: '91%', width: 3, height: 620, duration: 6.8, delay: -5.2, opacity: 0.14 },
];

const cardData = [
    {
        title: 'No Role-Based Assignment',
        description: 'Basic survey tools lack structured role assignment, making it impossible to delegate and manage survey workflows across teams.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="#218CA1" strokeWidth="1.6" />
                <path d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M16 3L20 7M20 3L16 7" stroke="#218CA1" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'No Field Agent Management',
        description: 'Without dedicated field agent tracking and assignment, managing on-ground data collection teams becomes chaotic and unaccountable.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5.5V11C4 15.42 7.56 19.58 12 21C16.44 19.58 20 15.42 20 11V5.5L12 2Z" stroke="#218CA1" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M12 8V12M12 16H12.01" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'No Data Verification',
        description: 'Missing data verification workflows mean responses go unchecked, leading to unreliable data and flawed analysis results.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="#218CA1" strokeWidth="1.6" />
                <path d="M8 12L11 15L16 9" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'No QR-Based Access',
        description: 'Without QR code–based survey access, distributing and managing survey participation at events or in the field is cumbersome.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="#218CA1" strokeWidth="1.6" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="#218CA1" strokeWidth="1.6" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="#218CA1" strokeWidth="1.6" />
                <rect x="14" y="14" width="3" height="3" fill="#218CA1" />
                <rect x="18" y="18" width="3" height="3" fill="#218CA1" />
                <rect x="14" y="18" width="3" height="3" fill="#218CA1" opacity="0.5" />
            </svg>
        ),
    },
    {
        title: 'No Offline Capability',
        description: 'Most survey tools require constant internet connectivity, making data collection in remote areas or low-network zones impossible.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9C4.6 5.4 8.1 3.6 12 3.6C15.9 3.6 19.4 5.4 23 9" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" opacity="0.3" />
                <path d="M5 13C7.4 10.6 9.6 9.6 12 9.6C14.4 9.6 16.6 10.6 19 13" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
                <circle cx="12" cy="18" r="2" fill="#218CA1" />
                <path d="M3 3L21 21" stroke="#218CA1" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'No Enterprise Control',
        description: 'Basic form tools offer no enterprise-grade control over user roles, data security, survey scheduling, or compliance requirements.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="#218CA1" strokeWidth="1.6" />
                <path d="M3 9H21" stroke="#218CA1" strokeWidth="1.6" />
                <path d="M9 9V21" stroke="#218CA1" strokeWidth="1.6" />
                <circle cx="6" cy="6" r="1.5" fill="#218CA1" />
            </svg>
        ),
    },
];

const Risks = () => {
    const cardsRef = useRef(null);

    useEffect(() => {
        const cardEls = cardsRef.current?.querySelectorAll('.risk-card');
        if (!cardEls) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cardEls.forEach((card, i) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0px)';
                            }, i * 120);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (cardsRef.current) observer.observe(cardsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                @keyframes raindrop {
                    0%   { transform: translateY(-900px); opacity: 0; }
                    30%  { opacity: 1; }
                    80%  { opacity: 1; }
                    100% { transform: translateY(130vh); opacity: 0; }
                }
            `}</style>

            <section className="w-full font-['Poppins'] bg-white flex flex-col items-center pt-20 pb-0 md:pt-28 px-5 md:px-10 lg:px-20">

                {/* Pill label */}
                <span className="inline-block text-[#218CA1] text-[11px] md:text-[13px] border border-[#218CA1] rounded-full px-3 py-[5px] mb-5 md:mb-6 tracking-wide">
                    Problems
                </span>

                {/* Shimmer wrapper */}
                <div className="relative w-full flex flex-col items-center pb-16 md:pb-24 overflow-hidden">

                    {/* Raindrop shimmer streaks */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        {shimmers.map((s, i) => (
                            <div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    left: s.left,
                                    top: 0,
                                    width: `${s.width}px`,
                                    height: `${s.height}px`,
                                    borderRadius: '999px',
                                    background: `linear-gradient(to bottom, transparent 0%, rgba(33,140,161,${s.opacity * 0.2}) 20%, rgba(33,140,161,${s.opacity}) 55%, rgba(33,140,161,${s.opacity}) 70%, transparent 100%)`,
                                    animation: `raindrop ${s.duration}s linear ${s.delay}s infinite`,
                                    willChange: 'transform, opacity',
                                }}
                            />
                        ))}
                    </div>

                    {/* Heading */}
                    <h2 className="relative text-center font-medium text-[20px] md:text-[40px] leading-[1.25] tracking-[-0.02em] text-[#2D1206] max-w-[280px] md:max-w-3xl">
                        Why Basic Survey Tools Fall Short
                    </h2>

                    {/* Subtitle */}
                    <p className="relative text-center text-[#4C4C4C] mt-4 md:mt-5 text-[20px] md:text-[20px] leading-[1.6] max-w-[300px] md:max-w-lg">
                        Organizations need structured survey management,
                        <br className="hidden md:block" />
                        not just simple forms.
                    </p>

                    {/* Cards grid — 3 columns for 6 cards */}
                    <div
                        ref={cardsRef}
                        className="relative w-full max-w-5xl mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4"
                    >
                        {cardData.map((card, i) => (
                            <div
                                key={card.title}
                                className="risk-card flex flex-col gap-4 p-4 rounded-2xl bg-white"
                                style={{
                                    border: '1px solid #DEDB00',
                                    boxShadow: '0 0 0 1px rgba(222,219,0,0.15)',
                                    opacity: 0,
                                    transform: 'translateY(32px)',
                                    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)`,
                                }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                                    {card.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-medium text-[16px] md:text-[24px] text-[#2D1206] leading-tight">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#5A5A5A] text-[12px] md:text-[16px]">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Risks;
