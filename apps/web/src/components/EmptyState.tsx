type EmptyStateProps = {
  title: string;
  message: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-white/20 bg-slate-950/30 p-6 text-center">
      <p className="text-lg font-bold text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{message}</p>
    </div>
  );
}
