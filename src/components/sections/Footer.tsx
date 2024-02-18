import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaMailBulk
} from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 relative">
            <div className="text-xs md:text-sm text-center max-w-md mx-auto mb-5">
                © Portfolio Website | RC
            </div>
            <div className="flex items-center justify-center gap-10">
                <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-md hover:text-pink-500">
                    <a href="https://github.com/resyanac">
                        <FaGithub />
                    </a>
                </span>
                <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-md hover:text-pink-500">
                    <a href="https://linkedin.com/in/resyana-cahyanita">
                        <FaLinkedin />
                    </a>
                </span>
                <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-md hover:text-pink-500">
                    <a href="mailto:resyanac@gmail.com">
                        <FaMailBulk />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
