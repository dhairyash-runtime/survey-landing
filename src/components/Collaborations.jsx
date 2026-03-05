'use client';
import React, { useRef, useEffect } from 'react';

/* ─────────────────────────────────────────────
   BLUE STRIPED BACKGROUND
───────────────────────────────────────────── */
const BlueStripedBg = () => {
    const total = 24;
    return (
        <div
            className="absolute inset-0 z-0 flex flex-row"
            aria-hidden="true"
            style={{ backgroundColor: '#218CA1' }}
        >
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    style={{
                        flex: '1 0 0px',
                        backgroundImage: 'linear-gradient(270deg, rgba(242, 240, 238, 0.2) 0%, rgba(242, 240, 238, 0) 100%)',
                    }}
                />
            ))}
            <div
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{
                    height: '80px',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(142, 142, 142, 0.2) 40%, transparent 100%)',
                }}
            />
            <div
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                    height: '120px',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
                }}
            />
        </div>
    );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Collaborations = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        const el = ctaRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                io.unobserve(el);
            },
            { threshold: 0.15 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className="relative w-full font-['Poppins'] overflow-hidden">

            {/* Blue striped background */}
            <BlueStripedBg />

            {/* ── Deployment Options Header ── */}
            <div className="relative z-10 flex flex-col items-center px-4"
                style={{ paddingTop: '60px', paddingBottom: '40px' }}>

                <div className="mb-6 md:mb-8">
                    <span
                        className="inline-block text-white text-[13px] md:text-[14px] font-medium
                           rounded-full px-[28px] py-[9px] tracking-wide"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.35)',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                        }}
                    >
                        Deployment Options
                    </span>
                </div>

                {/* Deployment heading */}
                <h2 className="text-center font-bold text-white leading-[1.25] tracking-tight
                     text-[28px] sm:text-[36px] md:text-[42px]
                     max-w-[320px] sm:max-w-[560px] md:max-w-[760px] mb-4">
                    Flexible Deployment for<br className="hidden md:block" /> Every Organization
                </h2>

                <p className="text-center text-white/80 text-[15px] md:text-[17px] leading-[1.65] font-light
                     max-w-[300px] sm:max-w-[480px] md:max-w-[560px] mb-10 md:mb-14">
                    Choose the deployment model that fits your security, compliance, and infrastructure requirements.
                </p>

                {/* Deployment option cards */}
                <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
                    {[
                        {
                            title: 'Cloud Hosted',
                            desc: 'Fully managed cloud deployment with automatic scaling, updates, and 99.9% uptime guarantee.',
                            icon: (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.5 19C4 19 2 17 2 14.5C2 12.5 3.3 10.7 5.1 10.2C5 9.8 5 9.4 5 9C5 5.7 7.7 3 11 3C13.8 3 16.1 4.9 16.8 7.5C17.2 7.2 17.6 7 18 7C19.7 7 21 8.3 21 10C21 10.2 21 10.3 20.9 10.5C21.6 11.1 22 12 22 13C22 14.7 20.7 16 19 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M12 12V19M12 19L9 16M12 19L15 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                        },
                        {
                            title: 'On-Premise',
                            desc: 'Install on your own servers for complete data sovereignty and compliance with strict security policies.',
                            icon: (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <rect x="4" y="2" width="16" height="8" rx="2" stroke="white" strokeWidth="1.5" />
                                    <rect x="4" y="14" width="16" height="8" rx="2" stroke="white" strokeWidth="1.5" />
                                    <circle cx="8" cy="6" r="1.5" fill="white" />
                                    <circle cx="8" cy="18" r="1.5" fill="white" />
                                    <line x1="12" y1="10" x2="12" y2="14" stroke="white" strokeWidth="1.5" />
                                </svg>
                            ),
                        },
                        {
                            title: 'White-Label',
                            desc: 'Launch your own branded survey platform with custom domains, logos, and fully customizable UI.',
                            icon: (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.5" />
                                    <path d="M3 8H21" stroke="white" strokeWidth="1.5" />
                                    <circle cx="6" cy="6" r="1" fill="white" />
                                    <circle cx="9" cy="6" r="1" fill="white" />
                                    <rect x="7" y="11" width="10" height="4" rx="1" fill="white" opacity="0.3" />
                                    <line x1="3" y1="21" x2="21" y2="21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            ),
                        },
                    ].map((item) => (
                        <div key={item.title}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center gap-4 hover:bg-white/15 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-semibold text-[18px] md:text-[20px]">{item.title}</h3>
                            <p className="text-white/70 text-[13px] md:text-[14px] leading-[1.6]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CTA Card ── */}
            <div className="relative z-10 px-4 md:px-6 lg:px-8 pb-20 md:pb-28"
                style={{ marginTop: '0px' }}>
                <div
                    ref={ctaRef}
                    className="w-full max-w-[1240px] mx-auto overflow-hidden rounded-[20px] md:rounded-[36px]"
                    style={{
                        background: '#ffffff',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                        opacity: 0,
                        transform: 'translateY(36px)',
                        transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                    }}
                >
                    <div className="flex flex-col items-center text-center py-14 md:py-20 px-6 md:px-12">
                        <h2 className="text-[28px] md:text-[40px] font-bold text-[#2D1206] leading-tight mb-4">
                            Ready to Transform Your
                            <span className="block bg-gradient-to-r from-[#218CA1] to-[#DEDB00] text-transparent bg-clip-text">
                                Survey Management?
                            </span>
                        </h2>
                        <p className="text-[#4C4C4C] text-[15px] md:text-[18px] leading-[1.6] max-w-[500px] mb-8 md:mb-10">
                            Get started with our enterprise survey platform. Schedule a demo or connect with our team today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="flex items-center cursor-pointer justify-center gap-2 text-white bg-[#218CA1] hover:text-black hover:bg-[#DEDB00] px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-sm text-[16px] md:text-[18px] whitespace-nowrap">
                                Request Demo
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            <button className="text-[#a4a200] cursor-pointer bg-white border border-[#DEDB00] px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold hover:bg-[#fcfae3] transition-colors text-[16px] md:text-[18px] whitespace-nowrap">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaborations;