import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar';
import { daysRemaining, truncate } from '../store';
import { FaEthereum } from 'react-icons/fa';


const Projects = ({ projects }) => {
    const [end, setEnd] = useState(4)
    const [count] = useState(4)
    const [collection, setCollection] = useState([])



    const getCollection = () => projects.slice(0, end)

    useEffect(() => {
        setCollection(getCollection())
    }, [projects, end])
  return (
      <div className="flex flex-col px-6 mb-7">
          <div className="flex justify-center items-center flex-wrap">
              {projects.map((project, i) => (
                  <ProjectCard key={i} project={project}   />
              ) )}
          </div>
          {projects.length > collection.length ? (
            <div className="flex justify-center items-center my-5">
              <button onClick={() => setEnd(end + count)} type='button' className='inline-block px-6 py-2.5 rounded-full bg-green-500 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-green-700'>
                  Load more
              </button>
          </div>
          ) : null}
    </div>
  )
}

const ProjectCard = ({ project, i }) => {
    const expired = new Date().getTime() > Number(project?.expiresAt + '000')
        return (
<div key={i} id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
        <Link to={'/projects/' + project.id}>
            <img src={project.imageURL}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-xl" />
            <div className='p-4'>
                    <h5 className="mb-1">{project.title}</h5>
                    <div className="flex flex-col">
                    <div className="flex justify-start items-center mb-3 space-x-2 ">
                        <Avatar className="rounded-full shadow-md" name={project.owner} size="20" round={true} />
                        <small className='font-semibold text-gray-700'>{truncate(project.owner, 4,4,11)}</small>
                    </div>
                    <small className="text-gray-500">
                        {expired ? 'Expired' : daysRemaining(project.expiresAt) + ' left'}
                        </small>
                       
                </div>
                <div className="w-full overflow-hidden bg-gray-300">
                    <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-1" style={{ width: `${(project.raised / project.cost) * 100}%`}}>

                    </div>
                </div>

                <div className="flex justify-between items-center font-bold mt-1 mb-2 text-gray-700">
                    <small>{project.raised} ETH Raised</small>
                    <small className="flex justify-start items-center">
                        <FaEthereum />
                        <span>{project.cost} ETH</span>
                    </small>
                </div>

                <div className="flex justify-between items-center flex-wrap mt-3 mb-1 font-bold text-gray-500">
                    <small>{project.backers} Backer{project.backers == 1 ? '' : 's'}</small>
                    <div>
                    {expired ? (
                                <small className="text-red-500">Expired</small>
                        ) : project?.status == 0 ? (
                            <small className="text-green-500">Open</small>
                        ) : project?.status == 1 ? (
                            <small className="text-yellow-500">Accepted</small>
                            ) : project?.status == 2 ? (
                                <small className="text-red-500">Reverted</small>
                        ) : project?.status == 3 ? (
                            <small className="text-blue-500">Deleted</small>
                                    ) : (
                                        <small className="text-gray-500">Paid</small>
                               )}
                        </div>
                </div>
                </div>
                      </Link>
                      </div>
) }

export default Projects