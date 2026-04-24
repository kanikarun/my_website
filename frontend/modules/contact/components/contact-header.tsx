export const ContactHeader: React.FC<{ title: string; description?: string }> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-md mb-3 font-bold tracking-widest text-foreground uppercase">{title}</h2>
      {description && <p className="text-md mb-2 leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
};