export const Header = () => {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-foreground">Star Wars App</h1>
          <p className="text-sm text-muted-foreground">Powered by SWAPI GraphQL</p>
        </div>
      </div>
    </header>
  );
};
