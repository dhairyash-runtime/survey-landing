import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const lastScrollY = useRef(0);
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;

            // Determine active section (only on homepage)
            if (isHomePage) {
                const sections = ['features', 'benefits', 'collaborations', 'blogs'];
                let current = '';
                for (const id of sections) {
                    const el = document.getElementById(id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= 120) {
                            current = id;
                        }
                    }
                }
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    // Handle hash scrolling after navigating to homepage
    useEffect(() => {
        if (isHomePage && window.location.hash) {
            const sectionId = window.location.hash.replace('#', '');
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) {
                    const navbarHeight = 70;
                    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 300);
        }
    }, [isHomePage, router.asPath]);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        setIsOpen(false);

        if (!isHomePage) {
            // Navigate to homepage with hash
            if (sectionId === 'home') {
                router.push('/');
            } else {
                router.push(`/#${sectionId}`);
            }
            return;
        }

        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const el = document.getElementById(sectionId);
        if (el) {
            const navbarHeight = 70;
            const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { label: 'Home', id: 'home' },
        { label: 'Features', id: 'features' },
        { label: 'Benefits', id: 'benefits' },
        { label: 'Collaborations', id: 'collaborations' },
        { label: 'Blog', id: 'blogs' },
    ];

    const linkStyles = "hover:text-[#DEDB00] transition-colors cursor-pointer";
    const activeLinkStyles = "text-[#218CA1] border-b-2 border-[#218CA1] pb-1 cursor-pointer";

    const isActive = (id) => {
        if (id === 'home' && !activeSection) return true;
        return activeSection === id;
    };

    return (
        <div
            className={`w-full font-['Poppins'] bg-white sticky top-0 z-50 shadow-none border-none transition-transform duration-500 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <nav className="flex items-center justify-between px-6 mx-auto max-w-7xl">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="relative cursor-pointer py-2">
                            <img
                                src="/runtime-solutions-logo.png"
                                alt="Runtime Solutions Logo"
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        </div>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-12 text-[#4C4C4C] text-[15px] font-medium">
                    {navLinks.map(({ label, id }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => scrollToSection(e, id)}
                            className={isActive(id) ? activeLinkStyles : linkStyles}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block md:-mr-4">
                    <a
                        href="https://www.runtime-solutions.com/contact/"
                        className="text-[12px] px-3 py-2 rounded-full font-medium transition-colors shadow-md cursor-pointer bg-[#218CA1] hover:bg-[#DEDB00] text-white hover:text-black inline-block"
                    >
                        Request Demo
                    </a>
                </div>

                <div className="md:hidden flex items-center gap-3">
                    <a
                        href="https://www.runtime-solutions.com/contact/"
                        className="text-[10px] px-3 py-2 rounded-full font-semibold transition-colors cursor-pointer bg-[#218CA1] hover:bg-[#DEDB00] text-white hover:text-black inline-block"
                    >
                        Request Demo
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#218CA1] hover:text-[#DEDB00] focus:outline-none p-1"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-white w-full h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-200">
                    <div className="flex flex-col px-6 text-gray-800 font-medium text-[15px]">
                        {navLinks.map(({ label, id }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => scrollToSection(e, id)}
                                className="py-4 border-b border-gray-200 hover:text-[#DEDB00] transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
