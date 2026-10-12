import { SpiceLevel, MenuItem, Topping, BusinessTier } from '../types';
import heroImg from '../assets/images/hero_korean_spicy_noodle_1791770779533.jpg';
import seafoodImg from '../assets/images/menu_seafood_spicy_noodle_1791770793497.jpg';
import beefCheeseImg from '../assets/images/menu_beef_cheese_noodle_1791770807145.jpg';
import interiorImg from '../assets/images/restaurant_franchise_interior_1791770819150.jpg';

export const HERO_IMAGE = heroImg;
export const SEAFOOD_IMAGE = seafoodImg;
export const BEEF_CHEESE_IMAGE = beefCheeseImg;
export const RESTAURANT_INTERIOR_IMAGE = interiorImg;

export const SPICE_LEVELS: SpiceLevel[] = [
  {
    level: 0,
    name: 'Cấp 0: Thanh Ngọt Kim Chi',
    shu: '0 SHU',
    description: 'Nước dùng ninh xương 12h kết hợp kim chi muối chua dịu thanh, không cay, an toàn cho trẻ em.',
    characteristics: ['Nước dùng ngọt thanh', 'Không chứa ớt bột', 'Thích hợp trẻ em & người không ăn cay'],
    recommendedSide: 'Nước lọc hoặc Nước gạo rang Hàn Quốc',
    popularityPct: 8,
    colorHex: '#3b82f6'
  },
  {
    level: 1,
    name: 'Cấp 1: Cay The Nhẹ Nhàng',
    shu: '1,500 - 3,000 SHU',
    description: 'Chút cay ấm đầu lưỡi từ ớt sừng Đà Lạt, kích thích nhẹ khứu giác, sảng khoái dễ chịu.',
    characteristics: ['The nhẹ đầu lưỡi', 'Vị chua ngọt hài hòa', 'Khởi đầu lý tưởng cho người mới thử'],
    recommendedSide: 'Trà đào cam sả',
    popularityPct: 15,
    colorHex: '#10b981'
  },
  {
    level: 2,
    name: 'Cấp 2: Cay Nồng Chuẩn Vị',
    shu: '5,000 - 8,000 SHU',
    description: 'Tương đương ớt chỉ thiên chín tươi, vị cay lan tỏa trong khoang miệng, vị ngọt thịt tôn lên rõ nét.',
    characteristics: ['Ấm nồng vòm họng', 'Hơi râm ran trán', 'Đậm đà vị súp hầm kim chi'],
    recommendedSide: 'Trà sữa thái đỏ',
    popularityPct: 24,
    colorHex: '#eab308'
  },
  {
    level: 3,
    name: 'Cấp 3: Thách Thức Vị Giác (Bán Chạy Nhất)',
    shu: '15,000 - 25,000 SHU',
    description: 'Cấp độ vàng chuẩn mì cay 7 cấp độ. 65% thực khách trẻ tại Việt Nam lựa chọn mức này để toát mồ hôi giải tỏa căng thẳng.',
    characteristics: ['Toát mồ hôi sảng khoái', 'Ớt bột Hàn Quốc & ớt hiểm', 'Hít hà đã miệng'],
    recommendedSide: 'Sữa tươi trân châu đá lạnh',
    popularityPct: 32,
    dangerBadge: 'Bán chạy nhất',
    colorHex: '#f97316'
  },
  {
    level: 4,
    name: 'Cấp 4: Rực Lửa Say Mê',
    shu: '45,000 - 70,000 SHU',
    description: 'Đậm đặc tinh chất ớt Habanero. Vị cay xộc lên mũi, môi đỏ bừng, thích hợp cho tín đồ mê ăn cay nặng đô.',
    characteristics: ['Môi nóng ran rực rỡ', 'Nước dùng sánh đặc ớt hiểm', 'Thử thách độ lì lợm'],
    recommendedSide: 'Sữa tươi kem béo hoặc Kem tươi',
    popularityPct: 12,
    colorHex: '#ef4444'
  },
  {
    level: 5,
    name: 'Cấp 5: Bùng Nổ Giác Quan',
    shu: '120,000 - 250,000 SHU',
    description: 'Sử dụng ớt ma Ghost Pepper. Hơi thở nóng bừng, cảm giác tê liệt đầu lưỡi thoáng qua, adrenalin tăng vọt.',
    characteristics: ['Tê rần khoang miệng', 'Chảy nước mắt hạnh phúc', 'Cần chuẩn bị khăn giấy & sữa tươi'],
    recommendedSide: 'Sữa chua dẻo & Nước đá',
    popularityPct: 6,
    colorHex: '#dc2626'
  },
  {
    level: 6,
    name: 'Cấp 6: Bốc Hỏa Đỉnh Cao',
    shu: '500,000 - 800,000 SHU',
    description: 'Ớt Bọ Cạp Trinidad Moruga. Chỉ dành cho thực khách có tửu lượng cay chuyên nghiệp, phục vụ kèm ly sữa đá miễn phí.',
    characteristics: ['Cay bùng nổ tức thì', 'Được nhân viên phục vụ đặc biệt', 'Không dùng cho người đau dạ dày'],
    recommendedSide: 'Sữa đặc có đá chuyên dụng',
    popularityPct: 2,
    dangerBadge: 'Cảnh báo cay gắt',
    colorHex: '#b91c1c'
  },
  {
    level: 7,
    name: 'Cấp 7: Tử Thần Carolina Reaper',
    shu: '1,500,000 - 2,200,000 SHU',
    description: 'Thử thách huyền thoại "Spicy King". Ký cam kết tự nguyện, ăn hết cả mì và nước trong 15 phút nhận Thưởng 500k + Ghi danh Bảng Vàng.',
    characteristics: ['2.2 triệu Scoville hỏa ngục', 'Thử thách nhận thưởng lớn', 'Đạt danh hiệu Vua Ăn Cay'],
    recommendedSide: '2 Hộp sữa tươi lạnh kèm sẵn',
    popularityPct: 1,
    dangerBadge: 'Thử Thách Spicy King',
    colorHex: '#7f1d1d'
  }
];

