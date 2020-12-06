// ****** Styles from profile.jsx (profile.module.css) */
//* by Alexey Lyovin 2020 */
import s_profile from './../profile.module.css';
import { NavLink } from 'react-router-dom';
const DropDown = () => {
    return (
        <div className={s_profile.header}>
            <div className={s_profile.header_info}></div>
            <div className={s_profile.nav}>
                <div className={s_profile.header_info_item}>
                    <div className={s_profile.header_info_item_pd}>ПРОФИЛЬ</div>
                    <NavLink to="/messages"><div className={s_profile.header_info_item_pd}>СООБЩЕНИЯ</div></NavLink>
                    <div className={s_profile.header_info_item_pd}>ДРУЗЬЯ</div>
                    <div className={s_profile.header_info_item_pd}>МУЗЫКА</div>
                    <div className={s_profile.header_info_item_pd}>ВИДЕО</div>
                    <div className={s_profile.header_info_item_pd}>ФОТОГРАФИИ</div>
                </div>
                <div className={s_profile.header_info_item_settings}>
                    <div className={s_profile.header_info_item_pd}>НАСТРОЙКИ</div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;