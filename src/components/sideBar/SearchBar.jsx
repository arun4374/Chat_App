import React from 'react'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='px-6 py-4'>
        <div className='flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 border border-white/20 shadow-sm focus-within:bg-white/20 focus-within:border-white/40 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
            <input 
                type="text" 
                placeholder='Search' 
                className='bg-transparent border-none outline-none text-gray-800 placeholder-gray-600 text-sm font-medium w-full'
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
  )
}

export default SearchBar
