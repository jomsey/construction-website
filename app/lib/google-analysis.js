export const GA_TRACKING_ID = process.env.PUBLIC_GOOGLE_ANALYTICS

//log the page view with their url
export  function pageView(url){
    window.gtag('config',GA_TRACKING_ID,{page_path:url})

} 

//log specific events happening
export function event({action,category,label,value}){
    window.gtag('event',action,{
        event_category:category,
        event_label:label,
        value:value
    })
    
}