// 全域設定檔
const WEB_APP_URL = "GAS_WEB_APP_URL";

// 🌟 全域品項設定 (現場盤點與出入庫)
const products = [
    { name: "薑黃優格雞腿", icon: "🍗", safe: 10, unit: "包" },
    { name: "蒜香醬油雞腿", icon: "🍗", safe: 10, unit: "包" },
    { name: "原味雞胸", icon: "🐔", safe: 10, unit: "包" },
    { name: "羅勒雞胸", icon: "🌿", safe: 10, unit: "包" },
    { name: "柚子雞胸", icon: "🍋", safe: 10, unit: "包" },
    { name: "山葵雞腿", icon: "🌱", safe: 10, unit: "包" },
    { name: "當歸雞胸", icon: "🏺", safe: 10, unit: "包" },
    { name: "川味雞胸", icon: "🌶️", safe: 10, unit: "包" },
    { name: "素宮保雞丁", icon: "🐤", safe: 10, unit: "包" },
    { name: "素梅乾筍絲", icon: "🎍", safe: 10, unit: "包" },
    { name: "赤玉牛肉煮", icon: "🍲", safe: 10, unit: "包" },
    { name: "牛腱", icon: "🥩", safe: 10, unit: "包" },
    { name: "雲耳露", icon: "🥤", safe: 10, unit: "瓶" },
    { name: "花米", icon: "🥦", safe: 10, unit: "包" },
    { name: "小清肉", icon: "🥓", safe: 10, unit: "包" },
    { name: "大清肉", icon: "🍖", safe: 10, unit: "包" },
    { name: "鮭魚", icon: "🐠", safe: 10, unit: "件" },
    { name: "洋蔥", icon: "🧅", safe: 10, unit: "包" },
    { name: "薑汁醬", icon: "🫚", safe: 10, unit: "包" },
    { name: "泰式醬", icon: "🍯", safe: 10, unit: "包" },
    { name: "松阪豬湯", icon: "🍲", safe: 10, unit: "包" },
    { name: "藥膳雞湯", icon: "🥣", safe: 10, unit: "包" },
    { name: "松阪豬肉", icon: "🐷", safe: 10, unit: "片" },
    { name: "蒜末", icon: "🧄", safe: 10, unit: "包" },
    { name: "薑絲", icon: "🫚", safe: 10, unit: "包" },
    { name: "胡蘿蔔絲", icon: "🥕", safe: 10, unit: "包" },
    { name: "毛豆莢", icon: "🫛", safe: 10, unit: "包" },
    { name: "雞米花", icon: "🍤", safe: 10, unit: "包" }
];

// 🌟 出菜品項設定 (專屬於出菜盤點庫存表)
const servingProducts = [
    { name: "高麗菜", icon: "🥬", unit: "包" },
    { name: "綠菜", icon: "🥦", unit: "把" }
];

// 🌟 全域星期設定
const days = [
    { name: "(一)", color: "#E09C9C" }, 
    { name: "(二)", color: "#DAB763" }, 
    { name: "(三)", color: "#8BABD0" }, 
    { name: "(四)", color: "#D8A375" }, 
    { name: "(五)", color: "#95AD8E" }, 
    { name: "(六)", color: "#A897A6" }, 
    { name: "(日)", color: "#8BABD0" }  
];
