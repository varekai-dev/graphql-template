import { Header } from "@widgets/header";
import { StarWarsCharacters } from "@features/star-wars-characters";
import { StarWarsFilms } from "@features/star-wars-films";
import { UserForm } from "@features/user-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui/Tabs";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Star Wars Universe</h1>
          <p className="text-muted-foreground">Explore characters and films from a galaxy far, far away</p>
        </div>

        <Tabs defaultValue="characters" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="films">Films</TabsTrigger>
            <TabsTrigger value="form">Form Example</TabsTrigger>
          </TabsList>
          <TabsContent value="characters">
            <StarWarsCharacters />
          </TabsContent>
          <TabsContent value="films">
            <StarWarsFilms />
          </TabsContent>
          <TabsContent value="form">
            <UserForm />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};
