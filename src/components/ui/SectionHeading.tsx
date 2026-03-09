interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-display text-3xl font-bold text-warm-900 md:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-primary-400 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-warm-800/70 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
