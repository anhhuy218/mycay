import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Phone, MapPin, User, Calendar, Clock, Users, Flame } from 'lucide-react';
import { BusinessTier } from '../types';

interface BookingAndFranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'franchise' | 'booking';
  preSelectedTier?: BusinessTier | null;
}

export const BookingAndFranchiseModal: React.FC<BookingAndFranchiseModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'franchise',
  preSelectedTier = null,
}) => {
  const [activeTab, setActiveTab] = useState<'franchise' | 'booking'>(initialTab);

  // Franchise Form state
  const [fName, setFName] = useState('');
  const [fPhone, setFPhone] = useState('');
  const [fEmail, setFEmail] = useState('');
  const [fCity, setFCity] = useState('Hà Nội');
  const [fTier, setFTier] = useState(preSelectedTier?.title.split(' (')[0] || 'Mô Hình Nhà Hàng Tiêu Chuẩn');
  const [fBudget, setFBudget] = useState('200 - 400 Triệu');
  const [fHasPremise, setFHasPremise] = useState(false);
  const [fSubmitted, setFSubmitted] = useState(false);

  // Booking Form state
  const [bName, setBName] = useState('');
  const [bPhone, setBPhone] = useState('');
  const [bBranch, setBBranch] = useState('Naga Cầu Giấy - Hà Nội');
  const [bGuests, setBGuests] = useState('4');
  const [bDate, setBDate] = useState('Hôm nay');
  const [bTime, setBTime] = useState('18:30');
  const [bSpice, setBSpice] = useState('3');
  const [bSubmitted, setBSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFSubmitted(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
        {/* Header & Tabs */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              {activeTab === 'franchise' ? 'Đăng Ký Tư Vấn Nhượng Quyền' : 'Đặt Bàn Ăn Trực Tuyến'}
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              {activeTab === 'franchise'
                ? 'Nhận bộ hồ sơ tài chính & khảo sát thẩm định mặt bằng miễn phí'
                : 'Giữ chỗ trước, không phải xếp hàng chờ đợi giờ cao điểm'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="mt-4 flex rounded-lg bg-neutral-950 p-1 border border-neutral-800 text-xs">
          <button
            type="button"
            onClick={() => {
              setActiveTab('franchise');
              setFSubmitted(false);
            }}
            className={`flex-1 py-2 font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'franchise' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Tư Vấn Kinh Doanh & Nhượng Quyền
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('booking');
              setBSubmitted(false);
            }}
            className={`flex-1 py-2 font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'booking' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Đặt Bàn Ăn Tại Quán
          </button>
        </div>

        {/* Tab Content: Franchise */}
        {activeTab === 'franchise' && (
          <div className="mt-6">
            {fSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-display">
                  Đã Tiếp Nhận Thông Tin Thành Công!
                </h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Chuyên viên phát triển thị trường Naga sẽ liên hệ với Anh/Chị qua số điện thoại <strong className="text-white">{fPhone || '0988-xxx-xxx'}</strong> trong vòng 15 phút để gửi hồ sơ khảo sát chi tiết.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      alert('Đã tải xuống file: Ho-So-Nhuong-Quyen-Mi-Cay-Naga-2026.pdf (Bản mềm 12 trang)');
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Tải File Hồ Sơ Nhượng Quyền (PDF)</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-semibold text-neutral-300 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFranchiseSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Họ và Tên của bạn: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Số điện thoại Zalo: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={fPhone}
                      onChange={(e) => setFPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Tỉnh / Thành phố dự kiến mở:
                    </label>
                    <input
                      type="text"
                      value={fCity}
                      onChange={(e) => setFCity(e.target.value)}
                      placeholder="Ví dụ: Hà Nội, TP.HCM, Hải Phòng..."
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Mô hình quan tâm:
                    </label>
                    <select
                      value={fTier}
                      onChange={(e) => setFTier(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Mô Hình Kiosk Express">Mô Hình Kiosk Express (95 - 140 Triệu)</option>
                      <option value="Mô Hình Nhà Hàng Tiêu Chuẩn">Mô Hình Tiêu Chuẩn (280 - 380 Triệu)</option>
                      <option value="Mô Hình Đại Sứ Flagship">Mô Hình Flagship (650 - 850 Triệu)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Khoản vốn chuẩn bị:
                    </label>
                    <select
                      value={fBudget}
                      onChange={(e) => setFBudget(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Dưới 150 Triệu">Dưới 150 Triệu</option>
                      <option value="200 - 400 Triệu">200 - 400 Triệu</option>
                      <option value="500 - 800 Triệu">500 - 800 Triệu</option>
                      <option value="Trên 1 Tỷ">Trên 1 Tỷ</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="premiseCheck"
                    checked={fHasPremise}
                    onChange={(e) => setFHasPremise(e.target.checked)}
                    className="rounded border-neutral-700 text-red-600 focus:ring-0 w-4 h-4"
                  />
                  <label htmlFor="premiseCheck" className="text-neutral-300 cursor-pointer">
                    Tôi đã có sẵn mặt bằng kinh doanh (Cần thẩm định vị trí)
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors shadow-lg shadow-red-950/40 cursor-pointer"
                  >
                    Gửi Thông Tin & Nhận Tư Vấn Trực Tiếp 1-1
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    Cam kết bảo mật 100% thông tin theo chính sách F&B quốc gia.
                  </p>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Tab Content: Booking */}
        {activeTab === 'booking' && (
          <div className="mt-6">
            {bSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-display">
                  Đặt Bàn Thành Công!
                </h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Cơ sở <strong className="text-white">{bBranch}</strong> đã giữ chỗ cho bàn <strong className="text-white">{bGuests} khách</strong> vào lúc <strong className="text-white">{bTime}</strong>. Mã đặt bàn: <strong className="text-red-400 font-mono">NG-8892</strong>.
                </p>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    Xác Nhận & Đóng
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Tên của bạn: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={bName}
                      onChange={(e) => setBName(e.target.value)}
                      placeholder="Tên khách hàng"
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Số điện thoại: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={bPhone}
                      onChange={(e) => setBPhone(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Chọn chi nhánh nhà hàng:
                  </label>
                  <select
                    value={bBranch}
                    onChange={(e) => setBBranch(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Naga Cầu Giấy - Hà Nội">Cơ sở 1: Cầu Giấy, Hà Nội (Gần ĐH Quốc Gia)</option>
                    <option value="Naga Đống Đa - Hà Nội">Cơ sở 2: Chùa Láng, Đống Đa, Hà Nội</option>
                    <option value="Naga Quận 10 - TP.HCM">Cơ sở 3: Sư Vạn Hạnh, Quận 10, TP.HCM</option>
                    <option value="Naga Thủ Đức - TP.HCM">Cơ sở 4: Đặng Văn Bi, TP. Thủ Đức</option>
                    <option value="Naga Hải Châu - Đà Nẵng">Cơ sở 5: Nguyễn Văn Linh, Hải Châu, Đà Nẵng</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">Số khách:</label>
                    <select
                      value={bGuests}
                      onChange={(e) => setBGuests(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="2">2 người</option>
                      <option value="4">4 người</option>
                      <option value="6">6 người</option>
                      <option value="8+">8+ người (Set tiệc)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">Ngày đến:</label>
                    <input
                      type="text"
                      value={bDate}
                      onChange={(e) => setBDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">Giờ đến:</label>
                    <input
                      type="text"
                      value={bTime}
                      onChange={(e) => setBTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Cấp độ cay dự kiến (Để bếp chuẩn bị nước dùng):
                  </label>
                  <select
                    value={bSpice}
                    onChange={(e) => setBSpice(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="0">Cấp 0 (Không cay - Trẻ em)</option>
                    <option value="1">Cấp 1 (Cay nhẹ the)</option>
                    <option value="2">Cấp 2 (Cay nồng chuẩn vị)</option>
                    <option value="3">Cấp 3 (Mức vàng bán chạy nhất)</option>
                    <option value="4">Cấp 4 (Xé lưỡi rực lửa)</option>
                    <option value="5">Cấp 5 (Ghost Pepper bùng nổ)</option>
                    <option value="7">Cấp 7 (Thử thách Tử Thần Spicy King)</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors shadow-lg shadow-red-950/40 cursor-pointer"
                  >
                    Xác Nhận Đặt Bàn Ngay
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
