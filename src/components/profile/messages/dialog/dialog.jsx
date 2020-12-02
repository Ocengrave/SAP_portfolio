import s_dialog from './dialog.module.css'
import s_messages from './../messages.module.css';
import Dialogs from './../messages.jsx';
const { render } = require("@testing-library/react");

const Last_msg = (props) => {
        return (
                <p>last message:</p>
        );
}
const Dialog = (props) => {
        return (
                <div className={s_messages.item}>
                        {/* импортируем блок ласт сообщения */}
                        <Last_msg />
                </div>
        );
}


export default Dialog;