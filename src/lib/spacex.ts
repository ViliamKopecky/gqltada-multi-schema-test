import { initGraphQLTada } from 'gql.tada'
import type { introspection } from '../generated/spacex-env'

export const graphql = initGraphQLTada<{
  introspection: introspection
}>()

export { readFragment } from 'gql.tada'
export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada'

