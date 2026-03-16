import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogLayout = ({ title, date, readTime, image, children }) => {
    return (
        <div className="font-['Poppins'] bg-white min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Hero Banner */}
            <div className="relative w-full" style={{ minHeight: '340px' }}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.35)',
                    }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[13px] text-white/70 hover:text-[#DEDB00] transition-colors mb-6"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-white font-semibold text-[26px] md:text-[42px] leading-[1.25] max-w-[800px] tracking-tight">
                        {title}
                    </h1>
                    <div className="flex items-center gap-4 mt-5 text-white/60 text-[13px] md:text-[14px]">
                        <span>{date}</span>
                        <span className="w-1 h-1 rounded-full bg-white/40" />
                        <span>{readTime} min read</span>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <article className="w-full max-w-[780px] mx-auto px-6 md:px-8 py-12 md:py-16">
                <style>{`
                    .blog-content h2 {
                        font-size: 26px;
                        font-weight: 600;
                        color: #1a1a1a;
                        margin-top: 40px;
                        margin-bottom: 16px;
                        line-height: 1.3;
                    }
                    .blog-content h3 {
                        font-size: 20px;
                        font-weight: 600;
                        color: #218CA1;
                        margin-top: 32px;
                        margin-bottom: 12px;
                        line-height: 1.4;
                    }
                    .blog-content p {
                        font-size: 16px;
                        line-height: 1.8;
                        color: #444;
                        margin-bottom: 18px;
                    }
                    .blog-content ul, .blog-content ol {
                        margin: 16px 0;
                        padding-left: 24px;
                    }
                    .blog-content li {
                        font-size: 16px;
                        line-height: 1.8;
                        color: #444;
                        margin-bottom: 8px;
                    }
                    .blog-content ul li {
                        list-style-type: disc;
                    }
                    .blog-content ol li {
                        list-style-type: decimal;
                    }
                    .blog-content blockquote {
                        border-left: 4px solid #218CA1;
                        background: #f0f9fa;
                        padding: 16px 24px;
                        margin: 24px 0;
                        border-radius: 0 12px 12px 0;
                        font-style: italic;
                        color: #333;
                    }
                    .blog-content strong {
                        color: #1a1a1a;
                        font-weight: 600;
                    }
                    @media (max-width: 768px) {
                        .blog-content h2 { font-size: 22px; }
                        .blog-content h3 { font-size: 18px; }
                        .blog-content p, .blog-content li { font-size: 15px; }
                    }
                `}</style>
                <div className="blog-content">
                    {children}
                </div>
            </article>

            {/* CTA Section */}
            <div className="w-full bg-gradient-to-r from-[#218CA1] to-[#1a7080] py-14 md:py-20">
                <div className="max-w-[780px] mx-auto text-center px-6">
                    <h2 className="text-white font-semibold text-[24px] md:text-[32px] mb-4">
                        Ready to Transform Your Data Collection?
                    </h2>
                    <p className="text-white/80 text-[15px] md:text-[17px] mb-8 max-w-[520px] mx-auto leading-relaxed">
                        Discover how Runtime Solutions can build your ideal Survey Platform — tailored, scalable, and secure.
                    </p>
                    <a
                        href="https://www.runtime-solutions.com/contact/"
                        className="inline-block bg-[#DEDB00] text-[#1a1a1a] font-semibold text-[14px] md:text-[15px] px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
                    >
                        Request a Demo
                    </a>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BlogLayout;
