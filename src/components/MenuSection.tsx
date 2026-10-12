import React, { useState } from 'react';
import { Plus, Flame, Check, X, Clock, Sparkles } from 'lucide-react';
import { MENU_ITEMS, TOPPINGS, SPICE_LEVELS } from '../data/menuData';
import { MenuItem, Topping } from '../types';

interface MenuSectionProps {
  onAddToCart: (
    item: MenuItem,
    spiceLevel: number,
    toppings: Topping[],
    quantity: number,
    notes: string
  ) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);

  // Customization modal state
  const [selectedSpice, setSelectedSpice] = useState<number>(3);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tất Cả Món' },
    { id: 'noodles', label: 'Mì Cay Thố Đá' },
    { id: 'hotpot', label: 'Lẩu Kim Chi & Tokbokki' },
    { id: 'sides', label: 'Món Ăn Kèm & Khai Vị' },
    { id: 'drinks', label: 'Đồ Uống Giải Cay' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const openCustomizer = (item: MenuItem) => {
    setCustomizingItem(item);
    setSelectedSpice(item.defaultSpiceLevel ?? 3);
    setSelectedToppings([]);
    setQuantity(1);
    setNotes('');
  };

  const handleToggleTopping = (topping: Topping) => {
    if (selectedToppings.some((t) => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const handleConfirmAddToCart = () => {
    if (!customizingItem) return;
    onAddToCart(customizingItem, selectedSpice, selectedToppings, quantity, notes);
    setCustomizingItem(null);
  };

  const currentTotalPrice = customizingItem
    ? (customizingItem.price +
        selectedToppings.reduce((sum, top) => sum + top.price, 0)) *
      quantity
    : 0;

  return (
    <section id="menu" className="py-16 lg:py-24 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
              <span>Thực Đơn Độc Quyền</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>100% Nguyên Liệu Tươi Sống</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Món Ăn Chữ Ký Nổi Bật
            </h2>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: 3-column desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.vietnameseName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Text Tag */}
                {item.isBestSeller && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-neutral-900/90 border border-neutral-800 text-[11px] font-semibold text-amber-400 rounded">
                    Món Bán Chạy
                  </div>
                )}
                {item.isSignature && !item.isBestSeller && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-neutral-900/90 border border-neutral-800 text-[11px] font-semibold text-red-400 rounded">
                    Chữ Ký Naga
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="tabular-nums">Nấu trong {item.prepTimeMinutes} phút</span>
                  </span>
                  {item.category === 'noodles' && (
                    <span className="flex items-center gap-1 text-red-400 font-medium">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      7 Cấp Độ
                    </span>
                  )}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors font-display">
                      {item.vietnameseName}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Ingredients note */}
                  <div className="text-[11px] text-neutral-500 mb-4 truncate">
                    Nguyên liệu: {item.ingredients.slice(0, 4).join(', ')}...
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-white font-display tabular-nums">
                      {item.price.toLocaleString('vi-VN')} đ
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-neutral-500 line-through tabular-nums">
                        {item.originalPrice.toLocaleString('vi-VN')} đ
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openCustomizer(item)}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-red-950/40"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Chọn Món</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customizer Modal */}
      {customizingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-6">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {customizingItem.vietnameseName}
                </h3>
                <div className="text-xs text-red-400 font-semibold tabular-nums mt-0.5">
                  Giá gốc: {customizingItem.price.toLocaleString('vi-VN')} đ
                </div>
              </div>
              <button
                onClick={() => setCustomizingItem(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Spice Level Selection (if noodles or hotpot) */}
            {(customizingItem.category === 'noodles' || customizingItem.category === 'hotpot') && (
              <div className="mt-5">
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  1. Chọn Cấp Độ Cay (0 – 7)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {SPICE_LEVELS.map((sp) => {
                    const isSelected = selectedSpice === sp.level;
                    return (
                      <button
                        key={sp.level}
                        type="button"
                        onClick={() => setSelectedSpice(sp.level)}
                        className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-red-950/80 border-red-500 text-white font-bold ring-1 ring-red-500'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <div className="text-[11px] text-neutral-400">Cấp {sp.level}</div>
                        <div className="text-xs truncate" style={{ color: sp.colorHex }}>
                          {sp.shu.split(' ')[0]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Topping Selection (if noodles or hotpot) */}
            {(customizingItem.category === 'noodles' || customizingItem.category === 'hotpot') && (
              <div className="mt-6">
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  2. Thêm Topping Yêu Thích
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TOPPINGS.map((topping) => {
                    const isChosen = selectedToppings.some((t) => t.id === topping.id);
                    return (
                      <button
                        key={topping.id}
                        type="button"
                        onClick={() => handleToggleTopping(topping)}
                        className={`p-2.5 rounded-lg border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                          isChosen
                            ? 'bg-neutral-800 border-red-500/80 text-white'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <div>
                          <div className="font-medium">{topping.name}</div>
                          <div className="text-[11px] text-neutral-400 tabular-nums">
                            +{topping.price.toLocaleString('vi-VN')} đ
                          </div>
                        </div>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChosen
                              ? 'bg-red-600 border-red-500 text-white'
                              : 'border-neutral-700'
                          }`}
                        >
                          {isChosen && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special Requests / Notes */}
            <div className="mt-6">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                3. Ghi Chú Riêng Cho Đầu Bếp
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: Không lấy hành lá, xin thêm ớt hiểm, mì nấu mềm..."
                className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Quantity Stepper & Total */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-400">Số lượng:</span>
                <div className="flex items-center border border-neutral-800 rounded-lg bg-neutral-950">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2.5 py-1 text-xs text-neutral-400 hover:text-white cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-semibold text-white tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2.5 py-1 text-xs text-neutral-400 hover:text-white cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[11px] text-neutral-400">Tổng cộng:</div>
                <div className="text-lg font-bold text-red-500 tabular-nums">
                  {currentTotalPrice.toLocaleString('vi-VN')} đ
                </div>
              </div>
            </div>

            {/* Confirm button */}
            <div className="mt-5">
              <button
                type="button"
                onClick={handleConfirmAddToCart}
                className="w-full py-3 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 transition-colors cursor-pointer shadow-lg shadow-red-950/50"
              >
                Thêm Vào Giỏ Món
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
