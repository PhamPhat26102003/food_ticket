import type { TicketMeta } from "./types";

type TicketHeaderProps = {
  meta: TicketMeta | null;
};

export default function TicketHeader({ meta }: TicketHeaderProps) {
  return (
    <div className="mb-4 flex items-start justify-between border-b border-dashed border-ink/25 pb-3">
      <div>
        <p className="text-lg font-bold leading-tight text-ink">
          Phiếu gọi món
        </p>
        <p className="text-xs text-ink/60">Trưa nay ăn gì đây ta?</p>
      </div>
      <div className="text-right font-mono text-[11px] leading-tight text-ink/70">
        <p>Số {meta?.no ?? "——"}</p>
        <p>{meta?.date ?? "——/——"}</p>
      </div>
    </div>
  );
}
