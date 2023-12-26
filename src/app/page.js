import React, { Suspense } from 'react'
import Countries from './components/Countries'

const page = () => {
  return (
    <div>
      <Suspense fallback={<p className='py-3 text-center text-2xl'>Loading...</p>}>
        <Countries />
      </Suspense>
    </div>
  )
}

export default page