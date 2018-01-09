import React from 'react'
import Container from '../components/Container'

export default ({data}) => <Container email_list={data.site.siteMetadata.emails} />

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        emails{
        id
        to
        from
        subject
        body
        }
      }
    }
  }
`
