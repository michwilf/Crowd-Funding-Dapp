import React from 'react'
import { setGlobalState } from '../store'
import { BsPlusLg } from 'react-icons/bs'

const AddProject = () => {
  return (
      <div className="fixed right-10 bottom-10 flex space-x-2 justify-center">
          <button type='button' className='flex justify-center items-center w-9 h-9 rounded-full bg-green-500 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-green-700' onClick={() => setGlobalState('createModal', 'scale-100')}>
              <BsPlusLg className="font-bold" size={20} />
          </button>
    </div>
  )
}

export default AddProject