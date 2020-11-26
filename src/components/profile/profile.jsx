import s_profile from './profile.module.css';
import s_profile_settings from './profile_settings.module.css';
function Profile() {
    return (
      <div>
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
                <div className={s_profile_settings.avatar}>
                  <div className={s_profile_settings.avatarimg}>
                  <img src="https://sun9-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=1622x2160&quality=96&proxy=1&sign=2de3a4e88430bbf057923a776f642f25" alt="" srcset=""/>
                  </div>
                  </div>
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
       <div className={s_profile.profile_mobile}>
         <div className={s_profile.header_mobile}>
         <div className={s_profile.menu_mobile}>
         <div className={s_profile.menu_mobile_item}>Главная</div>
             <div className={s_profile.menu_mobile_item}>Новости</div>
             <div className={s_profile.menu_mobile_item}>Музыка</div>
             <div className={s_profile.menu_mobile_item}>Друзья</div>
             <div className={s_profile.menu_mobile_item}>Видео</div>
             <div className={s_profile.menu_mobile_item}>Настройки</div>
           </div>
         </div>
         <div className={s_profile.center_wrapper_mobile}>
         <div className={s_profile.menu_mobile_small}>
             <div className={s_profile.menu_mobile_item}>Главная</div>
             <div className={s_profile.menu_mobile_item}>Новости</div>
             <div className={s_profile.menu_mobile_item}>Музыка</div>
             <div className={s_profile.menu_mobile_item}>Друзья</div>
             <div className={s_profile.menu_mobile_item}>Видео</div>
             <div className={s_profile.menu_mobile_item}>Настройки</div>
           </div>
         <div className={s_profile.avatar_mobile}>аватар</div>
         <div className={s_profile.profil_info_mobile}>инфо</div>
           container</div>
       </div>
       </div>
    );
  }
  
  export default Profile;
  