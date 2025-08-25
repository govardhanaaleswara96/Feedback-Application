import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return <Card className="about">
    <h1>About This Project</h1>
    <p>This is a React app to leave feedback for a product or service</p>
    <p>Version 1.0.0</p>
    <Link to='/'>Back to Home</Link>
  </Card>
}

export default About
