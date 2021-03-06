import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  getMenu?: Maybe<Array<Maybe<MenuItem>>>;
};

export type MenuItem = {
  __typename?: "MenuItem";
  id: Scalars["ID"];
  label: Scalars["String"];
  parentId: Scalars["ID"];
};

export type GetMenuQueryVariables = Exact<{ [key: string]: never }>;

export type GetMenuQuery = { __typename?: "Query" } & {
  getMenu?: Maybe<Array<Maybe<MenuItem>>>;
};

export const GetMenuDocument = gql`
  query GetMenu {
    getMenu {
      id
      label
      parentId
    }
  }
`;

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMenuQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>
) {
  return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    baseOptions
  );
}
export function useGetMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>
) {
  return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    baseOptions
  );
}
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>;
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>;
export type GetMenuQueryResult = Apollo.QueryResult<
  GetMenuQuery,
  GetMenuQueryVariables
>;
