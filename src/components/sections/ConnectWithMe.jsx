import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ConnectWithMe = () => {
  return (
    <div className="bg-black p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-4 text-white">Connect with me:</h2>
      <div className="flex justify-center space-x-6">
        <a href="mailto:mukundakrishnaramisetti04@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="w-6 h-6 text-white hover:text-blue-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/mukunda-krishna-ramisetti/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-white hover:text-blue-400 transition" />
        </a>
        <a href="https://github.com/Mukunda799" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-white hover:text-blue-400 transition" />
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
