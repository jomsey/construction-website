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

export const viewport ={
  themeColor:"#334155"
}
export default function Blog() {
  
  return (
    <div>Blog</div>
  )
}
