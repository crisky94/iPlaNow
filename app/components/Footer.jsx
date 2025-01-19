import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="flex justify-center space-x-6 mb-4">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition"
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition"
                    aria-label="Twitter"
                >
                    <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 transition"
                    aria-label="Instagram"
                >
                    <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-700 transition"
                    aria-label="LinkedIn"
                >
                    <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
            </div>
            <p className="text-center text-sm">
                © 2025 KyDev. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
