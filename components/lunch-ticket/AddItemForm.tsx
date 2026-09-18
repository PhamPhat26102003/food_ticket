type AddItemFormProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

export default function AddItemForm({
  value,
  onChange,
  onAdd,
}: AddItemFormProps) {
  return (
    <div className="mb-4 flex gap-2">
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && onAdd()}
        placeholder="Thêm món khác…"
        className="min-w-0 flex-1 rounded-sm border border-ink/25 bg-paper px-2.5 py-1.5 text-sm text-ink placeholder:text-ink/35 focus:border-teal focus:outline-none"
      />
      <button
        type="button"
        onClick={onAdd}
        className="rounded-sm border border-ink/25 px-3 text-sm text-ink/70 transition-colors hover:border-teal hover:text-teal"
      >
        Thêm
      </button>
    </div>
  );
}
