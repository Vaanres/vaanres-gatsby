import React from 'react'
import Layout from '../../components/layout'
import AboutIntro from './components/about-intro'
import AboutExp from './components/about-exp'
import styles from './about.module.scss'

export default () => (
  <Layout>
    <section>
      <AboutIntro />
    </section>
    <section>
      <h2>Experience</h2>
      <AboutExp />
    </section>
  </Layout>
)
