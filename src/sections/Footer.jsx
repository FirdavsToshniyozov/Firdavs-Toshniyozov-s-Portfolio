const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
        <a href="https://x.com/FToshniyoz56347" target="_blank" className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        </div>
        <div className="social-icon">
        <a href="https://www.instagram.com/fiscal_trade_?igsh=MTdmNjZxdTluMHp3MA==" target="_blank" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
        </div>
        <div className="social-icon">
        <a href="http://t.me/FiscalD" target="_blank" className="social-icon">
          <img src="/assets/telegram-black-icon.svg" alt="telegram" className="w-1/2 h-1/2" />
        </a>
        </div>
        <div className="social-icon">
        <a href="https://wa.me/998901287266" target="_blank" className="social-icon">
          <img src="/assets/whatsapp.png" alt="telegram" className="w-1/2 h-1/2" />
        </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Firdavs Toshniyozov. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
