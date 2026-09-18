import FoodThumb from "./FoodThumb";

type DrawResultProps = {
  displayName: string | null;
  result: string | null;
  isDrawing: boolean;
  drawCount: number;
  image?: string;
  onDrawAgain: () => void;
};

export default function DrawResult({
  displayName,
  result,
  isDrawing,
  drawCount,
  image,
  onDrawAgain,
}: DrawResultProps) {
  return (
    <>
      <div className="relative mt-5 min-h-[92px] rounded-sm border border-dashed border-ink/25 bg-paperdark/60 px-4 py-4">
        {!displayName && (
          <p className="text-sm text-ink/45">Kết quả sẽ hiện ở đây…</p>
        )}
        {displayName && (
          <div className="flex items-center gap-3">
            <FoodThumb src={image} alt={displayName} size="lg" />
            <div>
              <p className="text-xs text-ink/55">Trưa nay ăn:</p>
              <p
                className={`mt-0.5 text-2xl font-extrabold text-ink ${isDrawing ? "flickering" : ""}`}
              >
                {displayName}
              </p>
            </div>
          </div>
        )}
        {result && !isDrawing && (
          <div
            key={drawCount}
            className="stamp-hit pointer-events-none absolute left-[78%] top-0 select-none rounded-sm border-[3px] border-stamp px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-stamp"
            style={{ transform: "translate(-50%, -50%) rotate(-11deg)" }}
          >
            Đã chọn
          </div>
        )}
      </div>
      {result && !isDrawing && (
        <button
          type="button"
          onClick={onDrawAgain}
          className="mt-3 w-full text-center text-sm text-ink/55 underline decoration-dotted underline-offset-4 hover:text-teal"
        >
          Bốc lại
        </button>
      )}
    </>
  );
}
