import React from 'react';
import Avatar from 'react-avatar';
import { FaEthereum } from 'react-icons/fa';
import Moment from 'react-moment';

const ProjectBackers = ({ backers }) => {

    const randomNameGenerator = () => {
    
        const names = [
            'Wim Mostmans',
            'John Doe',
            'Jane Doe',
            'John Smith',
            'Jane Smith',
            'James Smith',
            'James Doe',
            'Michael Smith',
            'Michael Doe',
            'Robert Smith',
            'Robert Doe',
        ]

        return names[Math.floor(Math.random() * names.length)]
    }

  return (
    <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div className="max-h-[calc(100vh_-_35rem)] overflow-y-auto shadow-md rounded-md w-full mb-10">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                Backer
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                Donations
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                Refunded
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {backers.map((backer, i) => (
                <Backer key={i} backer={backer} randomNameGenerator={randomNameGenerator} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Backer = ({ backer, randomNameGenerator, i }) => (
  <tr key={i} className='border-b border-gray-200'>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                              <div className="flex justify-start items-center space-x-2">
                                  <Avatar name={backer.owner} size="30" round={true} className="shadow-md" />
        <span>{truncate(backer.owner, 4,4, 11)}</span>
                              </div>
                          </td>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                              <small className="flex justify-start items-center space-x-2">
                                  <FaEthereum />
                                  <span className="text-gray-700 font-medium">{backer.contribution} ETH</span>
                              </small>
                          </td>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                              {backer.refunded ? 'Yes' : 'No'}
                          </td>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                           <Moment fromNow>{backer.timestamp}</Moment>   
                          </td>
                      </tr>
)

export default ProjectBackers;






