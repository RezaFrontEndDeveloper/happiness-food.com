function LogoReusebleComponent({ children, icon }) {
  return (
    <div className="flex w-70 mx-auto cursor-pointer flex-col gap-4 justify-center items-center p-8 border border-gray-200 rounded-2xl hover:bg-red-100 transition-all">
      <img src={icon} className="w-20" />
      <span>{children}</span>
    </div>
  );
}

export default LogoReusebleComponent;
