import FoodThumb from "./FoodThumb";
import type { FoodItem } from "./types";

type MenuListProps = {
  items: FoodItem[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function MenuList({ items, onToggle, onRemove }: MenuListProps) {
  return (
    <div className="mb-3">
      <p className="mb-2 text-sm text-ink/70">Chọn món có thể trúng</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id} className="group flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggle(item.id)}
              aria-pressed={item.active}
              className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border-2 transition-colors ${item.active ? "border-teal bg-teal text-paper" : "border-ink/30 bg-transparent text-transparent"}`}
            >
              <svg viewBox="0 0 12 10" className="h-2.5 w-2.5" fill="none">
                <path
                  d="M1 5L4.5 8.5L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <FoodThumb src={item.image} alt={item.name} dimmed={!item.active} />
            <span
              className={`flex-1 text-sm ${item.active ? "text-ink" : "text-ink/40 line-through"}`}
            >
              {item.name}
            </span>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              aria-label={`Xoá ${item.name}`}
              className="text-ink/30 opacity-0 transition-opacity hover:text-stamp group-hover:opacity-100"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
