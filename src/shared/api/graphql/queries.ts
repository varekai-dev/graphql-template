import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE = gql`
  query GetAllPeople($first: Int) {
    allPeople(first: $first) {
      people {
        id
        name
        birthYear
        gender
        height
        mass
        homeworld {
          name
        }
        species {
          name
        }
        filmConnection {
          totalCount
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`;

export const GET_PERSON = gql`
  query GetPerson($personID: ID!) {
    person(id: $personID) {
      id
      name
      birthYear
      gender
      height
      mass
      hairColor
      skinColor
      eyeColor
      homeworld {
        name
        population
        diameter
        climate
      }
      species {
        name
        classification
        averageLifespan
      }
      filmConnection {
        films {
          id
          title
          releaseDate
          director
        }
      }
    }
  }
`;

export const GET_ALL_FILMS = gql`
  query GetAllFilms {
    allFilms(first: 10) {
      films {
        id
        title
        episodeID
        openingCrawl
        director
        producers
        releaseDate
        characterConnection {
          characters {
            name
          }
        }
      }
    }
  }
`;
