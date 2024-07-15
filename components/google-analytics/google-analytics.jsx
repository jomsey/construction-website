'Use client'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Script from 'next/script'
import * as gtag from '../../app/lib/google-analysis'

export default function GoogleAnalytics() {
      const router = useRouter()

      useEffect(()=>{
        const handlePageChange = (url)=>{
            gtag.pageView(url)
        }
        router.events.on('routeChangeComplete',handlePageChange)
        return ()=>{
            router.events.off('routeChangeComplete',handlePageChange)

        }
      },[router.events]
    )
  return (
    <>
    <Script strategy='afterInteractive' src={`https:www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></Script>
    </>
  )
}
