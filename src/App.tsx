/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpiceLevelsSection } from './components/SpiceLevelsSection';
import { MenuSection } from './components/MenuSection';
import { BusinessModelsSection } from './components/BusinessModelsSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { FranchiseAdvantageSection } from './components/FranchiseAdvantageSection';
import { ReviewsAndHallOfFameSection } from './components/ReviewsAndHallOfFameSection';
import { BookingAndFranchiseModal } from './components/BookingAndFranchiseModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { MenuItem, Topping, CartItem, BusinessTier } from './types';
import { PhoneCall, Calendar, ShoppingBag, Flame } from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('hero');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<'franchise' | 'booking'>('franchise');
  const [selectedTierForModal, setSelectedTierForModal] = useState<BusinessTier | null>(null);

  // Add item to cart with specific spice and toppings
  const handleAddToCart = (
    item: MenuItem,
    spiceLevel: number,
    toppings: Topping[],
    quantity: number,
    notes: string
  ) => {
    const toppingsTotal = toppings.reduce((sum, t) => sum + t.price, 0);
    const unitPrice = item.price + toppingsTotal;
    const totalPrice = unitPrice * quantity;

    const newCartItem: CartItem = {
      cartItemId: `${item.id}-${spiceLevel}-${toppings.map((t) => t.id).join('_')}-${Date.now()}`,
      menuItem: item,
      selectedSpiceLevel: spiceLevel,
      selectedToppings: toppings,
      quantity,
      notes,
      totalPrice,
    };

    setCartItems((prev) => [...prev, newCartItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          const toppingsTotal = item.selectedToppings.reduce((sum, t) => sum + t.price, 0);
          const unitPrice = item.menuItem.price + toppingsTotal;
          return {
            ...item,
            quantity: newQty,
            totalPrice: unitPrice * newQty,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenFranchiseModal = (tier?: BusinessTier) => {
    setSelectedTierForModal(tier || null);
    setModalTab('franchise');
    setIsModalOpen(true);
  };

  const handleOpenBookingModal = () => {
    setModalTab('booking');
    setIsModalOpen(true);
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('menu');
  };

  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('roi-calculator');
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Header */}
      <Header
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFranchiseModal={() => handleOpenFranchiseModal()}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToMenu={scrollToMenu}
          onScrollToCalculator={scrollToCalculator}
          onOpenFranchiseModal={() => handleOpenFranchiseModal()}
        />

        {/* 2. Bản Đồ 7 Cấp Độ Cay (Scoville Heat Indicator) */}
        <SpiceLevelsSection onSelectSpiceForMenu={() => scrollToMenu()} />

        {/* 3. Thực Đơn Món Ăn & Tùy Chọn Topping */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* 4. 3 Mô Hình Kinh Doanh F&B & Nhượng Quyền */}
        <BusinessModelsSection
          onSelectTier={(tier) => handleOpenFranchiseModal(tier)}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* 5. Bảng Tính Lợi Nhuận & Hoàn Vốn (Financial ROI Simulator) */}
        <RoiCalculatorSection />

        {/* 6. Bí Quyết Vận Hành & Chuỗi Cung Ứng Chuẩn Hóa */}
        <FranchiseAdvantageSection />

        {/* 7. Đánh Giá Chủ Quán & Bảng Vàng Cấp 7 */}
        <ReviewsAndHallOfFameSection />
      </main>

      {/* Floating Action Strip for Fast Conversion */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 px-3 py-2 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md shadow-2xl flex items-center gap-3">
        <button
          onClick={handleOpenBookingModal}
          className="px-3.5 py-2 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-red-400" />
          <span>Đặt Bàn Quán</span>
        </button>

        <button
          onClick={() => handleOpenFranchiseModal()}
          className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-red-950/40"
        >
          <Flame className="w-3.5 h-3.5 fill-current" />
          <span>Tư Vấn Mở Quán</span>
        </button>

        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="px-3 py-2 text-xs font-bold text-emerald-400 bg-neutral-950 border border-emerald-500/30 rounded-xl flex items-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="tabular-nums">({totalCartCount})</span>
          </button>
        )}
      </div>

      {/* Modals & Drawers */}
      <BookingAndFranchiseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTab={modalTab}
        preSelectedTier={selectedTierForModal}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
