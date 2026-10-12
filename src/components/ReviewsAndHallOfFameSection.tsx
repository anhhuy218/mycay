import React, { useState } from 'react';
import { Star, Trophy, Flame, Quote, UserCheck } from 'lucide-react';
import { TESTIMONIALS, SPICE_CHALLENGE_WINNERS } from '../data/menuData';

export const ReviewsAndHallOfFameSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'franchisees' | 'hallOfFame'>('franchisees');

  return (
    <section id="reviews" className="py-16 lg:py-24 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with segmented switch */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
              <span>Đánh Giá Thực Tế & Thành Tích</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>168+ Điểm Bán Hoạt Động</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Chia Sẻ Từ Chủ Quán & Bảng Vàng Cấp 7
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button
              onClick={() => setActiveTab('franchisees')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'franchisees'
                  ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Chủ Quán Nhượng Quyền
            </button>
            <button
              onClick={() => setActiveTab('hallOfFame')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'hallOfFame'
                  ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Bảng Vàng Spicy King</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Franchisee Testimonials */}
        {activeTab === 'franchisees' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="font-bold text-white text-sm font-display">{item.author}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{item.role}</div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mt-2 tabular-nums">
                    <span>{item.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Hall of Fame (Spicy King Carolina Reaper) */}
        {activeTab === 'hallOfFame' && (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-1">
                <Trophy className="w-5 h-5" />
                <span>Bảng Vinh Danh Các Nhà Vô Địch Cấp Độ 7 Tử Thần</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Những dũng sĩ đã vượt qua thố mì cay cấp 7 Carolina Reaper 2.200.000 SHU trong vòng dưới 15 phút, không uống nước và nhận 500.000đ tiền mặt tại quán.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SPICE_CHALLENGE_WINNERS.map((winner, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/80 text-xs space-y-2"
                >
                  <div className="flex items-center justify-between text-neutral-400 text-[11px]">
                    <span>{winner.city}</span>
                    <span>{winner.date}</span>
                  </div>
                  <div className="text-sm font-bold text-white font-display flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-red-500 fill-current" />
                    {winner.name}
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-neutral-800">
                    <span className="text-neutral-400">Thời gian ăn:</span>
                    <span className="font-mono font-bold text-amber-400 tabular-nums">{winner.time}</span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium truncate">
                    {winner.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
