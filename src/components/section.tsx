const Section = ({
  name,
  link,
  children,
}: {
  name: string;
  link: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {link && (
          <a href={link} className="text-blue-500 text-sm">
            ดูทั้งหมด &gt;
          </a>
        )}
      </div>

      {children}
    </div>
  );
};

export default Section;
