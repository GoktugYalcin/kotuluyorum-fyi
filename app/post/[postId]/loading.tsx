import React from 'react'

import SharedLinkBanner from '@/components/shared/SharedLinkBanner'

export default function Loading() {
  return (
    <>
      <SharedLinkBanner additionalTitle={'İnceleme'} />
      <div className="w-full min-h-screen flex-col justify-center items-center px-[400px] py-32">
        <span className="animate-pulse">
          <p
            className={
              'h-12 w-[100%] rounded-lg dark:bg-gray-700 bg-gray-100 mb-3'
            }
          ></p>
          <p
            className={
              'h-12 w-[75%] rounded-lg dark:bg-gray-700 bg-gray-100 mb-8'
            }
          ></p>
          <p
            className={
              'h-4 w-[25%] rounded-lg dark:bg-gray-700 bg-gray-100 mb-8'
            }
          ></p>
          <div className="w-1/3 flex justify-start items-center gap-5">
            <p
              className={
                'h-4 w-[25%] rounded-lg dark:bg-gray-700 bg-gray-100 mb-8'
              }
            ></p>
            <p
              className={
                'h-4 w-[25%] rounded-lg dark:bg-gray-700 bg-gray-100 mb-8'
              }
            ></p>
            <p
              className={
                'h-4 w-[25%] rounded-lg dark:bg-gray-700 bg-gray-100 mb-8'
              }
            ></p>
            <p
              className={
                'h-4 w-[25%] rounded-lg dark:bg-gray-700 bg-gray-100 mb-8'
              }
            ></p>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[100%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[65%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[89%] mb-8"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[81%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[87%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[32%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[100%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[87%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[32%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[89%] mb-8"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[32%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[87%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[81%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[89%] mb-8"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[100%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[81%] mb-4"></div>
          <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-[100%] mb-4"></div>
        </span>
      </div>
    </>
  )
}
