import * as spacex from './lib/spacex'
import * as tenant from './lib/tenant'

// ✅ autocomplete
// ✅ typechecking in VSCode
// ✅ typechecking with `gql.tada check`
tenant.graphql(`
    query TenantQuery {
        me {
            person {
                email
            }
        }
    }
`)

// ✅ autocomplete
// ✅ typechecking in VSCode
// ✅ typechecking with `gql.tada check`
spacex.graphql(`
    query SpacexQuery {
        capsules {
            dragon {
                active
            }
        }
    }
`)
