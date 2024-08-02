import { GiChatBubble } from 'react-icons/gi';

export default function NoComments(){
    return (
        <section className="flex flex-col items-center justify-center w-full h-full gap-8">
        <GiChatBubble className="text-gray-300 text-4xl"/>
        <small className="text-gray-500 text-sm">No comments yet</small>
       </section>
    );
}


