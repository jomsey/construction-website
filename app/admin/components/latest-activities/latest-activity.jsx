export default function LatestActivities(){
    return(
        <div className="bg-gray-50 rounded overflow-hidden">
                    <h4 className="text-sm text-gray-50 font-medium w-full p-4 bg-gray-600">Latest Activity</h4>
                    <div className="flex flex-col gap-4 m-8">
                        <Activity title="logged in"/>
                        <Activity title="created new post"/>
                        <Activity title="edited profile"/>
                        <Activity title="deleted message"/>
                        <Activity title="logged in"/>
                        <Activity title="logged in"/>
                    </div>
                </div>
    )

}


function Activity({title}){
    return <div className="relative border-b pb-2">
        <small className="text-gray-400 text-xs absolute right-2 top-2">5 hours ago</small>
        <small className="text-sm text-green-500 ">{title}</small>
    </div>
}