export const TOPPINGS: Topping[] = [
  { id: 'top-beef', name: 'Ba Chỉ Bò Mỹ Cuộn (70g)', price: 20000, category: 'meat' },
  { id: 'top-shrimp', name: 'Tôm Sú Biển Tươi (3 con)', price: 22000, category: 'seafood' },
  { id: 'top-squid', name: 'Mực Vòng & Bạch Tuộc Baby', price: 25000, category: 'seafood' },
  { id: 'top-cheese', name: 'Phô Mai Mozzarella Kéo Sợi', price: 15000, category: 'cheese' },
  { id: 'top-egg', name: 'Trứng Lòng Đào Onsen', price: 10000, category: 'meat' },
  { id: 'top-sausage', name: 'Xúc Xích Đức Xông Khói', price: 12000, category: 'meat' },
  { id: 'top-mushroom', name: 'Nấm Kim Châm Giòn Ngọt', price: 8000, category: 'veggie' },
  { id: 'top-fishcake', name: 'Chả Cá Hàn Quốc Odeng', price: 12000, category: 'seafood' }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Spicy Seafood Korean Pot',
    vietnameseName: 'Mì Cay Hải Sản Thố Đá',
    category: 'noodles',
    price: 59000,
    originalPrice: 69000,
    image: SEAFOOD_IMAGE,
    description: 'Tôm sú tươi giòn ngọt, mực cắt khoanh, bạch tuộc baby, chả cá Hàn Quốc, nấm kim châm nấu sôi trong thố đất giữ nhiệt 25 phút.',
    defaultSpiceLevel: 3,
    isBestSeller: true,
    isSignature: true,
    ingredients: ['Tôm sú biển', 'Mực ống', 'Bạch tuộc baby', 'Mì Koreno sợi to dai', 'Nước dùng hầm xương hải sản', 'Kim chi chua giòn', 'Rau mùi & cải thìa'],
    prepTimeMinutes: 4,
    cogsPct: 31
  },
  {
    id: 'm2',
    name: 'Spicy US Beef & Melted Cheese',
    vietnameseName: 'Mì Cay Bò Mỹ Phô Mai Kéo Sợi',
    category: 'noodles',
    price: 65000,
    originalPrice: 75000,
    image: BEEF_CHEESE_IMAGE,
    description: 'Thịt ba chỉ bò Mỹ cuộn mềm ngọt tan trong miệng, phủ lớp phô mai Mozzarella béo ngậy kéo sợi dài 50cm, vị cay bùng nổ xen lẫn vị béo.',
    defaultSpiceLevel: 2,
    isBestSeller: true,
    ingredients: ['Ba chỉ bò Mỹ 80g', 'Phô mai Mozzarella sợi', 'Nấm kim châm', 'Mì ramen Hàn Quốc', 'Nước súp kim chi cay'],
    prepTimeMinutes: 4,
    cogsPct: 33
  },
  {
    id: 'm3',
    name: 'Spicy Supreme Naga Master Pot',
    vietnameseName: 'Mì Cay Thập Cẩm Đặc Biệt Naga',
    category: 'noodles',
    price: 75000,
    originalPrice: 89000,
    image: HERO_IMAGE,
    description: 'Đầy ắp nguyên liệu cao cấp: Tôm sú, bò Mỹ cuộn, mực tươi, chả cá, xúc xích Đức, trứng lòng đào hồng đào béo ngậy, nấm tuyết.',
    defaultSpiceLevel: 3,
    isSignature: true,
    ingredients: ['Đầy đủ hải sản & bò Mỹ', 'Xúc xích Đức', 'Trứng lòng đào', 'Chả cá Hàn', 'Mì sợi to thượng hạng'],
    prepTimeMinutes: 5,
    cogsPct: 32
  },
  {
    id: 'm4',
    name: 'Spicy Pork Cartilage Kimchi',
    vietnameseName: 'Mì Cay Sườn Sụn Giòn Sần Sật',
    category: 'noodles',
    price: 55000,
    image: SEAFOOD_IMAGE,
    description: 'Sườn sụn non ninh mềm vừa tới giữ độ giòn sần sật vui miệng, thấm đẫm sốt ớt đỏ tươi cay nồng và bắp ngọt.',
    defaultSpiceLevel: 2,
    ingredients: ['Sườn sụn non heo', 'Bắp ngọt vàng', 'Kim chi cải thảo', 'Mì Koreno'],
    prepTimeMinutes: 3,
    cogsPct: 29
  },
  {
    id: 'm5',
    name: 'Dry Fire Cheese Ramen',
    vietnameseName: 'Mì Khô Sốt Phô Mai Cay Bốc Khói',
    category: 'noodles',
    price: 59000,
    image: BEEF_CHEESE_IMAGE,
    description: 'Sợi mì trộn sốt tương ớt Hàn Quốc cô đặc đậm đà, phủ ngập phô mai cheddar tan chảy, xúc xích giòn và rong biển mè rang.',
    defaultSpiceLevel: 3,
    ingredients: ['Mì trộn sợi dẹt', 'Sốt cay Samyang đặc chế', 'Phô mai kép cheddar & mozzarella', 'Xúc xích Đức', 'Rong biển vụn'],
    prepTimeMinutes: 3,
    cogsPct: 28
  },
  {
    id: 'm6',
    name: 'Korean Seafood Kimchi Hotpot 2-3P',
    vietnameseName: 'Lẩu Mì Cay Kim Chi Hải Sản (2-3 Người)',
    category: 'hotpot',
    price: 189000,
    originalPrice: 220000,
    image: SEAFOOD_IMAGE,
    description: 'Set lẩu thố đá lớn nghi ngút khói: 6 tôm sú, đĩa bò Mỹ 150g, bạch tuộc, nghêu tươi, 2 vắt mì Hàn Quốc, đĩa rau nấm tổng hợp & kim chi ăn kèm không giới hạn.',
    defaultSpiceLevel: 2,
    isBestSeller: true,
    ingredients: ['Nước lẩu hầm xương 2 lít', 'Hải sản tổng hợp 300g', 'Bò Mỹ 150g', '2 vắt mì Hàn Quốc', 'Rau nấm tươi', 'Đậu hũ non'],
    prepTimeMinutes: 6,
    cogsPct: 34
  },
  {
    id: 'm7',
    name: 'Cheese Tokbokki Lava Pot',
    vietnameseName: 'Lẩu Tokbokki Phô Mai Bò Mỹ',
    category: 'hotpot',
    price: 169000,
    image: RESTAURANT_INTERIOR_IMAGE,
    description: 'Bánh gạo mềm dẻo chuẩn Busan nấu cùng chả cá Odeng, sốt cay ngọt Gochujang, ba chỉ bò Mỹ và thác phô mai phủ bề mặt.',
    defaultSpiceLevel: 2,
    ingredients: ['Bánh gạo Tokbokki', 'Chả cá Hàn Quốc', 'Ba chỉ bò Mỹ', 'Phô mai', 'Trứng cút', 'Bắp ngọt'],
    prepTimeMinutes: 5,
    cogsPct: 30
  },
  {
    id: 'm8',
    name: 'Crispy Meat Mandu Dumplings',
    vietnameseName: 'Mandu Chiên Giòn Nhân Thịt (5 Viên)',
    category: 'sides',
    price: 35000,
    image: RESTAURANT_INTERIOR_IMAGE,
    description: 'Bánh xếp kiểu Hàn vỏ mỏng tang chiên vàng ruộm, nhân thịt heo đậm vị mộc nhĩ giòn ngọt, chấm sốt tương gừng thơm lừng.',
    ingredients: ['Vỏ bánh mandu giòn', 'Thịt heo xay tươi', 'Mộc nhĩ, miến rong', 'Hành baro'],
    prepTimeMinutes: 4,
    cogsPct: 26
  },
  {
    id: 'm9',
    name: 'Crispy Seaweed Kimbap',
    vietnameseName: 'Kimbap Chiên Xù Giòn Rụm',
    category: 'sides',
    price: 39000,
    image: RESTAURANT_INTERIOR_IMAGE,
    description: 'Cơm cuộn rong biển nhân thanh cua, xúc xích, cà rốt, dưa leo tẩm bột panko chiên vàng giòn rụm chấm xốt mayonnaise tương cà.',
    ingredients: ['Gạo dẻo Hàn Quốc', 'Rong biển', 'Xúc xích, thanh cua', 'Bột xù panko'],
    prepTimeMinutes: 3,
    cogsPct: 25
  },
  {
    id: 'm10',
    name: 'Brown Sugar Fresh Milk',
    vietnameseName: 'Sữa Tươi Trân Châu Đường Đen (Cứu Hỏa Cực Đại)',
    category: 'drinks',
    price: 28000,
    image: RESTAURANT_INTERIOR_IMAGE,
    description: 'Sữa tươi thanh trùng Đà Lạt béo ngậy kết hợp trân châu dẻo nấu đường đen mật mía. Thần dược trung hòa capsaicin làm dịu tức thì vòm họng.',
    ingredients: ['Sữa tươi thanh trùng', 'Trân châu đường đen', 'Đá bi'],
    prepTimeMinutes: 2,
    cogsPct: 24
  },
  {
    id: 'm11',
    name: 'Peach Orange Lemongrass Tea',
    vietnameseName: 'Trà Đào Cam Sả Thơm Mát',
    category: 'drinks',
    price: 28000,
    image: RESTAURANT_INTERIOR_IMAGE,
    description: 'Vị trà thanh dịu kết hợp vị cam vàng chua ngọt, sả thơm thư giãn và 3 miếng đào miếng giòn ngọt ngào.',
    ingredients: ['Trà lài ủ lạnh', 'Cam vàng', 'Sả đập dập', 'Đào ngâm giòn'],
    prepTimeMinutes: 2,
    cogsPct: 22
  },
  {
    id: 'm12',
    name: 'Traditional Roasted Rice Water',
    vietnameseName: 'Nước Gạo Hàn Quốc Rang Truyền Thống',
    category: 'drinks',
    price: 25000,
    image: RESTAURANT_INTERIOR_IMAGE,
    description: 'Vị ngọt dịu nhẹ, thanh mát bổ dưỡng từ gạo lứt rang tự nhiên, giải độc thanh nhiệt cơ thể tuyệt vời.',
    ingredients: ['Gạo rang Hàn Quốc', 'Sữa hạt', 'Đá lạnh'],
    prepTimeMinutes: 1,
    cogsPct: 20
  }
];

