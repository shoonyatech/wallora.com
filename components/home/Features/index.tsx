import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import React from 'react'

import FeatureCard from '../FeatureCard'

const Features = () => (
  <Container className="py-8">
    <Grid container spacing={3}>
      <FeatureCard
        img="./images/time-50x50.jpg"
        title="Quick and Easy to setup"
        content="Create your account in easy steps. Wallora will quickly create a budget for you to start with that you can fine tune as needed"
      />
      <FeatureCard
        img="./images/secure-50x50.jpg"
        title="Your data is Secure"
        content="Your data is encrypted in database with a 256-bit encryption level and the data exchanged over the internet is encrypted with 128-bit SSL."
      />
      <FeatureCard
        img="./images/analysis-50x50.jpg"
        title="In depth Analysis"
        content="Find patterns in your spendings and gaps between plan and actual expenditures using our graphical analysis tools"
      />
      <FeatureCard
        img="./images/money-inr-50x50.jpg"
        title="Finance Experts services"
        content="Get help from our panel of finance experts for personalized investment recommendations (Currently available only in selected countries)"
      />
    </Grid>
  </Container>
)
export default Features
