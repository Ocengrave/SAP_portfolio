import s_messages from './messages.module.css';
const GeneratePost =(props)=>
{
    // Вынесем генерацию постов в отдельный jsx файл
    return (
        <div className={s_messages.user}>
        <div className={s_messages.avatar}>
            <img src={props.avatar_url} alt="Avatar" className={s_messages.avatar} />
        </div>
         <div className={s_messages.name}>{props.name}</div>
            <div className={s_messages.item}>
                <div className={s_messages.container}></div>
                    {props.text}
            </div>
    </div>
    );

}
export default GeneratePost;