import { UserList } from "@features/user-list";
import { Header } from "@widgets/header";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserList />
      </main>
    </div>
  );
};
