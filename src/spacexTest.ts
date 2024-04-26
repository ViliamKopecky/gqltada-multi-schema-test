import { graphql } from './lib/spacex'

// ✅ autocomplete
// ✅ typechecking in VSCode
// ✅ typechecking with `gql.tada check`
const query = graphql(`
    query SpacexQuery {
        dragons {
            id
            active
        }
    }
`)
