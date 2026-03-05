'use client';
import React, { useRef, useEffect } from 'react';

/* ─────────────────────────────────────────────
   SVG ILLUSTRATIONS
───────────────────────────────────────────── */

/** Card 1 – How It Works
 *  Shows: workflow steps diagram with connected nodes
 */
const IllustrationWorkflow = () => (
    <svg viewBox="0 0 520 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Step nodes */}
        <circle cx="60" cy="80" r="24" fill="#218CA1" opacity="0.15" />
        <circle cx="60" cy="80" r="16" fill="#218CA1" opacity="0.4" />
        <text x="60" y="84" fontSize="14" fill="white" fontWeight="700" textAnchor="middle">1</text>

        <circle cx="160" cy="80" r="24" fill="#218CA1" opacity="0.15" />
        <circle cx="160" cy="80" r="16" fill="#218CA1" opacity="0.5" />
        <text x="160" y="84" fontSize="14" fill="white" fontWeight="700" textAnchor="middle">2</text>

        <circle cx="260" cy="80" r="24" fill="#218CA1" opacity="0.15" />
        <circle cx="260" cy="80" r="16" fill="#218CA1" opacity="0.6" />
        <text x="260" y="84" fontSize="14" fill="white" fontWeight="700" textAnchor="middle">3</text>

        <circle cx="360" cy="80" r="24" fill="#218CA1" opacity="0.15" />
        <circle cx="360" cy="80" r="16" fill="#218CA1" opacity="0.7" />
        <text x="360" y="84" fontSize="14" fill="white" fontWeight="700" textAnchor="middle">4</text>

        <circle cx="460" cy="80" r="24" fill="#218CA1" opacity="0.15" />
        <circle cx="460" cy="80" r="16" fill="#218CA1" opacity="0.85" />
        <text x="460" y="84" fontSize="14" fill="white" fontWeight="700" textAnchor="middle">5</text>

        {/* Connecting lines */}
        <line x1="84" y1="80" x2="136" y2="80" stroke="#218CA1" strokeWidth="2" strokeDasharray="5 4" opacity="0.4" />
        <line x1="184" y1="80" x2="236" y2="80" stroke="#218CA1" strokeWidth="2" strokeDasharray="5 4" opacity="0.4" />
        <line x1="284" y1="80" x2="336" y2="80" stroke="#218CA1" strokeWidth="2" strokeDasharray="5 4" opacity="0.4" />
        <line x1="384" y1="80" x2="436" y2="80" stroke="#218CA1" strokeWidth="2" strokeDasharray="5 4" opacity="0.4" />

        {/* Step labels */}
        <text x="60" y="125" fontSize="9" fill="#333" fontWeight="600" textAnchor="middle">Create</text>
        <text x="60" y="137" fontSize="8" fill="#666" textAnchor="middle">Survey</text>
        <text x="160" y="125" fontSize="9" fill="#333" fontWeight="600" textAnchor="middle">Assign</text>
        <text x="160" y="137" fontSize="8" fill="#666" textAnchor="middle">Manager</text>
        <text x="260" y="125" fontSize="9" fill="#333" fontWeight="600" textAnchor="middle">Invite</text>
        <text x="260" y="137" fontSize="8" fill="#666" textAnchor="middle">Participants</text>
        <text x="360" y="125" fontSize="9" fill="#333" fontWeight="600" textAnchor="middle">Collect</text>
        <text x="360" y="137" fontSize="8" fill="#666" textAnchor="middle">Data</text>
        <text x="460" y="125" fontSize="9" fill="#333" fontWeight="600" textAnchor="middle">Generate</text>
        <text x="460" y="137" fontSize="8" fill="#666" textAnchor="middle">Reports</text>

        {/* Platform icons below */}
        <rect x="310" y="165" width="100" height="30" rx="6" fill="#f0f9fa" />
        <text x="360" y="184" fontSize="8" fill="#218CA1" fontWeight="600" textAnchor="middle">Web / Mobile / QR</text>

        {/* Arrow from collect to platform */}
        <path d="M360 140 L360 165" stroke="#218CA1" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
    </svg>
);

