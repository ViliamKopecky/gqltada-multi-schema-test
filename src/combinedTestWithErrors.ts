import * as spacex from './lib/spacex'
import * as tenant from './lib/tenant'

// ✅ error is reported
tenant.graphql(`
    query TenantQuery {
        wrongField
    }
`)

// ✅ error is reported
spacex.graphql(`
    query SpacexQuery {
        wrongField
    }
`)
