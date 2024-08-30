import Pagination from '@/components/pagination/Pagination'
import PostCard from '@/components/post-card/post-card'
import React from 'react'

export const metadata = {
  title: 'Build Africa | Our Blog',
  description: 'Step into the tranformative world of Build Africa that shapes not just structures but the future.From residential marvels to commercial hubs, each structure is  a testament to our commitment to excellence.',
  authors: 'Muwanguzi Joseph',
  openGraph: {
      title: 'Build Africa | We Build For Generations',
      description: 'Step into the tranformative world of Build Africa that shapes not just structures but the future.From residential marvels to commercial hubs, each structure is  a testament to our commitment to excellence.',
      url: '/',
      siteName: 'Build Africa',
      images: [
          {
              url: 'am.jpg',
              width: 1000,
              height: 700,
              alt: '....'
          },
      ],
      locale: 'en_US',
      type: 'website'

  }

}


export default function Blog() {
  
  return (
    <>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
         <PostCard/>
        <PostCard/>
      </section>
      <Pagination maxPages={5} totalPages={30} className="mt-8 m-auto h-8"/>
    </>
  )
}
