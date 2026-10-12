import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, TrendingUp, HelpCircle, RefreshCw, CheckCircle2 } from 'lucide-react';
import { FinancialParams, FinancialResults } from '../types';

export const RoiCalculatorSection: React.FC = () => {
  // Configurable parameters with realistic Vietnamese F&B defaults
  const [tableCount, setTableCount] = useState<number>(16);
  const [turnoverRate, setTurnoverRate] = useState<number>(4.5); // turns per day
  const [avgSpend, setAvgSpend] = useState<number>(75000); // 75k VND/person
  const [customersPerTable, setCustomersPerTable] = useState<number>(2.2); // 2.2 people per table
  const [monthlyRent, setMonthlyRent] = useState<number>(22000000); // 22 mil VND
  const [staffCount, setStaffCount] = useState<number>(5);
  const [avgStaffSalary, setAvgStaffSalary] = useState<number>(7000000); // 7 mil VND/month
  const [utilityCost, setUtilityCost] = useState<number>(9000000); // 9 mil electricity & water
  const [initialInvestment, setInitialInvestment] = useState<number>(320000000); // 320 mil VND
  const cogsRate = 0.32; // 32% food cost

  // Presets
  const applyPreset = (preset: 'kiosk' | 'standard' | 'flagship') => {
    if (preset === 'kiosk') {
      setTableCount(6);
      setTurnoverRate(6.0); // high delivery turnover
      setAvgSpend(65000);
      setCustomersPerTable(1.8);
      setMonthlyRent(9000000);
      setStaffCount(3);
      setAvgStaffSalary(6500000);
      setUtilityCost(4500000);
      setInitialInvestment(120000000);
    } else if (preset === 'standard') {
      setTableCount(16);
      setTurnoverRate(4.5);
      setAvgSpend(75000);
      setCustomersPerTable(2.2);
      setMonthlyRent(22000000);
      setStaffCount(5);
      setAvgStaffSalary(7000000);
      setUtilityCost(9000000);
      setInitialInvestment(320000000);
    } else if (preset === 'flagship') {
      setTableCount(32);
      setTurnoverRate(4.0);
      setAvgSpend(95000);
      setCustomersPerTable(2.6);
      setMonthlyRent(45000000);
      setStaffCount(10);
      setAvgStaffSalary(7500000);
      setUtilityCost(18000000);
      setInitialInvestment(720000000);
    }
  };

  const results: FinancialResults = useMemo(() => {
    const dailyCustomers = Math.round(tableCount * turnoverRate * customersPerTable);
    const dailyRevenue = dailyCustomers * avgSpend;
    const monthlyRevenue = dailyRevenue * 30;

    const monthlyCogs = monthlyRevenue * cogsRate;
    const monthlyLaborCost = staffCount * avgStaffSalary;
    const monthlyFixedCosts = monthlyRent + utilityCost + 5000000; // 5mil marketing & misc
    const monthlyTotalExpenses = monthlyCogs + monthlyLaborCost + monthlyFixedCosts;
    const monthlyNetProfit = Math.max(0, monthlyRevenue - monthlyTotalExpenses);

    const netMarginPct = monthlyRevenue > 0 ? (monthlyNetProfit / monthlyRevenue) * 100 : 0;
    const paybackMonths = monthlyNetProfit > 0 ? +(initialInvestment / monthlyNetProfit).toFixed(1) : 999;

    // Break-even bowls per day: Fixed costs / Contribution margin per bowl
    const contributionMarginPerCustomer = avgSpend * (1 - cogsRate);
    const dailyFixedCosts = (monthlyLaborCost + monthlyFixedCosts) / 30;
    const breakEvenBowlsPerDay = Math.ceil(dailyFixedCosts / contributionMarginPerCustomer);

    return {
      dailyCustomers,
      dailyRevenue,
      monthlyRevenue,
      monthlyCogs,
      monthlyLaborCost,
      monthlyFixedCosts,
      monthlyTotalExpenses,
      monthlyNetProfit,
      netMarginPct: +netMarginPct.toFixed(1),
      paybackMonths,
      breakEvenBowlsPerDay,
    };
  }, [
    tableCount,
    turnoverRate,
    avgSpend,
    customersPerTable,
    monthlyRent,
    staffCount,
    avgStaffSalary,
    utilityCost,
    initialInvestment,
  ]);

  return (
    <section id="roi-calculator" className="py-16 lg:py-24 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
              <span>Mô Phỏng Tài Chính Trực Quan</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Dữ Liệu Kiểm Chứng F&B</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Bảng Tính Doanh Thu & Thời Gian Thu Hồi Vốn (ROI)
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
              Điều chỉnh các thông số vận hành thực tế tại địa phương bạn để xem ước tính dòng tiền, lợi nhuận ròng hàng tháng và số tháng hoàn vốn chính xác.
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-1.5 rounded-xl shrink-0">
            <span className="text-xs text-neutral-400 px-2 hidden sm:inline">Tải Mẫu:</span>
            <button
              onClick={() => applyPreset('kiosk')}
              className="px-3 py-1.5 text-xs font-medium rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Kiosk (6 bàn)
            </button>
            <button
              onClick={() => applyPreset('standard')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 text-white transition-colors cursor-pointer"
            >
              Tiêu Chuẩn (16 bàn)
            </button>
            <button
              onClick={() => applyPreset('flagship')}
              className="px-3 py-1.5 text-xs font-medium rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Flagship (32 bàn)
            </button>
          </div>
        </div>

        {/* 2-Column Grid: Left Inputs / Right Real-time Calculations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-white font-display pb-3 border-b border-neutral-800 flex items-center justify-between">
              <span>Thông Số Kinh Doanh Đầu Vào</span>
              <span className="text-xs font-normal text-neutral-400">Đơn vị: VNĐ / Ngày</span>
            </h3>

            {/* Slider 1: Table Count */}
            <div>
              <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1.5">
                <span>Số lượng bàn phục vụ:</span>
                <span className="font-bold text-white tabular-nums">{tableCount} bàn</span>
              </div>
              <input
                type="range"
                min="4"
                max="40"
                step="1"
                value={tableCount}
                onChange={(e) => setTableCount(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>4 bàn (Kiosk)</span>
                <span>20 bàn</span>
                <span>40 bàn (Nhà hàng)</span>
              </div>
            </div>

            {/* Slider 2: Table Turnover Rate */}
            <div>
              <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1.5">
                <span>Vòng xoay bàn mỗi ngày (Turnover):</span>
                <span className="font-bold text-white tabular-nums">{turnoverRate} lượt/ngày</span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                step="0.5"
                value={turnoverRate}
                onChange={(e) => setTurnoverRate(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>2.0 (Chậm)</span>
                <span>4.5 (Tiêu chuẩn quán mì cay)</span>
                <span>8.0 (Đông khách)</span>
              </div>
            </div>

            {/* Slider 3: Average Spend per customer */}
            <div>
              <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1.5">
                <span>Mức chi tiêu trung bình / khách:</span>
                <span className="font-bold text-emerald-400 tabular-nums">
                  {avgSpend.toLocaleString('vi-VN')} đ
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="120000"
                step="5000"
                value={avgSpend}
                onChange={(e) => setAvgSpend(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>50.000 đ (Chỉ ăn mì)</span>
                <span>75.000 đ (Mì + Nước uống)</span>
                <span>120.000 đ (Lẩu/Topping)</span>
              </div>
            </div>

            {/* Slider 4: Monthly Rent */}
            <div>
              <div className="flex justify-between text-xs font-medium text-neutral-300 mb-1.5">
                <span>Chi phí thuê mặt bằng / tháng:</span>
                <span className="font-bold text-white tabular-nums">
                  {(monthlyRent / 1000000).toFixed(0)} Triệu đ
                </span>
              </div>
              <input
                type="range"
                min="8000000"
                max="60000000"
                step="2000000"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>

            {/* Staff setup */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  Số nhân sự làm việc:
                </label>
                <div className="flex items-center border border-neutral-800 rounded-lg bg-neutral-950 px-3 py-2 text-xs">
                  <span className="text-white font-bold tabular-nums mr-2">{staffCount}</span>
                  <span className="text-neutral-500 text-[11px]">người</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  Vốn đầu tư ban đầu:
                </label>
                <div className="flex items-center border border-neutral-800 rounded-lg bg-neutral-950 px-3 py-2 text-xs">
                  <span className="text-white font-bold tabular-nums mr-1">
                    {(initialInvestment / 1000000).toFixed(0)}
                  </span>
                  <span className="text-neutral-500 text-[11px]">Triệu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Big Highlight Box: Net Profit & Payback */}
            <div className="rounded-2xl border border-red-500/50 bg-gradient-to-b from-red-950/40 to-neutral-900/90 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 pb-3 border-b border-neutral-800">
                <span>Kết Quả Dự Báo Tài Chính</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Biên lãi ròng: {results.netMarginPct}%
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs text-neutral-400 mb-1">Lợi Nhuận Ròng Hàng Tháng</div>
                  <div className="text-3xl font-extrabold text-emerald-400 font-display tabular-nums">
                    {Math.round(results.monthlyNetProfit).toLocaleString('vi-VN')} đ
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    ~{(results.monthlyNetProfit / 30 / 1000000).toFixed(1)} Triệu đ / ngày
                  </div>
                </div>

                <div>
                  <div className="text-xs text-neutral-400 mb-1">Thời Gian Thu Hồi Vốn</div>
                  <div className="text-3xl font-extrabold text-amber-400 font-display tabular-nums">
                    {results.paybackMonths} Tháng
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    Dựa trên mức vốn {(initialInvestment / 1000000).toFixed(0)} triệu đ
                  </div>
                </div>
              </div>

              {/* Progress bar of revenue breakdown */}
              <div className="space-y-2 pt-2">
                <div className="text-xs text-neutral-400 flex justify-between">
                  <span>Cơ cấu dòng tiền:</span>
                  <span className="text-white font-medium tabular-nums">
                    Tổng thu: {results.monthlyRevenue.toLocaleString('vi-VN')} đ/tháng
                  </span>
                </div>
                <div className="h-3 rounded-full bg-neutral-800 overflow-hidden flex text-[10px] font-mono text-white text-center">
                  <div
                    style={{ width: `${(results.monthlyCogs / results.monthlyRevenue) * 100}%` }}
                    className="bg-blue-600 h-full"
                    title="Giá vốn nguyên liệu (COGS 32%)"
                  />
                  <div
                    style={{ width: `${(results.monthlyLaborCost / results.monthlyRevenue) * 100}%` }}
                    className="bg-amber-600 h-full"
                    title="Chi phí nhân sự"
                  />
                  <div
                    style={{ width: `${(results.monthlyFixedCosts / results.monthlyRevenue) * 100}%` }}
                    className="bg-purple-600 h-full"
                    title="Mặt bằng & Vận hành"
                  />
                  <div
                    style={{ width: `${(results.monthlyNetProfit / results.monthlyRevenue) * 100}%` }}
                    className="bg-emerald-600 h-full"
                    title="Lợi nhuận ròng"
                  />
                </div>
                <div className="flex flex-wrap gap-4 text-[11px] text-neutral-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                    Nguyên liệu: {(results.monthlyCogs / 1000000).toFixed(0)}tr (32%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
                    Nhân công: {(results.monthlyLaborCost / 1000000).toFixed(0)}tr
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block" />
                    Mặt bằng & Điện: {(results.monthlyFixedCosts / 1000000).toFixed(0)}tr
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    Lợi nhuận: {(results.monthlyNetProfit / 1000000).toFixed(0)}tr
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary KPI Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
                <div className="text-xs text-neutral-400 mb-1">Lượng khách phục vụ/ngày:</div>
                <div className="text-xl font-bold text-white font-display tabular-nums">
                  {results.dailyCustomers} Khách
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  ~{(results.dailyCustomers / tableCount).toFixed(1)} khách / bàn
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
                <div className="text-xs text-neutral-400 mb-1">Điểm hòa vốn tối thiểu:</div>
                <div className="text-xl font-bold text-amber-400 font-display tabular-nums">
                  {results.breakEvenBowlsPerDay} Suất / Ngày
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Chỉ cần bán &gt;{results.breakEvenBowlsPerDay} suất là bắt đầu có lãi
                </div>
              </div>
            </div>

            {/* Note on supply advantage */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Bảo chứng nguồn hàng:</strong> Chuỗi cung ứng Naga cung cấp ớt bột Hàn Quốc, nước sốt cô đặc và mì Koreno trực tiếp từ nhà máy giúp bạn tiết kiệm 15% so với mua ngoài chợ đầu mối.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
