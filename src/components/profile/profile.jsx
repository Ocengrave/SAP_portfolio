import s_profile from './profile.module.css';
import { Component } from 'react';
import React from 'react';

class Profile extends Component  {
  
   render() {
    
   return(
      <div className={s_profile.profile}>
        
          <div className={s_profile.header}>
            {/* only mobile div  */}
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
            <div className={s_profile.header_info}>
            
           
            </div>
          </div>
          <div className={s_profile.container}>
              <div className={s_profile.avatar}>
              <img src="https://sun1-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=200x0&quality=90&crop=78,42,1480,2017&sign=2a981e0d6bc534cc234fbe2e7e52914c&ava=1" alt="Avatar" className={s_profile.avatar_img}/>
                <div className={s_profile.profile_info_mobile}>
                  <div className={s_profile.border_style}>
                  <div className={s_profile.profile_namebar}>
                    <div className={s_profile.profile_namebar_items}>Алексей</div>
                    <div className={s_profile.profile_namebar_items}>Лёвин</div>
                  </div>
                  <div className={s_profile.profile_info_items}>
                    <div className={s_profile.profile_info_items_pd}>Дата рождения:<span className={s_profile.span}>30.01.1997</span></div>
                    <div className={s_profile.profile_info_items_pd}>Пол:<span className={s_profile.span}>Мужской</span></div>
                    <div className={s_profile.profile_info_items_pd_more}><a href="">Показать больше информации</a></div>
                  </div>
               
                </div>
                </div>
              </div>
              <div className={s_profile.info_post}>
                <div className={s_profile.page_block}>
                  <div className={s_profile.page_block_item}>Мои записи</div>
                  <div className={s_profile.page_block_item}>Новости</div>
                  <div className={s_profile.page_block_item}>Архив записей</div>
                </div>
                <div className={s_profile.info_post_news}>
                  <div className={s_profile.info_post_avatar}><img src="https://sun1-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=200x0&quality=90&crop=78,42,1480,2017&sign=2a981e0d6bc534cc234fbe2e7e52914c&ava=1" alt="Avatar" className={s_profile.info_post_avatar_img}/></div>
                  <div className={s_profile.info_post_name}>Алексей Лёвин
                    <div className={s_profile.info_post_date_add}>Добавлено: <span>11.11.2020</span></div>
                  </div>
                  <div className={s_profile.info_post_visible}>
                    
                  </div>
                  
                  <div className={s_profile.info_post_post}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, unde aliquid illum ab aspernatur, dicta eaque magni, deleniti illo sed a voluptate blanditiis hic dolorem esse incidunt eum enim vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum, illo ipsa, eum vitae aut dicta officiis error amet neque laborum, asperiores consectetur deleniti. Eum inventore veniam quod neque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sapiente dicta tempore harum perferendis fugit facilis, aut est possimus dolor minima assumenda dolorem in saepe labore eaque eos, architecto cum.</div>
                </div>
                </div>
                
                
         

          </div>
       
          
       </div>
   );
  }
}
  
  export default Profile;
  