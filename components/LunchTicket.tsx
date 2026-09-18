"use client";

import { useEffect, useRef, useState } from "react";
import AddItemForm from "./lunch-ticket/AddItemForm";
import { DEFAULT_ITEMS, makeId, PLACEHOLDER_IMAGE } from "./lunch-ticket/data";
import DrawResult from "./lunch-ticket/DrawResult";
import MenuList from "./lunch-ticket/MenuList";
import TicketHeader from "./lunch-ticket/TicketHeader";
import { wikiThumbs } from "./lunch-ticket/wikipedia";
import type { FoodItem, TicketMeta } from "./lunch-ticket/types";

export default function LunchTicket() {
  const [items, setItems] = useState<FoodItem[]>(
    DEFAULT_ITEMS.map((item) => ({
      id: makeId(),
      name: item.name,
      image: item.image,
      active: true,
    })),
  );
  const [newItem, setNewItem] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [flickerName, setFlickerName] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [drawCount, setDrawCount] = useState(0);
  const [avoidRepeat, setAvoidRepeat] = useState(true);
  const [ticketMeta, setTicketMeta] = useState<TicketMeta | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const now = new Date();
    setTicketMeta({
      no: String(Math.floor(1000 + Math.random() * 8999)),
      date: now.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
      }),
    });
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const titles = DEFAULT_ITEMS.flatMap((dish) => dish.wiki);
    Promise.all([
      wikiThumbs("vi", titles),
      wikiThumbs("en", ["Pho", "Banh mi", "Wonton noodles", "Broken rice"]),
    ])
      .then(([vi, en]) => {
        if (cancelled) return;
        setItems((prev) =>
          prev.map((item) => {
            const dish = DEFAULT_ITEMS.find(
              (entry) => entry.name === item.name,
            );
            if (!dish) return item;
            const wikiImage = dish.wiki
              .map((title) => vi[title] || en[title])
              .find(Boolean);
            return wikiImage ? { ...item, image: wikiImage } : item;
          }),
        );
      })
      .catch(() => {
        // Keep the Unsplash fallbacks when Wikipedia is unavailable.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const activeItems = items.filter((item) => item.active);
  const displayName = isDrawing ? flickerName : result;

  function imageFor(name: string | null) {
    if (!name) return undefined;
    return items.find((item) => item.name === name)?.image;
  }

  function toggleActive(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item,
      ),
    );
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function addItem() {
    const trimmed = newItem.trim();
    if (!trimmed) return;
    setItems((prev) => [
      ...prev,
      { id: makeId(), name: trimmed, image: PLACEHOLDER_IMAGE, active: true },
    ]);
    setNewItem("");
  }

  function draw() {
    let pool = activeItems.map((item) => item.name);
    if (avoidRepeat && result && pool.length > 1) {
      pool = pool.filter((name) => name !== result);
    }
    if (pool.length === 0) return;

    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setIsDrawing(true);
    setResult(null);

    const target = pool[Math.floor(Math.random() * pool.length)];
    const totalSteps = 14;
    let cumulativeDelay = 0;

    for (let step = 0; step < totalSteps; step++) {
      cumulativeDelay += Math.round(70 + step * step * 3.2);
      const isLast = step === totalSteps - 1;
      const timeout = setTimeout(() => {
        setFlickerName(
          isLast ? target : pool[Math.floor(Math.random() * pool.length)],
        );
        if (isLast) {
          setIsDrawing(false);
          setResult(target);
          setDrawCount((count) => count + 1);
        }
      }, cumulativeDelay);
      timeoutsRef.current.push(timeout);
    }
  }

  const canDraw = activeItems.length > 0 && !isDrawing;

  return (
    <div className="ticket-rise paper-grain perforated-top relative w-full max-w-sm rotate-[-1.2deg] rounded-sm bg-paper px-6 pb-6 pt-8 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
      <div className="pushpin absolute left-1/2 top-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-stamp" />
      <TicketHeader meta={ticketMeta} />
      <MenuList items={items} onToggle={toggleActive} onRemove={removeItem} />
      <AddItemForm value={newItem} onChange={setNewItem} onAdd={addItem} />

      <button
        type="button"
        onClick={draw}
        disabled={!canDraw}
        className="w-full rounded-sm bg-stamp py-3 text-base font-bold tracking-wide text-paper shadow-[0_4px_0_0_theme(colors.stampdark)] transition-transform active:translate-y-[3px] active:shadow-none disabled:cursor-not-allowed disabled:bg-ink/20 disabled:text-ink/40 disabled:shadow-none"
      >
        {activeItems.length === 0 ? "Chọn ít nhất 1 món" : "Bốc thăm ngay"}
      </button>

      <label className="mt-2.5 flex items-center gap-1.5 text-xs text-ink/55">
        <input
          type="checkbox"
          checked={avoidRepeat}
          onChange={(event) => setAvoidRepeat(event.target.checked)}
          className="h-3 w-3 accent-teal"
        />
        Không bốc trùng lần trước
      </label>

      <DrawResult
        displayName={displayName}
        result={result}
        isDrawing={isDrawing}
        drawCount={drawCount}
        image={imageFor(displayName)}
        onDrawAgain={draw}
      />

      <div className="mt-5 border-t border-dashed border-ink/25 pt-2.5 text-center font-mono text-[10px] text-ink/45">
        Cảm ơn quý khách, chúc ngon miệng!
      </div>
    </div>
  );
}
