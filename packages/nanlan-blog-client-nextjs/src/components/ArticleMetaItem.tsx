export type ArticleMetaItemProps = {
  needDivide?: boolean;
  title?: string;
  icon: React.ReactNode;
  value?: string | number;
};

export function ArticleMetaItem({
  needDivide = true,
  title,
  icon,
  value,
}: ArticleMetaItemProps) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      {title && <span className="pr-0.5">{title}</span>}
      {value}
      {needDivide && <span className="text-gray-custom">|</span>}
    </div>
  );
}
