function IconTextFlex({ children, icon }) {
  return (
    <div className="flex">
      {icon}
      <p className="text-white">{children}</p>
    </div>
  );
}

export default IconTextFlex;
