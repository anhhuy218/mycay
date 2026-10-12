import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Flame, ShoppingBag, CheckCircle, ArrowRight, QrCode } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'delivery'>('dine-in');
  const [tableNumber, setTableNumber] = useState('Bàn số 06');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountPct, setDiscountPct] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const discountAmount = (rawSubtotal * discountPct) / 100;
  const finalTotal = rawSubtotal - discountAmount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'KHAITRUONG10' || promoCode.trim().toUpperCase() === 'NAGA10') {
      setDiscountPct(10);
    } else {
      alert('Mã giảm giá không hợp lệ. Hãy thử: KHAITRUONG10 để giảm 10%!');
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    const generatedId = `NG-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);
  };

  const handleReset = () => {
    onClearCart();
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
      <div className="bg-neutral-900 border-l border-neutral-800 w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-500" />
            <h3 className="text-base font-bold text-white font-display">
              Giỏ Món Của Bạn
            </h3>
            <span className="text-xs text-neutral-400 tabular-nums">
              ({items.length} món)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderConfirmed ? (
          /* Confirmation State */
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white font-display">
              Đơn Hàng #{orderId} Đã Được Xác Nhận!
            </h4>
            <p className="text-xs text-neutral-300 max-w-xs leading-relaxed">
              Bếp đang nổi lửa nấu thố mì nóng hổi trong 3-4 phút.
              {orderType === 'dine-in'
                ? ` Nhân viên sẽ mang ra tận ${tableNumber}.`
                : ' Đơn vị giao hàng đang trên đường đến.'}
            </p>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 w-full text-left text-xs space-y-2">
              <div className="flex justify-between text-neutral-400">
                <span>Hình thức:</span>
                <span className="text-white font-medium">
                  {orderType === 'dine-in' ? 'Ăn tại chỗ' : 'Giao hàng tận nơi'}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Tổng thanh toán:</span>
                <span className="text-red-400 font-bold tabular-nums">
                  {finalTotal.toLocaleString('vi-VN')} đ
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Trạng thái:</span>
                <span className="text-emerald-400 font-medium">Bếp đang nấu</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors cursor-pointer"
            >
              Hoàn Tất & Đặt Món Mới
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="text-sm font-medium text-white">Giỏ món đang trống</div>
            <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
              Hãy chọn các món mì cay hải sản, bò Mỹ hoặc đồ uống giải cay trong thực đơn để thêm vào đây.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              Xem Thực Đơn Ngay
            </button>
          </div>
        ) : (
          /* Cart items list */
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* Dine-in vs Delivery Toggle */}
            <div className="flex p-1 bg-neutral-950 rounded-lg border border-neutral-800 text-xs">
              <button
                type="button"
                onClick={() => setOrderType('dine-in')}
                className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  orderType === 'dine-in'
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Ăn Tại Quán (Dine-in)
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  orderType === 'delivery'
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Giao Hàng (Thố Nhôm Nóng)
              </button>
            </div>

            {orderType === 'dine-in' ? (
              <div className="text-xs flex items-center gap-2">
                <span className="text-neutral-400">Vị trí ngồi:</span>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="px-2 py-1 rounded bg-neutral-950 border border-neutral-800 text-white text-xs w-28"
                  placeholder="Bàn số 01"
                />
              </div>
            ) : (
              <div className="space-y-2 text-xs">
                <input
                  type="text"
                  placeholder="Địa chỉ giao hàng chi tiết..."
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại nhận hàng..."
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs"
                />
              </div>
            )}

            {/* List */}
            <div className="space-y-3 pt-2">
              {items.map((cartItem) => (
                <div
                  key={cartItem.cartItemId}
                  className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {cartItem.menuItem.vietnameseName}
                      </h4>
                      {cartItem.menuItem.category === 'noodles' && (
                        <div className="text-red-400 font-medium flex items-center gap-1 mt-0.5">
                          <Flame className="w-3 h-3 fill-current" />
                          <span>Cấp độ {cartItem.selectedSpiceLevel}</span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => onRemoveItem(cartItem.cartItemId)}
                      className="text-neutral-500 hover:text-red-400 p-1 cursor-pointer transition-colors"
                      title="Xóa món"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Toppings list */}
                  {cartItem.selectedToppings.length > 0 && (
                    <div className="text-[11px] text-neutral-400 pl-2 border-l border-neutral-800">
                      Topping: {cartItem.selectedToppings.map((t) => t.name).join(', ')}
                    </div>
                  )}

                  {/* Notes */}
                  {cartItem.notes && (
                    <div className="text-[11px] text-neutral-400 italic">
                      Ghi chú: "{cartItem.notes}"
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                    <div className="flex items-center border border-neutral-800 rounded bg-neutral-900">
                      <button
                        onClick={() =>
                          onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)
                        }
                        className="px-2 py-0.5 text-neutral-400 hover:text-white cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 font-bold text-white tabular-nums">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)
                        }
                        className="px-2 py-0.5 text-neutral-400 hover:text-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div className="font-bold text-white tabular-nums">
                      {cartItem.totalPrice.toLocaleString('vi-VN')} đ
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo code box */}
            <div className="pt-2 flex gap-2">
              <input
                type="text"
                placeholder="Nhập mã: KHAITRUONG10"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 uppercase"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-3 py-2 text-xs font-semibold bg-neutral-800 text-neutral-200 rounded hover:bg-neutral-700 cursor-pointer"
              >
                Áp Dụng
              </button>
            </div>
            {discountPct > 0 && (
              <div className="text-[11px] text-emerald-400 font-medium">
                Đã giảm 10% cho đơn hàng khai trương!
              </div>
            )}
          </div>
        )}

        {/* Footer Checkout Summary */}
        {!orderConfirmed && items.length > 0 && (
          <div className="p-5 border-t border-neutral-800 bg-neutral-950/80 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Tạm tính ({items.length} món):</span>
                <span className="text-white tabular-nums">
                  {rawSubtotal.toLocaleString('vi-VN')} đ
                </span>
              </div>
              {discountPct > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Giảm giá ({discountPct}%):</span>
                  <span className="tabular-nums">
                    -{discountAmount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
                <span>Tổng thanh toán:</span>
                <span className="text-red-500 font-extrabold text-base tabular-nums">
                  {finalTotal.toLocaleString('vi-VN')} đ
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/40"
            >
              <span>Xác Nhận Gọi Món & Bắt Đầu Nấu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
