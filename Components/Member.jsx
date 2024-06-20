import React from 'react'

function Member() {
  return (
    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Member</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Member of Narsda Club at Koladaisi University </p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li>
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" src="/emma.JPG" alt=""/>
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Emmanuel Tokula </h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600">President</p>
            </div>
          </div>
        </li>

        <li>
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" src="/emma.JPG" alt=""/>
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Emmanuel Tokula </h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600">President</p>
            </div>
          </div>
        </li>
  
      </ul>
    </div>
  </div>
  
  )
}

export default Member
