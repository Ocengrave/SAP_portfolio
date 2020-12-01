import s_dialog from './dialog.module.css'
import s_messages from './../messages.module.css';
const { render } = require("@testing-library/react");


const Dialog=(props)=>
{
        return(
        <div className={s_messages.item}>
             <p>{props.msg}</p>
        </div>
        );
}
export default Dialog;