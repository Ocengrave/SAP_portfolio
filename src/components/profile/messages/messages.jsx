import { NavLink } from 'react-router-dom';
import GeneratePost from './genetate_post';
import s_messages from './messages.module.css';

const Messages = (props) =>
{
    //в нашем случае newPost вынесен в index.jx, 
    //подключено в app.js, index.js в виде передачи пропсов
    let generatePost = props.newPost
    .map (newPost => (<GeneratePost avatar_url={newPost.url} name={newPost.name} text = {newPost.text}/>))
    return (
        // рефакторим messages.jsx, будем делать по феншую
        
        <div className={s_messages.messages_items}>
           {generatePost}
        </div>
    );
}
export default Messages;