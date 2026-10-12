import React from 'react';
import { ArrowRight, Flame, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/menuData';

interface HeroProps {
  onScrollToMenu: () => void;
  onScrollToCalculator: () => void;
  onOpenFranchiseModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToMenu,
  onScrollToCalculator,
  onOpenFranchiseModal,
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-neutral-800">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet text kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-4 tracking-wider uppercase">
              <span>Hệ Thống Mì Cay 7 Cấp Độ</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Công Thức Độc Quyền</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Nhượng Quyền F&B Tinh Gọn</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 font-display [text-wrap:balance]">
              Hương Vị Mì Cay 7 Cấp Độ Chuẩn Hàn & Mô Hình Kinh Doanh F&B Siêu Lợi Nhuận
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Giải pháp trọn gói từ công thức cốt súp độc quyền, thố đất giữ nhiệt 25 phút đến chuỗi cung ứng nguyên liệu sỉ giá tốt. Vận hành đơn giản, hoàn vốn nhanh trong <span className="text-red-400 font-semibold">4 – 6 tháng</span> với biên lợi nhuận ròng đạt <span className="text-red-400 font-semibold">28% – 35%</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onScrollToMenu}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 transition-colors flex items-center gap-2 shadow-lg shadow-red-900/30 cursor-pointer"
              >
                <span>Xem Thực Đơn & Gọi Món</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Bảng Tính Doanh Thu & ROI</span>
              </button>

              <button
                onClick={onOpenFranchiseModal}
                className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 transition-colors py-2 px-1 cursor-pointer"
              >
                Tải hồ sơ nhượng quyền PDF
              </button>
            </div>

            {/* Quality assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-800/80 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Nấu nhanh 3 phút / thố</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Giá vốn nguyên liệu ~31%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Bảo hộ vùng độc quyền 3km</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              <img
                src={HERO_IMAGE}
                alt="Thố mì cay hải sản 7 cấp độ nghi ngút khói"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" />

              {/* Float label info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/80 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span>Món Chữ Ký Chuẩn Hàn</span>
                  <span className="font-semibold text-red-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    Cấp Độ 3 (Bán Chạy Nhất)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white font-display">Mì Cay Hải Sản Thố Đá</h3>
                    <p className="text-xs text-neutral-300">Tôm sú, mực vòng, bò Mỹ cuộn, nấm kim châm</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 line-through mr-1.5 tabular-nums">69.000đ</span>
                    <span className="text-base font-extrabold text-red-500 tabular-nums">59.000đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="mt-14 pt-10 border-t border-neutral-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">168+</div>
            <div className="text-xs text-neutral-400 mt-1">Cơ sở nhượng quyền hoạt động</div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display tabular-nums">4 - 6 Tháng</div>
            <div className="text-xs text-neutral-400 mt-1">Thời gian hoàn vốn thực tế</div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display tabular-nums">31.5%</div>
            <div className="text-xs text-neutral-400 mt-1">Tỷ suất lợi nhuận ròng trung bình</div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-500 font-display tabular-nums">280+ Thố</div>
            <div className="text-xs text-neutral-400 mt-1">Sức tiêu thụ trung bình/ngày/quán</div>
          </div>
        </div>
      </div>
    </section>
  );
};
