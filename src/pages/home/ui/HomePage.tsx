import { useState } from "react";
import { Header } from "@widgets/header";
import { StarWarsCharacters } from "@features/star-wars-characters";
import { StarWarsFilms } from "@features/star-wars-films";

type TabType = "characters" | "films";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("characters");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Star Wars Universe</h1>
          <p className="text-gray-600">Explore characters and films from a galaxy far, far away</p>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              type="button"
              onClick={() => {
                setActiveTab("characters");
              }}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "characters"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-pressed={activeTab === "characters"}
            >
              Characters
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("films");
              }}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "films"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-pressed={activeTab === "films"}
            >
              Films
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === "characters" && <StarWarsCharacters />}
          {activeTab === "films" && <StarWarsFilms />}
        </div>
      </main>
    </div>
  );
};
