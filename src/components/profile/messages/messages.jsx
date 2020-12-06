import { NavLink } from 'react-router-dom';
import GeneratePost from './genetate_post';
import s_messages from './messages.module.css';

const Messages = (props) => {
    //в нашем случае newPost вынесен в index.jx, 
    //вынесли все в state файл state.jsx
    
    let generatePost = props.state.newPost
        .map(newPost => (<NavLink to={newPost.id} ><GeneratePost id={newPost.id} avatar_url={newPost.url} name={newPost.name} text={newPost.text} id_link={newPost.id_link}/></NavLink>))
        //  пока харддкорим id_link, по каким-то причинам newPost.id не читается в NavLink
    return (
        // рефакторим messages.jsx, будем делать по феншую

        <div className={s_messages.messages_items}>
           
                {generatePost}
            
        </div>
    );
}
export default Messages;