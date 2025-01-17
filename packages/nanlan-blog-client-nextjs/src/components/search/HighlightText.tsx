interface HighlightTextProps {
  text: string;
  highlight: string;
  className?: string;
}

export function HighlightText({
  text,
  highlight,
  className = "",
}: HighlightTextProps) {
  if (!highlight.trim()) {
    return <span className={className}>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="bg-yellow-200 dark:bg-yellow-900">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  );
}
