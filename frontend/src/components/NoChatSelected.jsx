import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
    return (
       <div className="w-full min-h-screen flex flex-1 flex-col items-center justify-center p-4 sm:p-10 bg-slate-50 relative overflow-hidden font-sans">

      {/* Decorative background gradients - Aurora style */}
      <div 
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-rose-500/30 rounded-full blur-[150px] animate-[pulse_8s_ease-in-out_infinite]"
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-orange-400/30 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite_2s]"
        aria-hidden="true"
      ></div>

      {/* Main content card with glassmorphism effect */}
      <div className="relative max-w-lg w-full text-center space-y-8 bg-white/70 backdrop-blur-2xl p-8 sm:p-12 rounded-[32px] shadow-2xl shadow-black/10 ring-1 ring-black/5">

        {/* Icon with glowing aurora effect */}
        <div className="flex justify-center">
            <div className="relative group">
                {/* The glowing background, now a slower, more organic spin */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-rose-500 via-red-400 to-orange-500 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-[spin_8s_linear_infinite]"></div>
                
                {/* The icon container itself */}
                <div
                    className="relative w-28 h-28 rounded-2xl bg-white/80
                               flex items-center justify-center shadow-lg border border-white/50
                               transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    <MessageSquare className="w-14 h-14 text-orange-500 transition-colors duration-300" />
                </div>
            </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight drop-shadow-sm">
            Welcome to <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">Chatty</span> 🎉
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-lg leading-relaxed">
            Pick a conversation from the sidebar and jump right in.
            Stay connected, share your ideas, and spark new conversations 🚀
        </p>

        {/* Action Button */}
        <div className="pt-4">
            <button
                className="px-8 py-4 rounded-2xl font-semibold tracking-wide
                           bg-gradient-to-r from-rose-500 via-red-500 to-orange-500
                           text-white shadow-lg shadow-rose-500/30
                           hover:shadow-xl hover:shadow-rose-500/40
                           transform hover:-translate-y-1 active:scale-95
                           transition-all duration-300 ease-in-out
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
            >
                Start a Conversation
            </button>
        </div>
      </div>
    </div>

    );
};

export default NoChatSelected;
