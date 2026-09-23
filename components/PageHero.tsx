export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-line bg-[linear-gradient(180deg,#0a3d2a_0%,#062819_100%)] py-10 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {kicker ? (
          <p className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.22em]">
            <span className="h-px w-6 shrink-0 bg-gold" aria-hidden />
            <span className="min-w-0 break-words">{kicker}</span>
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </section>
  );
}
