import React, { useState } from 'react';
import { Flame, ShieldAlert, Award, Coffee, Sparkles, Check, AlertTriangle } from 'lucide-react';
import { SPICE_LEVELS } from '../data/menuData';

interface SpiceLevelsSectionProps {
  onSelectSpiceForMenu?: (level: number) => void;
}

export const SpiceLevelsSection: React.FC<SpiceLevelsSectionProps> = ({ onSelectSpiceForMenu }) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(3);
  const [showKingChallengeNotice, setShowKingChallengeNotice] = useState<boolean>(false);

  const currentSpice = SPICE_LEVELS.find((s) => s.level === selectedLevel) || SPICE_LEVELS[3];

  return (
    <section id="spice-levels" className="py-16 lg:py-24 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
            <span>Bản Đồ Vị Giác 7 Cấp Độ</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Thang Đo Nhiệt Lượng Scoville</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mb-4">
            Khám Phá Giới Hạn 7 Cấp Độ Cay Chuẩn Mì Cay Naga
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Hương vị nước dùng được tinh chế từ ớt sừng Đà Lạt, ớt hiểm tươi, ớt bột Hàn Quốc Gochugaru và ớt ma Ghost Pepper. Chọn cấp độ của bạn để trải nghiệm từng cung bậc cảm xúc.
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-8">
          {SPICE_LEVELS.map((spice) => {
            const isSelected = spice.level === selectedLevel;
            return (
              <button
                key={spice.level}
                onClick={() => {
                  setSelectedLevel(spice.level);
                  if (spice.level === 7) {
                    setShowKingChallengeNotice(true);
                  }
                }}
                className={`py-3 px-2 rounded-xl text-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-neutral-900 border-red-500 text-white shadow-lg shadow-red-950/40 ring-1 ring-red-500'
                    : 'bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                <div className="text-xs font-medium text-neutral-500 mb-0.5">Cấp</div>
                <div
                  className="text-xl sm:text-2xl font-extrabold font-display tabular-nums"
                  style={{ color: isSelected ? spice.colorHex : undefined }}
                >
                  {spice.level}
                </div>
                <div className="mt-1 flex justify-center">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: spice.colorHex }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Level Details Board */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Intensity & Title */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                <span>Chỉ số nhiệt Scoville:</span>
                <span className="font-mono font-bold text-red-400 tabular-nums">{currentSpice.shu}</span>
                <span aria-hidden="true">·</span>
                <span>{currentSpice.popularityPct}% Thực khách chọn</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3 flex items-center gap-3">
                <span>{currentSpice.name}</span>
                {currentSpice.dangerBadge && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-950/80 text-red-400 border border-red-800/80">
                    {currentSpice.dangerBadge}
                  </span>
                )}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {currentSpice.description}
              </p>

              {/* Flame intensity meter */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Cường độ rực cháy</span>
                  <span className="font-mono tabular-nums">{currentSpice.level} / 7</span>
                </div>
                <div className="h-2.5 w-full bg-neutral-800 rounded-full overflow-hidden flex">
                  <div
                    className="h-full transition-all duration-500 rounded-full"
                    style={{
                      width: `${Math.max(12, (currentSpice.level / 7) * 100)}%`,
                      backgroundColor: currentSpice.colorHex,
                    }}
                  />
                </div>
              </div>

              {/* Antidote Recommendation */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 flex items-start gap-3">
                <Coffee className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-neutral-300">Đồ uống dập lửa khuyên dùng:</div>
                  <div className="text-sm font-medium text-white">{currentSpice.recommendedSide}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Tasting Notes & Challenge Details */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-4">
                  Cảm Nhận Vị Giác Thực Tế
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentSpice.characteristics.map((char, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Challenge Alert if Level 7 */}
              {currentSpice.level === 7 ? (
                <div className="p-5 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-neutral-300 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-red-400 text-sm">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                    <span>Quy Tắc Thử Thách "Spicy King" (Thưởng 500.000đ tiền mặt)</span>
                  </div>
                  <p className="leading-relaxed">
                    1. Người tham gia ký cam kết không có tiền sử bệnh tim mạch hoặc dạ dày cấp tính.
                    <br />
                    2. Ăn hết sạch cả mì và nước dùng thố Cấp 7 trong vòng 15 phút mà không được uống nước trong lúc ăn.
                    <br />
                    3. Chiến thắng nhận 500.000đ tiền mặt + 1 Áo Thun Naga Spicy King + Ghi danh Bảng Vàng toàn quốc.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Bạn có thể yêu cầu giảm hoặc tăng độ cay bất cứ lúc nào trong bữa ăn!</span>
                  </div>
                </div>
              )}

              {/* Call to action button */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#menu"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors inline-flex items-center gap-2"
                >
                  <Flame className="w-4 h-4" />
                  <span>Chọn Món Ăn Kèm Cấp {currentSpice.level}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
