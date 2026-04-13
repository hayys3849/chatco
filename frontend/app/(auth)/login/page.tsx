import Link from "next/link";
import LoginForm from "@/components/auth/login-form";
import Footer from "@/components/landing/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Main Content Area */}
      <div className="flex-1 flex">
        
        {/* Left Side - Branding (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative hero-bg overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1A5FB4]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3584E4]/15 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col justify-center px-16 text-white">
            {/* Clickable Logo */}
            <Link href="/" className="flex items-center gap-2 mb-8 w-fit hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-lg bg-[#1A5FB4] flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">CHATCO</span>
            </Link>
            
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
              Commuting<br />
              <span className="text-[#62A0EA]">Reimagined.</span>
            </h1>
            <p className="mt-4 text-white/60 max-w-md leading-relaxed">
              Access your digital wallet, track your rides in real-time, and manage your jeepney fleet from one smart ecosystem.
            </p>
            
            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-xs text-white/40 mt-1">Active Commuters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-white/40 mt-1">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        {/* Added 'relative' here so we can position the back button in the corner */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 pt-16 lg:pt-12 bg-white">
          
          {/* Back to Home Button - Top Left */}
          <Link 
            href="/" 
            className="absolute top-6 left-6 lg:top-8 lg:left-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#1A5FB4] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>

          <div className="w-full max-w-md">
            {/* Clickable Mobile Logo */}
            <Link href="/" className="lg:hidden flex items-center gap-2 mb-10 w-fit hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-lg bg-[#1A5FB4] flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#071A2E]">CHATCO</span>
            </Link>

            <LoginForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}