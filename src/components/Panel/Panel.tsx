import "./Panel.css";

export const Panel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="panel-container">
      <div className="panel-title">{title}</div>
      <div className="panel-content">{children}</div>
    </div>
  );
};