export const BUSINESS_TIERS: BusinessTier[] = [
  {
    id: 'tier-kiosk',
    code: 'KIOSK-EXP',
    title: 'Mô Hình Kiosk / Bếp Đám Mây (Express & Delivery)',
    tagline: 'Khởi nghiệp tinh gọn, vốn ít, tập trung giao hàng tận nơi & mang đi',
    areaRange: '15 - 30 m²',
    tableCount: '4 - 6 bàn nhanh (Chủ yếu Takeaway & ShopeeFood/Grab)',
    investmentFrom: 95000000,
    investmentTo: 140000000,
    expectedMonthlyRevenue: '120.000.000 - 180.000.000 đ',
    paybackMonths: '2.5 - 4 tháng',
    recommendedFor: 'Người mới khởi nghiệp F&B, mặt bằng nhỏ gần các trường đại học, ký túc xá, khu dân cư trẻ.',
    badge: 'Vốn thấp - Hồi vốn nhanh',
    features: [
      'Chi phí mặt bằng thấp, không cần trang trí cầu kỳ',
      'Được nhượng quyền trọn gói thương hiệu Mì Cay Naga',
      'Chuyển giao công thức độc quyền nước cốt súp & ớt 7 cấp độ',
      'Tích hợp sẵn gian hàng ShopeeFood, GrabFood, Baemin với ưu đãi đối tác VIP',
      'Bộ bao bì thố nhôm giữ nhiệt chống tràn độc quyền bảo quản nóng 45 phút'
    ],
    equipmentIncluded: [
      'Bếp từ đôi công nghiệp 3500W chuyên dụng',
      'Tủ đông mát đứng 4 cánh inox 1000L',
      '12 Thố đất nung truyền thống cỡ vừa',
      'Máy in hóa đơn nhiệt + Phần mềm POS quản lý từ xa',
      'Biển hiệu hộp đèn LED nhận diện thương hiệu tiêu chuẩn'
    ]
  },
  {
    id: 'tier-standard',
    code: 'STANDARD-PRO',
    title: 'Mô Hình Nhà Hàng Tiêu Chuẩn (Standard Dining Store)',
    tagline: 'Mô hình hiệu quả nhất, tối ưu 80% lợi nhuận từ ăn tại chỗ & gia đình',
    areaRange: '60 - 90 m²',
    tableCount: '14 - 20 bàn (55 - 80 ghế ngồi, điều hòa máy lạnh)',
    investmentFrom: 280000000,
    investmentTo: 380000000,
    expectedMonthlyRevenue: '250.000.000 - 420.000.000 đ',
    paybackMonths: '4 - 6 tháng',
    recommendedFor: 'Nhà đầu tư có vốn trung bình, mặt bằng phố sầm uất, tuyến đường ăn uống tại các quận trung tâm.',
    badge: 'Mô hình Bán Chạy Nhất (85% Chọn)',
    features: [
      'Thiết kế 3D toàn diện chuẩn phong cách Hàn Quốc hiện đại ấm cúng',
      'Chuyển giao 100% bí quyết bếp mì cay + lẩu kim chi + đồ ăn vặt',
      'Đào tạo nhân sự 1-1 tại quán trong 7 ngày khai trương',
      'Chiến dịch Marketing khai trương (KOL/TikToker ẩm thực review tại chỗ)',
      'Hỗ trợ phân tích điểm kinh doanh (Thẩm định lưu lượng khách & mặt bằng miễn phí)',
      'Cung cấp nguyên liệu giá sỉ cam kết rẻ hơn thị trường 15%'
    ],
    equipmentIncluded: [
      'Dàn bếp họng thố công nghiệp 6 họng đồng thời',
      'Hệ thống hút khói âm và hút mùi cục bộ bếp',
      'Bộ 40 thố đất cao cấp giữ nhiệt 25 phút',
      'Nội thất bàn ghế gỗ sồi ấm áp tích hợp bếp từ âm bàn cho lẩu',
      'Hệ thống âm thanh, POS chạm, máy quét mã VietQR tự động',
      'Bộ đồng phục, tạp dề, menu mica ép sang trọng'
    ]
  },
  {
    id: 'tier-flagship',
    code: 'FLAGSHIP-VIP',
    title: 'Mô Hình Đại Sứ Flagship / Tổ Hợp Lẩu & Mì Cay Cao Cấp',
    tagline: 'Nhà hàng 2 tầng đẳng cấp, kết hợp buffet topping & phòng VIP',
    areaRange: '120 - 220 m²',
    tableCount: '28 - 45 bàn (120 - 180 khách, có phòng riêng)',
    investmentFrom: 650000000,
    investmentTo: 850000000,
    expectedMonthlyRevenue: '550.000.000 - 950.000.000 đ',
    paybackMonths: '6 - 8 tháng',
    recommendedFor: 'Chủ đầu tư kinh nghiệm, chuỗi F&B tại các thành phố lớn (Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ, Hải Phòng).',
    badge: 'Doanh thu & Vị thế tối đa',
    features: [
      'Độc quyền khu vực (bán kính bảo hộ 3km không mở cơ sở thứ 2)',
      'Menu mở rộng: Combo Lẩu nướng không khói kết hợp mì cay 7 cấp độ',
      'Quầy Bar tự chọn Buffet Kim chi & Topping không giới hạn',
      'Hỗ trợ giám đốc vận hành cắm chốt trong 30 ngày đầu tiên',
      'Phần mềm ERP quản lý kho định lượng tự động sai số <1%',
      'Chiến dịch truyền thông báo chí & chạy Ads đa nền tảng toàn diện'
    ],
    equipmentIncluded: [
      'Hệ thống bếp công nghiệp Inox 304 chuẩn HACCP quốc tế',
      'Quầy buffet giữ lạnh topping đá tuyết 12 khay',
      '80 Bộ thố đất nung chuyên dụng phủ men chống dính cao cấp',
      'Nội thất cao cấp, vách ngăn gỗ, hệ thống đèn thả kiến trúc nghệ thuật',
      'Phần mềm gọi món tại bàn bằng mã QR (Order on Table)',
      'Kho lạnh bảo quản thịt bò và hải sản tươi sống tiêu chuẩn'
    ]
  }
];

