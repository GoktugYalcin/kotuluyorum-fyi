import React from 'react'

const SummaryLoader: React.FC<{}> = () => {
  return (
    <div className="flex flex-col lg:w-96 w-80 p-8 bg-gradient-to-br from-[--card-background] to-[--card-background-to] rounded-xl gap-2 group">
      <div className="h-36 w-full rounded dark:bg-gray-700 bg-gray-100 animate-pulse mb-4"></div>
      <div className="flex flex-col justify-start gap-1 text-[--card-text] animate-pulse">
        <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-100 rounded-full dark:bg-gray-700 mb-2.5 w-20"></div>
        <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 lg:w-72 w-60 mb-4"></div>
        <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
      </div>
    </div>
  )
}

export default SummaryLoader
