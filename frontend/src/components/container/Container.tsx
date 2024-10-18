const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full h-full px-4">{children}</div>
  );
};

export default Container;
