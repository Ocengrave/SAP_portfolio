import s_profile from './profile.module.css';
import { Component } from 'react';
import React from 'react';

import DropDown from './drop_down/drop_down';
import PostSelector from './container_profile/post_selector';

const Profile =(props)=>{
  //* пока уберем классы и наследование */
    // **************** PROFILE CONTENT **************** //
    return (
      <div className={s_profile.profile}>
         //* DropDowm is navbar + header for mobile menu on top include `.profile` class from profile.module.css */
        <DropDown />
        {/*//* End DropDown navbar*/}
        <div className={s_profile.container}>
          <div className={s_profile.avatar}>
            <img src="https://sun1-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=200x0&quality=90&crop=78,42,1480,2017&sign=2a981e0d6bc534cc234fbe2e7e52914c&ava=1" alt="Avatar" className={s_profile.avatar_img} />
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
          {/* //* вынесли все в state файл state.jsx*/}
          <PostSelector myPost={props.state.myPost}/> 
          {/* //* end PostSelector Component  */}
        </div>
      </div>
    );
}

export default Profile;
