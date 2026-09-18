export type DefaultDish = {
  name: string;
  wiki: string[];
  image: string;
};

export function unsplash(photoId: string) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=160&h=160&q=80`;
}

export const PLACEHOLDER_IMAGE = unsplash("photo-1546069901-ba9599a7e63c");

export const DEFAULT_ITEMS: DefaultDish[] = [
  {
    name: "Cơm tấm sườn bì",
    wiki: ["Cơm tấm"],
    image: unsplash("photo-1596797038530-2c107229654b"),
  },
  {
    name: "Bún chả",
    wiki: ["Bún chả"],
    image: unsplash("photo-1555126634-323283e090fa"),
  },
  {
    name: "Phở bò",
    wiki: ["Phở"],
    image: unsplash("photo-1582878826629-29b7ad1cdc43"),
  },
  {
    name: "Phở sốt vang",
    wiki: ["Phở"],
    image: unsplash("photo-1582878826629-29b7ad1cdc43"),
  },
  {
    name: "Bánh mì thịt",
    wiki: ["Bánh mì"],
    image: unsplash("photo-1509722747041-616f39b57569"),
  },
  {
    name: "Bún bò Huế",
    wiki: ["Bún bò Huế"],
    image: unsplash("photo-1569718212165-3a8278d5f624"),
  },
  {
    name: "Mì Quảng",
    wiki: ["Mì Quảng"],
    image: unsplash("photo-1617093727343-374698b1b08d"),
  },
  {
    name: "Cơm gà xối mỡ",
    wiki: ["Cơm gà"],
    image: unsplash("photo-1598103442097-8b704336387e"),
  },
  {
    name: "Cơm rang",
    wiki: ["Cơm chiên"],
    image: unsplash("photo-1603133872878-684f208fb84b"),
  },
  {
    name: "Cơm sườn nướng",
    wiki: ["Cơm tấm", "Sườn nướng"],
    image: unsplash("photo-1544025162-d766402d7b1d"),
  },
  {
    name: "Cơm niêu",
    wiki: ["Cơm niêu"],
    image: unsplash("photo-1512058564366-18510be2db19"),
  },
  {
    name: "Phở cuốn",
    wiki: ["Phở cuốn"],
    image: unsplash("photo-1559314809-0d155014e29e"),
  },
  {
    name: "Bún riêu cua",
    wiki: ["Bún riêu"],
    image: unsplash("photo-1559339352-11d035aa65de"),
  },
  {
    name: "Bún đậu mắm tôm",
    wiki: ["Bún đậu mắm tôm"],
    image: unsplash("photo-1563245372-f21724e3856d"),
  },
  {
    name: "Bún cá",
    wiki: ["Bún cá"],
    image: unsplash("photo-1519708227418-c8fd9a32b7a2"),
  },
  {
    name: "Bún mọc",
    wiki: ["Bún mọc"],
    image: unsplash("photo-1547592166-23acbaadb5fe"),
  },
  {
    name: "Miến trộn gà",
    wiki: ["Miến"],
    image: unsplash("photo-1585032226651-759b368d7246"),
  },
  {
    name: "Mì vằn thắn",
    wiki: ["Mì vằn thắn", "Wonton noodles"],
    image: unsplash("photo-1496116218417-1a781b1c416c"),
  },
  {
    name: "Bánh đa trộn",
    wiki: ["Bánh đa cua"],
    image: unsplash("photo-1526318896980-cf78c088247c"),
  },
  {
    name: "Bánh canh cua",
    wiki: ["Bánh canh"],
    image: unsplash("photo-1455619452474-d2be8b1e70cd"),
  },
  {
    name: "Bánh mì chảo",
    wiki: ["Bánh mì chảo"],
    image: unsplash("photo-1525351484163-7529414344d8"),
  },
  {
    name: "Bánh mì sốt vang",
    wiki: ["Bò sốt vang"],
    image: unsplash("photo-1604908176997-125f25cc6f3d"),
  },
  {
    name: "Nem nướng Nha Trang",
    wiki: ["Nem nướng"],
    image: unsplash("photo-1555939594-58d7cb561ad1"),
  },
];

export function makeId() {
  return Math.random().toString(36).slice(2, 9);
}
