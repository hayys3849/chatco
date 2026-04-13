const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-4 pt-5 pb-6 rounded-b-2xl">
      <div className="greeting">
        <h1 className="text-2xl font-semibold m-0">Good morning JeepPay</h1>
      </div>
      
      <div className="wallet-container mt-6">
        <div className="wallet-info mb-4">
          <p className="text-sm opacity-90 m-0 mb-2">Wallet Balance</p>
          <div className="flex items-center">
            <h2 className="text-3xl font-bold m-0">₱350.00</h2>
            <span className="ml-3 bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">Active</span>
          </div>
        </div>
        
        <div className="wallet-actions flex gap-3">
          <button className="flex-1 bg-white text-blue-600 border-0 rounded-xl py-3 flex items-center justify-center font-semibold cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5">
            <i className="fas fa-plus-circle mr-2"></i>
            <span>Top Up</span>
          </button>
          <button className="flex-1 bg-white text-blue-600 border-0 rounded-xl py-3 flex items-center justify-center font-semibold cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5">
            <i className="fas fa-qrcode mr-2"></i>
            <span>QR Code</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;