import { graphql } from './lib/tenant'

// ✅ autocomplete
// ✅ typechecking in VSCode
// ✅ typechecking with `gql.tada check`
graphql(`
    query TenantQuery {
        me {
            person {
                email
            }
        }
    }
`)