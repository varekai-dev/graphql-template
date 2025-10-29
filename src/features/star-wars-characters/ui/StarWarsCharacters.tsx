import { useQuery } from "@apollo/client/react";
import { GET_ALL_PEOPLE } from "@shared/api/graphql/queries";
import { Button } from "@shared/ui/Button";

type Character = {
  id: string;
  name: string | null;
  birthYear: string | null;
  gender: string | null;
  height: number | null;
  mass: string | null;
  homeworld: {
    name: string | null;
  } | null;
  species: {
    name: string | null;
  } | null;
  filmConnection: {
    totalCount: number | null;
  } | null;
};

type GetAllPeopleData = {
  allPeople: {
    people: Character[];
    pageInfo: {
      hasNextPage: boolean | null;
      hasPreviousPage: boolean | null;
      startCursor: string | null;
      endCursor: string | null;
    } | null;
    totalCount: number | null;
  } | null;
};

export const StarWarsCharacters = () => {
  const { data, loading, error, fetchMore } = useQuery<GetAllPeopleData>(GET_ALL_PEOPLE, {
    variables: { first: 10 },
    notifyOnNetworkStatusChange: true,
  });

  const handleLoadMore = () => {
    if (data?.allPeople?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          first: 10,
          after: data.allPeople.pageInfo.endCursor,
        },
      });
    }
  };

  if (loading && !data) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">Loading characters...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Error loading characters: {error.message}</p>
      </div>
    );
  }

  const characters = data?.allPeople?.people ?? [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Star Wars Characters</h2>
        <p className="text-sm text-gray-600">
          Total: {data?.allPeople?.totalCount ?? 0} characters
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character: Character) => (
          <div
            key={character.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{character.name}</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Birth Year:</span> {character.birthYear || "Unknown"}
              </p>
              <p>
                <span className="font-medium">Gender:</span> {character.gender || "Unknown"}
              </p>
              <p>
                <span className="font-medium">Height:</span> {character.height || "Unknown"} cm
              </p>
              <p>
                <span className="font-medium">Mass:</span> {character.mass || "Unknown"} kg
              </p>
              {character.homeworld?.name && (
                <p>
                  <span className="font-medium">Homeworld:</span> {character.homeworld.name}
                </p>
              )}
              {character.species?.name && (
                <p>
                  <span className="font-medium">Species:</span> {character.species.name}
                </p>
              )}
              <p>
                <span className="font-medium">Films:</span> {character.filmConnection?.totalCount ?? 0}
              </p>
            </div>
          </div>
        ))}
      </div>

      {data?.allPeople?.pageInfo?.hasNextPage && (
        <div className="flex justify-center pt-4">
          <Button onClick={handleLoadMore} isLoading={loading}>
            Load More Characters
          </Button>
        </div>
      )}
    </div>
  );
};