/** Card 2 – Use Cases
 *  Shows: grid of use case icons
 */
const IllustrationUseCases = () => (
    <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Grid of use case cards */}
        <rect x="30" y="30" width="120" height="70" rx="10" fill="#f0f9fa" stroke="#218CA1" strokeWidth="1" opacity="0.6" />
        <text x="90" y="60" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Employee</text>
        <text x="90" y="72" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Feedback</text>
        <circle cx="90" cy="88" r="3" fill="#DEDB00" />

        <rect x="170" y="30" width="120" height="70" rx="10" fill="#f0f9fa" stroke="#218CA1" strokeWidth="1" opacity="0.6" />
        <text x="230" y="60" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Market</text>
        <text x="230" y="72" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Research</text>
        <circle cx="230" cy="88" r="3" fill="#DEDB00" />

        <rect x="310" y="30" width="120" height="70" rx="10" fill="#f0f9fa" stroke="#218CA1" strokeWidth="1" opacity="0.6" />
        <text x="370" y="60" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Healthcare</text>
        <text x="370" y="72" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Data Collection</text>
        <circle cx="370" cy="88" r="3" fill="#DEDB00" />

        <rect x="30" y="120" width="120" height="70" rx="10" fill="#f0f9fa" stroke="#218CA1" strokeWidth="1" opacity="0.6" />
        <text x="90" y="150" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Academic</text>
        <text x="90" y="162" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Evaluations</text>
        <circle cx="90" cy="178" r="3" fill="#DEDB00" />

        <rect x="170" y="120" width="120" height="70" rx="10" fill="#f0f9fa" stroke="#218CA1" strokeWidth="1" opacity="0.6" />
        <text x="230" y="150" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Public Opinion</text>
        <text x="230" y="162" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Surveys</text>
        <circle cx="230" cy="178" r="3" fill="#DEDB00" />

        <rect x="310" y="120" width="120" height="70" rx="10" fill="#f0f9fa" stroke="#218CA1" strokeWidth="1" opacity="0.6" />
        <text x="370" y="150" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Field Research</text>
        <text x="370" y="162" fontSize="9" fill="#218CA1" fontWeight="600" textAnchor="middle">Campaigns</text>
        <circle cx="370" cy="178" r="3" fill="#DEDB00" />
    </svg>
);

/** Card 3 – Cloud Hosted (small card) */
const IllustrationCloud = () => (
    <svg viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Cloud shape */}
        <path d="M35 85 Q20 85 15 72 Q10 60 22 52 Q23 36 42 33 Q50 22 65 26 Q78 18 88 28 Q102 24 108 40 Q120 48 114 62 Q122 76 108 82 Q106 88 95 88 Z"
            fill="#218CA1" opacity="0.15" />
        <path d="M42 80 Q30 80 26 70 Q22 60 32 54 Q33 42 48 39 Q54 30 66 34 Q76 28 84 36 Q95 33 100 46 Q108 52 104 64 Q110 74 100 78 Q99 82 90 82 Z"
            fill="#218CA1" opacity="0.35" />
        {/* Upload arrow */}
        <path d="M62 55 L70 46 L78 55" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="70" y1="46" x2="70" y2="70" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        {/* Label */}
        <text x="70" y="115" fontSize="10" fill="#218CA1" fontWeight="600" textAnchor="middle">Cloud Hosted</text>
    </svg>
);

