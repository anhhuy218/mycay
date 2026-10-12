import React from 'react';
import { Store, ShoppingBag, Crown, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_TIERS } from '../data/menuData';
import { BusinessTier } from '../types';

interface BusinessModelsSectionProps {
  onSelectTier: (tier: BusinessTier) => void;
  onScrollToCalculator: () => void;
}

export const BusinessModelsSection: React.FC<BusinessModelsSectionProps> = ({
  onSelectTier,
  onScrollToCalculator,
}) => {
  return (
    <section id="business-models" className="py-16 lg:py-24 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
            <span>Chiến Lược Nhượng Quyền & Đầu Tư F&B</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>3 Mô Hình Tinh Gọn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mb-4">
            3 Mô Hình Kinh Doanh Mì Cay Sinh Lời Bền Vững
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Chúng tôi thiết kế từng mô hình tương ứng với quy mô vốn, vị trí mặt bằng và mục tiêu lợi nhuận của nhà đầu tư. Tất cả đều đi kèm quy trình chuẩn hóa và công nghệ sốt ớt độc quyền.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BUSINESS_TIERS.map((tier) => {
            const isHighlighted = tier.id === 'tier-standard';
            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative border ${
                  isHighlighted
                    ? 'bg-neutral-900 border-red-500/80 shadow-2xl shadow-red-950/40 ring-1 ring-red-500/50'
                    : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Subtle text badge if any */}
                {tier.badge && (
                  <div className="text-xs font-semibold text-red-400 mb-2">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white font-display">
                      {tier.title.split(' (')[0]}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                    {tier.tagline}
                  </p>

                  {/* Financial Metrics Strip */}
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2.5 mb-6 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Vốn đầu tư ban đầu:</span>
                      <span className="font-bold text-white font-mono tabular-nums">
                        {(tier.investmentFrom / 1000000).toFixed(0)} - {(tier.investmentTo / 1000000).toFixed(0)} Triệu đ
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Doanh thu kỳ vọng:</span>
                      <span className="font-semibold text-emerald-400 tabular-nums">
                        {tier.expectedMonthlyRevenue}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Thời gian hoàn vốn:</span>
                      <span className="font-semibold text-amber-400 tabular-nums">
                        {tier.paybackMonths}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-neutral-800/60">
                      <span className="text-neutral-400">Diện tích tối ưu:</span>
                      <span className="text-neutral-200">{tier.areaRange}</span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                      Đặc quyền gói chuyển giao:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Equipment Included */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/80 text-xs">
                    <div className="font-medium text-neutral-400">Trang thiết bị bàn giao sẵn:</div>
                    <ul className="text-neutral-500 space-y-1 list-disc list-inside">
                      {tier.equipmentIncluded.slice(0, 3).map((eq, i) => (
                        <li key={i} className="truncate">{eq}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-neutral-800/80">
                  <button
                    onClick={() => onSelectTier(tier)}
                    className={`w-full py-3 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                      isHighlighted
                        ? 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-950/50'
                        : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    <span>Đăng Ký Khảo Sát & Nhận Hồ Sơ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why this business model works in Vietnam */}
        <div className="mt-14 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30">
          <h4 className="text-lg font-bold text-white font-display mb-6">
            Tại Sao Mô Hình Mì Cay 7 Cấp Độ Luôn Thắng Lớn Tại Thị Trường Việt Nam?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div className="space-y-2">
              <div className="font-semibold text-white text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Vòng quay bàn cực cao (4 - 7 lượt/ngày)
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Mì cay thố đá nóng hổi được ăn trong 20-30 phút. Khách hàng trẻ ăn xong thanh toán nhanh, giúp tối ưu hóa doanh thu trên mỗi mét vuông mặt bằng.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Không phụ thuộc đầu bếp cao cấp
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Nước súp cốt cô đặc và bột ớt phân liều sẵn từ tổng kho. Nhân viên chỉ cần học trong 3 ngày là có thể đứng bếp nấu chuẩn 100 thố như một.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-white text-sm flex items-center gap-2">
                <Store className="w-4 h-4 text-red-400" />
                Bán chéo đồ uống & món ăn vặt biên lãi 70%
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Vì mì cay, 95% khách hàng gọi thêm trà sữa thái, sữa tươi trân châu, takoyaki, phô mai que... đẩy giá trị hóa đơn lên 140.000đ - 220.000đ/bàn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
