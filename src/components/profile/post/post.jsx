// Post components for generating on our profile page
// styles takes from profile module (y can check it in profile.module.css)
// *************** For Profile.jsx/Profile.module.css ************* //
import s_profile from './../profile.module.css';
const Post = (props) => {
    return (
        <div className={s_profile.info_post_news}>
            <div className={s_profile.info_post_avatar}><img src="https://sun1-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=200x0&quality=90&crop=78,42,1480,2017&sign=2a981e0d6bc534cc234fbe2e7e52914c&ava=1" alt="Avatar" className={s_profile.info_post_avatar_img} /></div>
            <div className={s_profile.info_post_name}><a href="/profile">Алексей Лёвин</a>
                <div className={s_profile.info_post_date_add}>Добавлено: <span>11.11.2020</span></div>
            </div>
            <div className={s_profile.info_post_visible}></div>
            <div className={s_profile.info_post_post}>{props.text}</div>
        </div>
    );
}
export default Post;