import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/Card";
import { Badge } from "@shared/ui/Badge";
import { Alert, AlertDescription } from "@shared/ui/Alert";
import { Skeleton } from "@shared/ui/Skeleton";
import { useGetAllFilmsQuery } from "@shared/api/graphql/__generated__/hooks";

export const StarWarsFilms = () => {
  const { data, loading, error } = useGetAllFilmsQuery();

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Error loading films: {error.message}
        </AlertDescription>
      </Alert>
    );
  }

  const films = data?.allFilms?.films ?? [];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Star Wars Films</h2>

      <div className="space-y-4">
        {films
          .filter((film): film is NonNullable<typeof film> => film !== null)
          .map((film) => (
          <Card key={film.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <CardTitle className="mb-2">
                    Episode {film.episodeID}: {film.title}
                  </CardTitle>
                  <CardDescription>
                    Released: {film.releaseDate} | Director: {film.director}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {film.openingCrawl && (
                <div className="mb-4 p-4 bg-muted rounded-md italic text-muted-foreground text-sm leading-relaxed">
                  {film.openingCrawl.substring(0, 200)}
                  {film.openingCrawl.length > 200 ? "..." : ""}
                </div>
              )}

              {film.producers && film.producers.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Producers:</p>
                  <div className="flex flex-wrap gap-2">
                    {film.producers.map((producer, index) => (
                      <Badge key={index} variant="secondary">
                        {producer}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {film.characterConnection?.characters && film.characterConnection.characters.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Featured Characters:</p>
                  <div className="flex flex-wrap gap-2">
                    {film.characterConnection.characters
                      .filter((character): character is NonNullable<typeof character> => character !== null)
                      .slice(0, 5)
                      .map((character, index) => (
                        <Badge key={index} variant="default">
                          {character.name}
                        </Badge>
                      ))}
                    {film.characterConnection.characters.length > 5 && (
                      <Badge variant="outline">
                        +{film.characterConnection.characters.length - 5} more
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
