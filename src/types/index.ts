export interface SpiceLevel {
  level: number;
  name: string;
  shu: string; // Scoville Heat Units
  description: string;
  characteristics: string[];
  recommendedSide: string;
  popularityPct: number;
  dangerBadge?: string;
  colorHex: string;
}

export interface Topping {
  id: string;
  name: string;
  price: number;
  category: 'meat' | 'seafood' | 'cheese' | 'veggie';
}

export interface MenuItem {
  id: string;
  name: string;
  vietnameseName: string;
  category: 'noodles' | 'hotpot' | 'sides' | 'drinks';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  defaultSpiceLevel?: number;
  isBestSeller?: boolean;
  isSignature?: boolean;
  ingredients: string[];
  prepTimeMinutes: number;
  cogsPct: number; // Cost of goods sold for business insight
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  selectedSpiceLevel: number;
  selectedToppings: Topping[];
  quantity: number;
  notes: string;
  totalPrice: number;
}

export interface BusinessTier {
  id: string;
  code: string;
  title: string;
  tagline: string;
  areaRange: string;
  tableCount: string;
  investmentFrom: number; // in VND
  investmentTo: number; // in VND
  expectedMonthlyRevenue: string;
  paybackMonths: string;
  recommendedFor: string;
  features: string[];
  equipmentIncluded: string[];
  badge?: string;
}

export interface FinancialParams {
  tableCount: number;
  turnoverRatePerTable: number; // times per day
  avgSpendPerCustomer: number; // VND
  customersPerTableAvg: number;
  monthlyRent: number; // VND
  staffCount: number;
  avgStaffSalary: number; // VND
  utilityAndMiscCost: number; // VND
  initialInvestment: number; // VND
  cogsRate: number; // percentage, default 32%
}

export interface FinancialResults {
  dailyCustomers: number;
  dailyRevenue: number;
  monthlyRevenue: number;
  monthlyCogs: number;
  monthlyLaborCost: number;
  monthlyFixedCosts: number;
  monthlyTotalExpenses: number;
  monthlyNetProfit: number;
  netMarginPct: number;
  paybackMonths: number;
  breakEvenBowlsPerDay: number;
}

export interface FranchiseInquiry {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  district?: string;
  selectedTier: string;
  budgetRange: string;
  hasPremise: boolean;
  premiseArea?: string;
  expectedLaunchDate: string;
  notes?: string;
}

export interface TableBooking {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guestCount: number;
  branch: string;
  spicePreference?: number;
  specialRequests?: string;
}
