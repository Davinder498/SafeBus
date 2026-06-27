type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="mb-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>
      <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </header>
  );
}
