import React from 'react';
import { Flame, Clock, Award, PackageCheck, Truck, Users } from 'lucide-react';
import { RESTAURANT_INTERIOR_IMAGE } from '../data/menuData';

export const FranchiseAdvantageSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real photo of restaurant space */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl">
              <img
                src={RESTAURANT_INTERIOR_IMAGE}
                alt="Không gian thiết kế chuẩn quán mì cay hiện đại ấm cúng"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/80 backdrop-blur-md">
                <div className="text-xs font-semibold text-red-400">Không Gian Trải Nghiệm Chuẩn Hàn</div>
                <div className="text-sm font-bold text-white mt-0.5 font-display">
                  Tối Ưu 65 – 80 Khách / Giờ Cao Điểm
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Advantages */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
              <span>Năng Lực Vận Hành Chuẩn Hóa</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Chuyển Giao Trọn Gói</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-6">
              Bí Quyết Vận Hành Đơn Giản, Hiệu Quả Cao Cho Nhà Đầu Tư
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-neutral-300">
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-red-950 border border-red-800 text-red-400 flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5 font-display">Tốc Độ Ra Món Thần Tốc (3 Phút)</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Bếp công nghiệp chuyên dụng cho phép đun sôi 6 thố cùng lúc. Khách không phải đợi lâu, tăng sự hài lòng và vòng quay bàn tối đa.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-800 text-amber-400 flex items-center justify-center mb-3">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5 font-display">Cốt Súp Cô Đặc Độc Quyền</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Công thức gia truyền giữ trọn vị thanh ngọt hầm xương và ớt lên men. Định lượng chính xác từng ml nước nên ai cũng nấu ra hương vị đồng nhất.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mb-3">
                  <PackageCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5 font-display">Đóng Gói Thố Nhôm Giao Hàng</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Giải pháp thố nhôm chịu nhiệt trực tiếp, nắp khóa kín giữ nóng đến 45 phút. Khách có thể đặt lên bếp từ hâm lại, đẩy mạnh 40% doanh thu online.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5 font-display">Đào Tạo Cầm Tay Chỉ Việc 1-1</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Đội ngũ chuyên gia F&B trực tiếp về quán hỗ trợ trong tuần khai trương. Chuyển giao phần mềm quản lý kho, kiểm soát thất thoát nguyên liệu &lt;1%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
