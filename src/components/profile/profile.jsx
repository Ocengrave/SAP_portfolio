import s_profile from './profile.module.css';
import { Component } from 'react';
import React from 'react';

class Profile extends Component  {
   render() {
   return(
      <div className={s_profile.profile}>
        
          <div className={s_profile.header}>
            {/* only mobile div  */}
            <div className={s_profile.header_info}>
            
           
            </div>
          </div>
          {/* only mobile div end  */}
        <div className={s_profile.nav}>
           <div className={s_profile.header_info_item}>
             <div className={s_profile.header_info_item_pd}>ПРОФИЛЬ</div>
             <div className={s_profile.header_info_item_pd}>СООБЩЕНИЯ</div>
             <div className={s_profile.header_info_item_pd}>ДРУЗЬЯ</div>
             <div className={s_profile.header_info_item_pd}>МУЗЫКА</div>
             <div className={s_profile.header_info_item_pd}>ВИДЕО</div>
             <div className={s_profile.header_info_item_pd}>ФОТОГРАФИИ</div>
             
           </div>
           <div className={s_profile.header_info_item_settings}>
           <div className={s_profile.header_info_item_pd}>НАСТРОЙКИ</div>
        </div>
        {/*  */}
          </div>
          <div className={s_profile.container}>
        

          </div>
       </div>
   );
  }
}
  
  export default Profile;
  