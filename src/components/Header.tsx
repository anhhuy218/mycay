import React from 'react';
import { Flame, ShoppingBag, UtensilsCrossed, PhoneCall } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenFranchiseModal: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenFranchiseModal,
  activeNav,
  setActiveNav,
}) => {
  const navLinks = [
    { id: 'menu', label: 'Thực Đơn Mì Cay' },
    { id: 'spice-levels', label: '7 Cấp Độ Cay' },
    { id: 'business-models', label: 'Mô Hình Nhượng Quyền' },
    { id: 'roi-calculator', label: 'Bảng Tính Lợi Nhuận ROI' },
    { id: 'reviews', label: 'Chủ Quán Thành Công' },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <span className="font-display tracking-wider">
            MÌ CAY <span className="text-red-500">NAGA</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeNav === link.id ? 'text-red-400 font-semibold' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Cart */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-200 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer flex items-center gap-2 text-xs font-medium"
            title="Xem giỏ món đã chọn"
          >
            <ShoppingBag className="w-4 h-4 text-red-400" />
            <span className="hidden sm:inline">Giỏ Món</span>
            {cartItemCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-[11px] font-bold bg-red-600 text-white rounded-full tabular-nums">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenFranchiseModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-red-950/40"
          >
            Tư Vấn Nhượng Quyền
          </button>
        </div>
      </div>
    </header>
  );
};
