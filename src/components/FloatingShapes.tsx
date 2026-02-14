const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute top-60 right-20 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-40 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-[60px] animate-float-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingShapes;
