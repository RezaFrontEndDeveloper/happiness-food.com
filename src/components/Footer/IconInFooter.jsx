function IconInFooter({ children, icon }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default IconInFooter;
