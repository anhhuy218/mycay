import React from 'react';
import { Flame, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base font-display mb-3">
              <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <Flame className="w-4 h-4 fill-current" />
              </div>
              <span>MÌ CAY NAGA 7 CẤP ĐỘ</span>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Hệ thống chuỗi mì cay chuẩn vị Hàn Quốc và nền tảng nhượng quyền F&B hàng đầu với hơn 168 cơ sở trên toàn quốc.
            </p>
            <div className="text-[11px] text-neutral-500">
              Giấy chứng nhận VSATTP số: 4829/2026/ATTP-BCT
            </div>
          </div>

          {/* Contact & Hotline */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3">
              Liên Hệ & Nhượng Quyền
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Hotline Nhượng Quyền: <strong>1900 6886</strong> (Nhánh 1)</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>nhuongquyen@micaynaga.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Trụ sở chính: Tòa nhà F&B Tower, Cầu Giấy, Hà Nội</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Giờ mở cửa phục vụ: 09:30 – 22:30 hàng ngày</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3">
              Chính Sách Đối Tác
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#business-models" className="hover:text-white transition-colors">
                  Quy trình thẩm định mặt bằng 7 ngày
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  Bảng tính suất đầu tư & thời gian hoàn vốn
                </a>
              </li>
              <li>
                <a href="#spice-levels" className="hover:text-white transition-colors">
                  Bản quyền công thức súp 7 cấp độ
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Chuỗi cung ứng nguyên liệu giá sỉ
                </a>
              </li>
            </ul>
          </div>

          {/* System Network */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3">
              Mạng Lưới Chi Nhánh Nổi Bật
            </h4>
            <p className="text-neutral-400 mb-2 leading-relaxed">
              Có mặt tại 38 tỉnh thành: Hà Nội (35 quán), TP.HCM (48 quán), Đà Nẵng (12 quán), Cần Thơ (8 quán), Hải Phòng (9 quán)...
            </p>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
              Đang tiếp tục mở rộng nhượng quyền độc quyền khu vực năm 2026.
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © 2026 Mì Cay Naga Vietnam. All rights reserved. Mô hình kinh doanh ẩm thực nhượng quyền chuẩn hóa.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Điều khoản nhượng quyền</span>
            <span>·</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Bảo mật thông tin</span>
            <span>·</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Đăng ký tham quan bếp mẫu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
