import React, {useState, useEffect} from 'react';
import {Menu, X, Database, Brain, Cloud, Users, BarChart3, Shield} from 'lucide-react';

const AlpineThinking = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({behavior: 'smooth'});
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 150;
                }
                return false;
            });
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
            <div className="min-h-screen bg-gray-50">
                {/* Navigation */}
                <nav className="fixed top-0 w-full shadow-md z-50"
                     style={{backgroundColor: 'rgb(245, 245, 244)'}}>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <img
                                        src="logo2.png"
                                        alt="Alpine Thinking Logo"
                                        className="h-12 w-auto"
                                        onClick={() => scrollToSection('home')}
                                        style={{cursor: 'pointer'}}
                                />
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-4">
                                {['home', 'about', 'services', 'contact'].map((item) => (
                                        <button
                                                key={item}
                                                onClick={() => scrollToSection(item)}
                                                className={`${
                                                        activeSection === item
                                                                ? 'bg-blue-900 text-white'
                                                                : 'bg-gray-500 text-white hover:bg-gray-600'
                                                } px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-200`}
                                        >
                                            {item}
                                        </button>
                                ))}
                            </div>

                            {/* Mobile Navigation Button */}
                            <div className="md:hidden flex items-center">
                                <button
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="bg-gray-500 text-white hover:bg-gray-600 px-3 py-2 rounded-md"
                                >
                                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                            <div className="md:hidden"
                                 style={{backgroundColor: 'rgb(245, 245, 244)'}}>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {['home', 'about', 'services', 'contact'].map((item) => (
                                            <button
                                                    key={item}
                                                    onClick={() => scrollToSection(item)}
                                                    className={`${
                                                            activeSection === item
                                                                    ? 'bg-blue-900 text-white'
                                                                    : 'bg-gray-700 text-white hover:bg-gray-600'
                                                    } block w-full text-left px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-200`}
                                            >
                                                {item}
                                            </button>
                                    ))}
                                </div>
                            </div>
                    )}
                </nav>


                {/* Hero Section */}
                <section id="home"
                         className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Elevate Your Data Strategy
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                A premier boutique consulting firm specializing in
                                enterprise data platforms, cutting-edge AI solutions,
                                and seamless cloud transformation. We bridge the gap
                                between complex technology and real business value,
                                turning data challenges into competitive advantages
                                through practical, results-driven solutions.
                            </p>
                            <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-500 transition-colors"
                            >
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why
                            Choose AlpineThinking</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <Users className="w-12 h-12 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Personal
                                    Touch</h3>
                                <p className="text-gray-600">
                                    As a boutique firm, we provide dedicated attention
                                    and tailored solutions for every client. Our senior
                                    consultants work directly with your team, ensuring
                                    clear communication and rapid problem-solving. We
                                    pride ourselves on being accessible and responsive,
                                    maintaining a high-touch service model that larger
                                    firms simply cannot match. Every project receives
                                    direct attention from our most experienced
                                    consultants, ensuring the highest quality outcomes.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <Shield className="w-12 h-12 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven
                                    Expertise</h3>
                                <p className="text-gray-600">
                                    Our team brings decades of experience from leading
                                    tech companies and successful enterprise
                                    transformations. With certifications across major
                                    cloud platforms and deep expertise in modern data
                                    architecture, we've helped organizations from
                                    startups to Fortune 500 companies achieve their
                                    technology goals. Our consultants average 15+ years
                                    of hands-on experience in data engineering, cloud
                                    architecture, and enterprise systems. We bring best
                                    practices from hundreds of successful
                                    implementations to every project.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <BarChart3 className="w-12 h-12 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Results
                                    Driven</h3>
                                <p className="text-gray-600">
                                    We measure our success by your outcomes, focusing on
                                    delivering tangible business value through practical
                                    solutions. Our projects have delivered an average of
                                    40% reduction in data processing costs and 60%
                                    improvement in analytics delivery time. We back our
                                    work with clear metrics and guaranteed satisfaction.
                                    Our approach combines technical excellence with
                                    business acumen, ensuring solutions that not only
                                    work technically but drive real business results.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our
                            Services</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <Cloud className="w-12 h-12 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Cloud
                                    Data Platforms</h3>
                                <p className="text-gray-600">
                                    Expert implementation of modern data platforms using
                                    GCP, AWS, and Azure. We specialize in data lakes,
                                    warehouse modernization, and real-time analytics.
                                    Our solutions incorporate best practices in data
                                    governance, security, and scalability. From initial
                                    architecture to production deployment, we ensure
                                    your data platform meets both current needs and
                                    future growth requirements. Experience with
                                    platforms like Snowflake, Databricks, and BigQuery
                                    ensures the right solution for your specific needs.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <Brain className="w-12 h-12 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI
                                    Solutions</h3>
                                <p className="text-gray-600">
                                    End-to-end machine learning solutions from strategy
                                    to production, helping you identify and implement
                                    high-value AI opportunities. Our expertise spans
                                    predictive analytics, natural language processing,
                                    computer vision, and recommendation systems. We
                                    focus on practical AI applications that deliver
                                    measurable business value, including MLOps practices
                                    for sustainable AI deployment. Our team helps you
                                    navigate the complexities of AI implementation while
                                    ensuring responsible and ethical AI practices.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <Database className="w-12 h-12 text-blue-600 mb-4"/>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Data
                                    Engineering</h3>
                                <p className="text-gray-600">
                                    Building robust, scalable data pipelines and
                                    analytics solutions using modern tools like Spark,
                                    Kafka, and dbt. We implement efficient ETL/ELT
                                    processes, real-time streaming solutions, and
                                    automated data quality frameworks. Our engineering
                                    practices emphasize reliability, maintainability,
                                    and performance optimization. We help you modernize
                                    legacy systems while ensuring business continuity
                                    and knowledge transfer to your team. Expertise in
                                    both batch and streaming architectures ensures
                                    solutions that match your data velocity needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Start
                            Your Journey</h2>
                        <div className="max-w-lg mx-auto">
                            <form className="space-y-6">
                                <div>
                                    <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                                    />
                                </div>
                                <div>
                <textarea
                        placeholder="Tell us about your project"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                />
                                </div>
                                <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors"
                                >
                                    Request Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p>&copy; 2025 AlpineThinking. All rights reserved.</p>
                    </div>
                </footer>
            </div>
    );
};

export default AlpineThinking;