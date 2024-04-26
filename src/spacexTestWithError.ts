import { graphql } from './lib/spacex'

// ✅ error is reported
graphql(`
    query SpacexQuery {
        wrongField
    }
`)