export const FRANCHISE_METRICS = {
  activeLocations: 168,
  avgPaybackMonths: 4.8,
  avgNetProfitMargin: 31.5,
  dailyBowlsPerStoreAvg: 280,
  citiesCovered: 38,
  satisfactionRate: 98.6
};

export const TESTIMONIALS = [
  {
    author: 'Nguyễn Thị Thu Lan',
    role: 'Chủ cơ sở Mì Cay Naga - Cầu Giấy, Hà Nội',
    storeType: 'Mô hình Tiêu Chuẩn (75m²)',
    revenue: 'Doanh thu trung bình 285 triệu/tháng',
    quote: 'Ban đầu tôi rất lo vì chưa từng làm bếp quán ăn. Nhưng công thức nước cốt đóng gói sẵn của Naga quá chuẩn, nhân viên chỉ việc cân đúng ml nước là ra vị cay thơm chuẩn đét trong 3 phút. Tôi đã thu hồi toàn bộ vốn sau 4 tháng rưỡi.',
    rating: 5
  },
  {
    author: 'Trần Văn Hoàng',
    role: 'Chủ 2 cơ sở Naga - Quận 7 & TP. Thủ Đức, TP.HCM',
    storeType: 'Mô hình Tiêu Chuẩn & Kiosk Delivery',
    revenue: 'Tổng doanh thu 520 triệu/tháng',
    quote: 'Mì cay là món có lượng khách trung thành cực lớn, đặc biệt các bạn trẻ và dân văn phòng ăn quanh năm không phụ thuộc mùa. Khách đặt qua ShopeeFood chiếm gần 40% doanh thu mỗi ngày nhờ giải pháp thố nhôm giữ nhiệt.',
    rating: 5
  },
  {
    author: 'Lê Hoàng Tuấn',
    role: 'Chủ cơ sở Mì Cay Naga - Hải Châu, Đà Nẵng',
    storeType: 'Mô hình Flagship (140m²)',
    revenue: 'Doanh thu 680 triệu/tháng mùa cao điểm',
    quote: 'Đội ngũ hỗ trợ khảo sát mặt bằng và đào tạo khai trương cực kỳ tận tâm. Thử thách Mì Cay Cấp 7 tạo hiệu ứng viral tự nhiên trên TikTok mà tôi hầu như không mất tiền quảng cáo vẫn kín bàn mỗi tối.',
    rating: 5
  }
];

export const SPICE_CHALLENGE_WINNERS = [
  { name: 'Hoàng Long (Gamer)', city: 'Hà Nội', time: '8 phút 12 giây', date: 'Tháng 9/2026', reward: '500.000đ + Cúp Spicy King' },
  { name: 'Ngọc Mai (Food Reviewer)', city: 'TP.HCM', time: '11 phút 45 giây', date: 'Tháng 8/2026', reward: '500.000đ + Cúp Spicy King' },
  { name: 'Thanh Tùng (Gymer)', city: 'Đà Nẵng', time: '7 phút 50 giây', date: 'Tháng 10/2026', reward: '500.000đ + Cúp Spicy King' },
  { name: 'Khánh Linh (Sinh viên)', city: 'Cần Thơ', time: '13 phút 02 giây', date: 'Tháng 7/2026', reward: '500.000đ + Cúp Spicy King' }
];
