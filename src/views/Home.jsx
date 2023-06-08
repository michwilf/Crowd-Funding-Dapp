import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import CreateProject from '../components/CreateProject'
import AddProject from '../components/AddProject'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const Home = () => {
  const [projects] = useGlobalState('projects')
  const [project] = useGlobalState('project')
    useEffect(async () => {
        await loadProjects()
    }, [])
  return (
      <>
          <Hero />
          <Projects projects={projects} />
      <CreateProject  />
          <AddProject />
    </>
  )
}

export default Home