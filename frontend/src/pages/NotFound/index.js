import React from 'react'
import Layout from '../../components/Layout'
import Error from '../../components/Error'

export default function NotFound () {
  return (
    <Layout>
      <Error code={404} text='not found' />
    </Layout>
  )
}
