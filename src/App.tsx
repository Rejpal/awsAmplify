
import React from 'react'
import { Alert } from './components/Alert'

export default function PrimeRevenue() {
  const description = 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.'
  const title = 'Alert heading'
  const longTitle = 'This is a very long title for an Alert banner that the banner should completely acomodate because not doing so would be detrimental for user\'s experience.'
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        PrimeRevenue
      </h2>
      <main className="flex flex-col items-center sm:items-start bg-gray-300 p-3">
        <Alert description={'Short description of an error'} title={title} onViewDetails={() => {}}/>
        <Alert description={description} title={title} onViewDetails={() => {}}/>
        <Alert description={description} title={longTitle} onViewDetails={() => {}}/>
        <Alert description={'No details to view provided.'} title={title} />
      </main>
    </div>
  )
}