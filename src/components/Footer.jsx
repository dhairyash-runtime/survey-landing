'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const iconStyles = "w-10 h-10 flex items-center justify-center rounded-full border border-[#DEDB00] hover:bg-[#218CA1] hover:border-[#218CA1] hover:text-white transition-all text-[#218CA1]";

    return (
        <footer className="w-full font-['Poppins'] bg-[#f0f9fa] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section: Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 mb-12">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Quick Links</h4>
                        <ul className="flex flex-col space-y-4">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1 cursor-pointer">Home</a></li>
                            <li><a href="#features" onClick={(e) => { e.preventDefault(); const el = document.getElementById('features'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({ top, behavior: 'smooth' }); } }} className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1 cursor-pointer">Features</a></li>
                            <li><a href="#benefits" onClick={(e) => { e.preventDefault(); const el = document.getElementById('benefits'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({ top, behavior: 'smooth' }); } }} className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1 cursor-pointer">Benefits</a></li>
                            <li><a href="#collaborations" onClick={(e) => { e.preventDefault(); const el = document.getElementById('collaborations'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({ top, behavior: 'smooth' }); } }} className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1 cursor-pointer">Collaborations</a></li>
                            <li><a href="#blogs" onClick={(e) => { e.preventDefault(); const el = document.getElementById('blogs'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({ top, behavior: 'smooth' }); } }} className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1 cursor-pointer">Blog</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Company</h4>
                        <ul className="flex flex-col space-y-4">
                            <li><Link href="https://www.runtime-solutions.com/about/" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">About Us</Link></li>
                            <li><Link href="https://www.runtime-solutions.com/innovations/" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Innovation</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Contact</h4>
                        <ul className="flex flex-col space-y-4">
                            <li><Link href="https://www.runtime-solutions.com/contact/" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">Contact & Location</Link></li>
                            {/* <li><a href="tel:+918310972324" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">+91 83109 72324</a></li> */}
                            <li><a href="mailto:info@runtimesolutions.com" className="text-black hover:text-[#218CA1] transition-colors underline decoration-[#218CA1]/30 underline-offset-4 decoration-1">info@runtimesolutions.com</a></li>
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h4 className="text-[#218CA1] text-[18px] font-semibold mb-6">Stay Connected</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/runtime-solutions/" className={iconStyles} aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/RuntimeSolutions" className={iconStyles} aria-label="Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/user/runtimesolutionz" className={iconStyles} aria-label="YouTube">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/runtime_solutions/" className={iconStyles} aria-label="Instagram">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#DEDB00] opacity-30 my-10"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                    <div className="flex flex-col items-start mb-8 md:mb-0">
                        <img
                            src="/runtime-solutions-logo.png"
                            alt="Runtime Solutions Logo"
                            className="h-[60px] md:h-[80px] w-auto object-contain mb-4"
                        />
                        <p className="text-black text-[14px] md:text-[15px] opacity-80">
                            Runtime Solutions Private Limited
                            428, Laxmi Mall,<br /> Laxmi Industrial Estate,
                            Link Road, Andheri (W),
                            Mumbai - 400053
                        </p>
                    </div>
                    <div className="text-black text-[14px] md:text-[15px] opacity-80 text-left md:text-right">
                        Copyright © 2026 Runtime Solutions Pvt Ltd
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
