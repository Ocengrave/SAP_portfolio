import s_profile from './profile.module.css';
import s_profile_settings from './profile_settings.module.css';
function Profile() {
    return (
      <div className={s_profile.profile}>
          <div className={s_profile.header}></div>
          <div className={s_profile.left_margin}></div>
            <div className={s_profile.center_wrapper}>
                <div className={`${s_profile.left_menu} ${s_profile_settings.left_menu}`}>
                   <ul>
                       <li>Профиль</li>
                       <li className={s_profile_settings.msg}>Сообщения</li>
                       <li>Новости</li>
                       <li>Фотографии</li>
                       <li>Видео</li>
                       <li>Музыка</li>
                       <li>Настройки</li>
                   </ul>
                    </div>
            <div className={s_profile.about_profile}>
                <div className={s_profile_settings.avatar}>Аватар</div>
                <div className={s_profile_settings.about_profile_info}>Информация о профиле</div>
                <div className={s_profile_settings.friends}><div className={s_profile_settings.list_friend}>Список друзей</div>
                
                <div className={s_profile_settings.list_friend_online}>
                    
                    <div className={s_profile_settings.text_f_online}>Друзья в сети: <span className={s_profile_settings.count}> 6</span></div>
                    <div className={s_profile_settings.box}>
  <div className={s_profile_settings.item}>One</div>
  <div className={s_profile_settings.item}>Two</div>
  <div className={s_profile_settings.item}>Three</div>
  <div className={s_profile_settings.item}>Four</div>
  <div className={s_profile_settings.item}>Five</div>
  <div className={s_profile_settings.item}>Six</div>
  <div className={s_profile_settings.item}>One</div>
  <div className={s_profile_settings.item}>Two</div>
  <div className={s_profile_settings.item}>Three</div>
  <div className={s_profile_settings.item}>Four</div>
  <div className={s_profile_settings.item}>Five</div>
  <div className={s_profile_settings.item}>Six</div>
</div>
                </div>
            </div>
                <div className={s_profile_settings.info}>Информационная лента</div>
                </div>
            </div>
            <div className={s_profile.right_margin}></div>
      </div>
       
    );
  }
  
  export default Profile;
  