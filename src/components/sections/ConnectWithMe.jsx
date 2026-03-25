import { Mail, Linkedin, Github } from 'lucide-react';

const ConnectWithMe = () => {
  return (
    <div className="bg-slate-900/50 border border-white/10 p-5 rounded-2xl shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Connect with me</h2>
      <div className="flex justify-center space-x-4 sm:space-x-6">
        <a href="mailto:mukundakrishnaramisetti04@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-blue-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/mukunda-krishna-ramisetti/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-blue-400 transition" />
        </a>
        <a href="https://github.com/Mukunda799" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
          <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-blue-400 transition" />
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