/** Card 4 – On-Premise (small card) */
const IllustrationOnPremise = () => (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Server rack */}
        <rect x="30" y="15" width="70" height="80" rx="8" fill="#1e293b" />
        <rect x="36" y="22" width="58" height="18" rx="4" fill="#0f172a" />
        <rect x="36" y="46" width="58" height="18" rx="4" fill="#0f172a" />
        <rect x="36" y="70" width="58" height="18" rx="4" fill="#0f172a" />
        {/* Status lights */}
        <circle cx="44" cy="31" r="3" fill="#22c55e" />
        <circle cx="54" cy="31" r="3" fill="#22c55e" opacity="0.5" />
        <circle cx="44" cy="55" r="3" fill="#218CA1" />
        <circle cx="54" cy="55" r="3" fill="#218CA1" opacity="0.5" />
        <circle cx="44" cy="79" r="3" fill="#DEDB00" />
        <circle cx="54" cy="79" r="3" fill="#DEDB00" opacity="0.5" />
        {/* Lines on panels */}
        <rect x="65" y="28" width="22" height="3" rx="1.5" fill="#334155" />
        <rect x="65" y="52" width="22" height="3" rx="1.5" fill="#334155" />
        <rect x="65" y="76" width="22" height="3" rx="1.5" fill="#334155" />
        {/* Label */}
        <text x="65" y="115" fontSize="10" fill="#218CA1" fontWeight="600" textAnchor="middle">On-Premise</text>
    </svg>
);

/** Card 5 – White-Label (small card) */
const IllustrationWhiteLabel = () => (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Browser window */}
        <rect x="15" y="15" width="100" height="75" rx="8" fill="#1e293b" />
        <rect x="15" y="15" width="100" height="18" rx="8" fill="#0f172a" />
        {/* Traffic dots */}
        <circle cx="28" cy="24" r="3.5" fill="#ef4444" />
        <circle cx="38" cy="24" r="3.5" fill="#f59e0b" />
        <circle cx="48" cy="24" r="3.5" fill="#22c55e" />
        {/* Content placeholders */}
        <rect x="25" y="40" width="40" height="5" rx="2.5" fill="#218CA1" opacity="0.6" />
        <rect x="25" y="50" width="60" height="4" rx="2" fill="#334155" />
        <rect x="25" y="58" width="50" height="4" rx="2" fill="#334155" />
        <rect x="25" y="66" width="55" height="4" rx="2" fill="#334155" />
        {/* Brand tag */}
        <rect x="75" y="42" width="30" height="14" rx="7" fill="#218CA1" opacity="0.2" />
        <text x="90" y="52" fontSize="7" fill="#218CA1" fontWeight="600" textAnchor="middle">Brand</text>
        {/* Label */}
        <text x="65" y="115" fontSize="10" fill="#218CA1" fontWeight="600" textAnchor="middle">White-Label</text>
    </svg>
);

const StripedBg = () => {
    const total = 24;
    return (
        <div
            className="absolute inset-0 z-0 flex flex-row"
            aria-hidden="true"
            style={{ backgroundColor: '#BAB70B' }}
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
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                    height: '200px',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
                }}
            />
        </div>
    );
};

/* ─────────────────────────────────────────────
   CARD DATA
───────────────────────────────────────────── */
const LARGE_CARDS = [
    {
        id: 'how-it-works',
        title: 'How It Works',
        description:
            'A streamlined 6-step workflow: Admin creates survey → Manager assigned → Participants invited → Data collected via Web/Mobile/QR → Responses reviewed → Reports generated.',
        Illustration: IllustrationWorkflow,
    },
    {
        id: 'use-cases',
        title: 'Use Cases',
        description:
            'Deploy across industries — employee feedback surveys, market research, healthcare data collection, academic evaluations, public opinion surveys, and field research campaigns.',
        Illustration: IllustrationUseCases,
    },
];

