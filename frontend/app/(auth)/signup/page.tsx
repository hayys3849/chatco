import Link from "next/link";
import SignupForm from "@/components/auth/signup-form";
import Footer from "@/components/landing/Footer";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      
      {/* Minimal Top Navigation - Glassmorphism effect */}
      <div className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100/80 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 rounded-lg bg-[#1A5FB4] flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#071A2E]">CHATCO</span>
        </Link>
        
        {/* Empty space on the right now */}
        <div className="w-[100px]"></div>
      </div>

      {/* Centered Form Area with Back Button on the Left */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 pb-16 pt-8 overflow-y-auto">
        <div className="flex items-start gap-4 sm:gap-6 w-full max-w-4xl my-auto">
          
          {/* Back to Home - Sits to the left of the card on desktop */}
          <div className="hidden sm:flex flex-col items-center pt-10 shrink-0">
            <Link 
              href="/" 
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#1A5FB4] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-[#1A5FB4] flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider">Home</span>
            </Link>
          </div>

          {/* The Form Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
            
            {/* Back button for Mobile only (sits inside the top of the card) */}
            <Link 
              href="/" 
              className="sm:hidden inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#1A5FB4] transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>

            <SignupForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}