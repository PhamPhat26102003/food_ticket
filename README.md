# Phiếu gọi món – bốc thăm ăn trưa

Web app Next.js (App Router + TypeScript + Tailwind) mô phỏng một tấm phiếu gọi món trên quầy quán ăn. Thêm/bớt món, bấm "Bốc thăm ngay" để random ra món ăn trưa, kết quả được đóng dấu đỏ như phiếu order thật.

## Chạy thử

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Cấu trúc

- `app/layout.tsx` – nạp font Be Vietnam Pro (chữ chính) và Courier Prime (số phiếu, ngày tháng)
- `app/page.tsx` – trang chủ, canh giữa tấm phiếu
- `components/LunchTicket.tsx` – toàn bộ logic: danh sách món, thêm/xoá, hiệu ứng random "chạy số", con dấu kết quả
- `app/globals.css` – nền quầy gỗ, mép phiếu răng cưa (perforated), ghim giấy, hiệu ứng đóng dấu

## Tuỳ chỉnh nhanh

- Đổi danh sách món mặc định: sửa mảng `DEFAULT_ITEMS` trong `components/LunchTicket.tsx`.
- Đổi màu: sửa các token `paper`, `ink`, `stamp`, `teal` trong `tailwind.config.ts`.