const SMALL_CARDS = [
    {
        id: 'cloud-hosted',
        title: 'Cloud Hosted',
        description:
            'Deploy on secure, scalable cloud infrastructure with automatic updates, backups, and high availability — zero server maintenance required.',
        Illustration: IllustrationCloud,
    },
    {
        id: 'on-premise',
        title: 'On-Premise Deployment',
        description:
            'Install on your own servers for complete data sovereignty, compliance with strict security policies, and full control over your infrastructure.',
        Illustration: IllustrationOnPremise,
    },
    {
        id: 'white-label',
        title: 'White-Label Branding',
        description:
            'Launch your own branded survey platform with fully customizable UI, logos, domains, and admin dashboards — no code changes needed.',
        Illustration: IllustrationWhiteLabel,
    },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Benefits = () => {
    const cardRefs = useRef([]);

    /* Staggered slide-up reveal on scroll */
    useEffect(() => {
        const els = cardRefs.current.filter(Boolean);
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const idx = els.indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, idx * 110);
                    io.unobserve(entry.target);
                });
            },
            { threshold: 0.1 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const cardBase = {
        opacity: 0,
        transform: 'translateY(36px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
    };

    return (
        <section className="relative w-full overflow-hidden font-['Poppins']">

            {/* ── striped orange background ── */}
            <StripedBg />

            {/* ── content ── */}
            <div className="relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-16 pt-14 md:pt-24 pb-0">

                {/* ── "Benefit" pill ── */}
                <div className="mb-7 md:mb-10">
                    <span
                        className="inline-block bg-white text-[#218CA1] text-[13px] md:text-[14px] font-semibold
                       rounded-full px-[22px] py-[6px] tracking-wide"
                    >
                        Solution Overview
                    </span>
                </div>

                {/* ── heading ── */}
                <h2
                    className="text-center font-bold text-white leading-[1.25] tracking-tight
                     text-[34px] sm:text-[40px] md:text-[46px]
                     max-w-[320px] sm:max-w-[560px] md:max-w-[760px]"
                >
                    Complete Survey Lifecycle<br className="hidden md:block" /> Management Solution
                </h2>

                {/* ── subtitle ── */}
                <p
                    className="text-center text-white mt-4 md:mt-6
                     text-[15px] md:text-[17px] leading-[1.65] font-light
                     max-w-[300px] sm:max-w-[480px] md:max-w-[620px]"
                >
                    Built for corporate, institutional, and government use cases —
                    from survey creation to data analysis.
                </p>

                {/* ── card grid ── */}
                <div className="w-full max-w-[1140px] mt-12 md:mt-20">

                    {/* top row – 2 large cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mb-5 md:mb-7">
                        {LARGE_CARDS.map(({ id, title, description, Illustration }, i) => (
                            <div
                                key={id}
                                ref={(el) => (cardRefs.current[i] = el)}
                                style={cardBase}
                                className="bg-white rounded-[24px] md:rounded-[32px] flex flex-col overflow-hidden
                           shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                            >
                                {/* text block */}
                                <div className="p-8 md:p-10 pb-4 md:pb-6">
                                    <h3 className="font-semibold text-[#1a1a1a] text-[19px] md:text-[24px] leading-snug mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-[#555] text-[13.5px] md:text-[15px] leading-[1.7] max-w-[420px]">
                                        {description}
                                    </p>
                                </div>
                                {/* illustration block */}
                                <div className="flex-1 flex items-end justify-center px-4 md:px-8 pb-0" style={{ minHeight: 240 }}>
                                    <div className="w-full" style={{ height: 240 }}>
                                        <Illustration />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* bottom row – 3 small cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 pb-16 md:pb-32">
                        {SMALL_CARDS.map(({ id, title, description, Illustration }, i) => (
                            <div
                                key={id}
                                ref={(el) => (cardRefs.current[i + LARGE_CARDS.length] = el)}
                                style={cardBase}
                                className="bg-white rounded-[24px] md:rounded-[32px] flex flex-col overflow-hidden
                           shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                            >
                                {/* illustration */}
                                <div className="flex items-center justify-center pt-8 md:pt-12 px-4" style={{ minHeight: 160 }}>
                                    <div style={{ width: 140, height: 140 }}>
                                        <Illustration />
                                    </div>
                                </div>
                                {/* text block */}
                                <div className="flex-1 p-6 md:p-8 pt-4 md:pt-6">
                                    <h3 className="font-bold text-[#1a1a1a] text-[18px] md:text-[22px] leading-snug mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.65]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
