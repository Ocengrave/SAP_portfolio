import s_dialog from './dialog.module.css'
import s_messages from './../messages.module.css';
import Dialogs from './../messages.jsx';
const { render } = require("@testing-library/react");

const Dialog = (props) => {
       
        return (
                
                <div className={s_messages.item}>
                        {/* импортируем блок ласт сообщения */}
                        <p>{props.msg}</p>
                </div>
        );
}
export default Dialog;