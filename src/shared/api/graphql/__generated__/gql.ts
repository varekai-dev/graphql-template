/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetAllPeople($first: Int, $after: String) {\n    allPeople(first: $first, after: $after) {\n      people {\n        id\n        name\n        birthYear\n        gender\n        height\n        mass\n        homeworld {\n          name\n        }\n        species {\n          name\n        }\n        filmConnection {\n          totalCount\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": typeof types.GetAllPeopleDocument,
    "\n  query GetPerson($personID: ID!) {\n    person(id: $personID) {\n      id\n      name\n      birthYear\n      gender\n      height\n      mass\n      hairColor\n      skinColor\n      eyeColor\n      homeworld {\n        name\n        population\n        diameter\n        climates\n      }\n      species {\n        name\n        classification\n        averageLifespan\n      }\n      filmConnection {\n        films {\n          id\n          title\n          releaseDate\n          director\n        }\n      }\n    }\n  }\n": typeof types.GetPersonDocument,
    "\n  query GetAllFilms {\n    allFilms(first: 10) {\n      films {\n        id\n        title\n        episodeID\n        openingCrawl\n        director\n        producers\n        releaseDate\n        characterConnection {\n          characters {\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetAllFilmsDocument,
};
const documents: Documents = {
    "\n  query GetAllPeople($first: Int, $after: String) {\n    allPeople(first: $first, after: $after) {\n      people {\n        id\n        name\n        birthYear\n        gender\n        height\n        mass\n        homeworld {\n          name\n        }\n        species {\n          name\n        }\n        filmConnection {\n          totalCount\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.GetAllPeopleDocument,
    "\n  query GetPerson($personID: ID!) {\n    person(id: $personID) {\n      id\n      name\n      birthYear\n      gender\n      height\n      mass\n      hairColor\n      skinColor\n      eyeColor\n      homeworld {\n        name\n        population\n        diameter\n        climates\n      }\n      species {\n        name\n        classification\n        averageLifespan\n      }\n      filmConnection {\n        films {\n          id\n          title\n          releaseDate\n          director\n        }\n      }\n    }\n  }\n": types.GetPersonDocument,
    "\n  query GetAllFilms {\n    allFilms(first: 10) {\n      films {\n        id\n        title\n        episodeID\n        openingCrawl\n        director\n        producers\n        releaseDate\n        characterConnection {\n          characters {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetAllFilmsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllPeople($first: Int, $after: String) {\n    allPeople(first: $first, after: $after) {\n      people {\n        id\n        name\n        birthYear\n        gender\n        height\n        mass\n        homeworld {\n          name\n        }\n        species {\n          name\n        }\n        filmConnection {\n          totalCount\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query GetAllPeople($first: Int, $after: String) {\n    allPeople(first: $first, after: $after) {\n      people {\n        id\n        name\n        birthYear\n        gender\n        height\n        mass\n        homeworld {\n          name\n        }\n        species {\n          name\n        }\n        filmConnection {\n          totalCount\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPerson($personID: ID!) {\n    person(id: $personID) {\n      id\n      name\n      birthYear\n      gender\n      height\n      mass\n      hairColor\n      skinColor\n      eyeColor\n      homeworld {\n        name\n        population\n        diameter\n        climates\n      }\n      species {\n        name\n        classification\n        averageLifespan\n      }\n      filmConnection {\n        films {\n          id\n          title\n          releaseDate\n          director\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPerson($personID: ID!) {\n    person(id: $personID) {\n      id\n      name\n      birthYear\n      gender\n      height\n      mass\n      hairColor\n      skinColor\n      eyeColor\n      homeworld {\n        name\n        population\n        diameter\n        climates\n      }\n      species {\n        name\n        classification\n        averageLifespan\n      }\n      filmConnection {\n        films {\n          id\n          title\n          releaseDate\n          director\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllFilms {\n    allFilms(first: 10) {\n      films {\n        id\n        title\n        episodeID\n        openingCrawl\n        director\n        producers\n        releaseDate\n        characterConnection {\n          characters {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllFilms {\n    allFilms(first: 10) {\n      films {\n        id\n        title\n        episodeID\n        openingCrawl\n        director\n        producers\n        releaseDate\n        characterConnection {\n          characters {\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;