import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

export function useGetMenuQuery(baseOptions) {
  return Apollo.useQuery(GetMenuDocument, baseOptions);
}
export function useGetMenuLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(GetMenuDocument, baseOptions);
}