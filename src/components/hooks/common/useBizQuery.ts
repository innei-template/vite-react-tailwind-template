 
import type {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import type { FetchError } from 'ofetch'

import type { DefinedQuery } from '~/utils/defineQuery'

// TODO split normal define query and infinite define query for better type checking
export type SafeReturnType<T> = T extends (...args: any[]) => infer R
  ? R
  : never

export type CombinedObject<T, U> = T & U
export function useAuthQuery<
  TQuery extends DefinedQuery<QueryKey, any>,
  TError = FetchError,
  TQueryFnData = Awaited<ReturnType<TQuery['fn']>>,
  TData = TQueryFnData,
>(
  query: TQuery,
  options: Omit<
    UseQueryOptions<TQueryFnData, TError>,
    'queryKey' | 'queryFn'
  > = {},
): CombinedObject<
  UseQueryResult<TData, TError>,
  { key: TQuery['key']; fn: TQuery['fn'] }
> {
  // @ts-expect-error
  return Object.assign(
    {},
    useQuery({
      queryKey: query.key,
      queryFn: query.fn,
      enabled: options.enabled !== false,
      ...options,
    }),
    {
      key: query.key,
      fn: query.fn,
    },
  )
}

export function useAuthInfiniteQuery<
  T extends DefinedQuery<any, any>,
  E = FetchError,
  FNR = Awaited<ReturnType<T['fn']>>,
  R = FNR,
>(
  query: T,
  options: Omit<UseInfiniteQueryOptions<FNR, E>, 'queryKey' | 'queryFn'>,
): CombinedObject<
  UseInfiniteQueryResult<InfiniteData<R>, FetchError>,
  { key: T['key']; fn: T['fn'] }
> {
  // @ts-expect-error
  return Object.assign(
    {},
    // @ts-expect-error
    useInfiniteQuery<T, E>({
      queryFn: query.fn,
      queryKey: query.key,
      enabled: options.enabled !== false,
      ...options,
    }),
    {
      key: query.key,
      fn: query.fn,
    },
  )
}

/**
 * @deprecated use `useAuthQuery` instead
 */
export const useBizQuery = useAuthQuery
