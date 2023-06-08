import React, { useEffect, useState } from 'react'
import ProjectDetails from '../components/ProjectDetails'
import ProjectBackers from '../components/ProjectBackers'
import UpdateProject from '../components/UpdateProject'
import BackProject from '../components/BackProject'
import DeleteProject from '../components/DeleteProject'
import { getBackers, loadProject } from '../services/blockchain'
import { useParams } from 'react-router-dom'
import { useGlobalState } from '../store'


const Project = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false)// [value, setter
  const [project] = useGlobalState('project');
  const [backers] = useGlobalState('backers');

  const fetchData = async () => {
    await loadProject(id);
    await getBackers(id);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();

    // Clean-up function (if needed)
    return () => {
      // Perform any necessary clean-up here
    };
  }, [id]);
  return loaded ? (
      <>
      <ProjectDetails project={project} />
          <ProjectBackers backers={backers}/>
          <UpdateProject project={project}/>
          <DeleteProject project={project}   />
          <BackProject project={project} />
    </>
  ) : null
}

export default Project