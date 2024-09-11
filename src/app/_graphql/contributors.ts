export const CONTRIBUTORS = `
  query Contributors {
    Contributors(limit: 10) {
      docs {
        id
        name
        }
    }
  }
`

export const CONTRIBUTOR = `
  query Contributor {
   Contributors {
    docs {
     id
     name
     }
   }
  }
`
