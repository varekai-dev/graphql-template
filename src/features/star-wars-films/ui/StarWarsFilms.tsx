import { useQuery } from "@apollo/client/react";
import { GET_ALL_FILMS } from "@shared/api/graphql/queries";

type Film = {
  id: string;
  title: string | null;
  episodeID: number | null;
  openingCrawl: string | null;
  director: string | null;
  producers: string[] | null;
  releaseDate: string | null;
  characterConnection: {
    characters: Array<{
      name: string | null;
    } | null>;
  } | null;
};

type GetAllFilmsData = {
  allFilms: {
    films: Film[];
  } | null;
};

export const StarWarsFilms = () => {
  const { data, loading, error } = useQuery<GetAllFilmsData>(GET_ALL_FILMS);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">Loading films...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Error loading films: {error.message}</p>
      </div>
    );
  }

  const films = data?.allFilms?.films ?? [];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Star Wars Films</h2>

      <div className="space-y-4">
        {films.map((film: Film) => (
          <div
            key={film.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Episode {film.episodeID}: {film.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Released: {film.releaseDate} | Director: {film.director}
                </p>
              </div>
            </div>

            {film.openingCrawl && (
              <div className="mb-4 p-4 bg-gray-50 border border-gray-100 rounded italic text-gray-700 text-sm leading-relaxed">
                {film.openingCrawl.substring(0, 200)}
                {film.openingCrawl.length > 200 ? "..." : ""}
              </div>
            )}

            {film.producers && film.producers.length > 0 && (
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Producers:</span> {film.producers.join(", ")}
              </p>
            )}

            {film.characterConnection?.characters && film.characterConnection.characters.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Featured Characters:</p>
                <div className="flex flex-wrap gap-2">
                  {film.characterConnection.characters.slice(0, 5).map((character: { name: string | null } | null, index: number) => (
                    character && (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {character.name}
                      </span>
                    )
                  ))}
                  {film.characterConnection.characters.length > 5 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{film.characterConnection.characters.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
