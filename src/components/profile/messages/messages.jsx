import { NavLink } from 'react-router-dom';
import Dialog from './dialog/dialog';
import s_messages from './messages.module.css';
const { Component } = require("react");


const Dialogs = (props) => {
    let nav = "/dialog/" + props.id; //user id dialog
    let name = props.name //user name
    let ava = props.avatar //user avatar
    let last_message = props.last_message
    
    // список диалогов
    return <div className={s_messages.messages_items}>
        <NavLink to={nav}>
            <div className={s_messages.user}>
                <div className={s_messages.avatar}>
                    <img src={ava} alt="Avatar" className={s_messages.avatar} />
                </div>
                <div className={s_messages.name}>{name}</div>
                {
/* получим пропс last_message 
из Dialogs нашего messages.jsx
присвоим msg пропсу из Dialog наш last_message для вывода
последней записи из dialog.jsx (наш дилог с пользователем)
***пока захардкорено и костыльно
       
*/}
                <Dialog msg={last_message} />
            </div>
        </NavLink>
    </div>
}

class Messages extends Component { 
    render() {
        let dialogsData = [
            {id:1, name:'Светлана Лёвина'}, 
            {id:2, name:'Андрей Дубов'}
        ]
        
        return (
            <div className={s_messages.container}>
                {/* рефакторим захордкореные пропсы, 
                мы же будем сервак исполдьзовать? 
                пока все так-же хардкорим массивом*/}
                <Dialogs name={dialogsData[0].name} id={dialogsData[0].id} avatar="https://sun1-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=200x0&quality=90&crop=78,42,1480,2017&sign=2a981e0d6bc534cc234fbe2e7e52914c&ava=1" last_message="Lorem Ipsum" />
                <Dialogs name="Андрей Дубов" id="2" avatar="https://vk.com/images/camera_200.png?ava=1" last_message="hello" />
            </div>
        );
    }
}
export default Messages;