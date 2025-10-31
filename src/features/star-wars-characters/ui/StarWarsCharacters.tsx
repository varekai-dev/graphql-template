import { Card, CardContent, CardHeader, CardTitle } from "@shared/ui/Card";
import { Badge } from "@shared/ui/Badge";
import { Alert, AlertDescription } from "@shared/ui/Alert";
import { Skeleton } from "@shared/ui/Skeleton";
import { useGetAllPeopleQuery } from "@shared/api/graphql/__generated__/hooks";
import { useInfiniteScroll } from "@shared/hooks/useInfiniteScroll";

export const StarWarsCharacters = () => {
  const { data, loading, error, fetchMore } = useGetAllPeopleQuery({
    variables: { first: 10 },
    notifyOnNetworkStatusChange: true,
  });

  const handleLoadMore = async () => {
    if (data?.allPeople?.pageInfo?.hasNextPage && data.allPeople.pageInfo.endCursor) {
      await fetchMore({
        variables: {
          first: 10,
          after: data.allPeople.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult?.allPeople) {
            return previousResult;
          }

          return {
            ...previousResult,
            allPeople: {
              ...previousResult.allPeople,
              ...fetchMoreResult.allPeople,
              people: [
                ...(previousResult.allPeople?.people ?? []),
                ...(fetchMoreResult.allPeople.people ?? []),
              ],
            },
          };
        },
      });
    }
  };

  const sentinelRef = useInfiniteScroll({
    hasNextPage: data?.allPeople?.pageInfo?.hasNextPage ?? false,
    loading,
    onLoadMore: handleLoadMore,
  });

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Error loading characters: {error.message}
        </AlertDescription>
      </Alert>
    );
  }

  const characters = data?.allPeople?.people ?? [];
  const isLoadingInitial = loading && !data?.allPeople;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {isLoadingInitial ? (
          <>
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-6 w-32" />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-foreground">Star Wars Characters</h2>
            <Badge variant="secondary">
              Total: {data?.allPeople?.totalCount ?? 0} characters
            </Badge>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoadingInitial
          ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-5 w-12 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-5 w-16 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-14" />
                      <Skeleton className="h-5 w-10 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          : null}
        {characters
          .filter((character): character is NonNullable<typeof character> => character !== null)
          .map((character) => (
            <Card key={character.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{character.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Birth Year:</span>
                    <span className="font-medium">{character.birthYear || "Unknown"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Gender:</span>
                    <Badge variant="outline" className="text-xs">
                      {character.gender || "Unknown"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Height:</span>
                    <span className="font-medium">{character.height || "Unknown"} cm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Mass:</span>
                    <span className="font-medium">{character.mass || "Unknown"} kg</span>
                  </div>
                  {character.homeworld?.name && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Homeworld:</span>
                      <Badge variant="secondary" className="text-xs">
                        {character.homeworld.name}
                      </Badge>
                    </div>
                  )}
                  {character.species?.name && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Species:</span>
                      <Badge variant="secondary" className="text-xs">
                        {character.species.name}
                      </Badge>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Films:</span>
                    <Badge variant="default" className="text-xs">
                      {character.filmConnection?.totalCount ?? 0}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        {loading && data && (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={`loading-${index}`}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-5 w-12 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-5 w-16 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-14" />
                      <Skeleton className="h-5 w-10 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>

      {data?.allPeople?.pageInfo?.hasNextPage && (
        <div ref={sentinelRef} className="h-4 w-full" />
      )}
    </div>
  );
};
