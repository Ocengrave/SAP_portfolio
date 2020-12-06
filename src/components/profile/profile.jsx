import s_profile from './profile.module.css';
import { Component } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Post from './post';

class Profile extends Component {

  render() {
{/* 
захордкорим посты в профиле
позднее будем брать все данные из бд */}
    let myPost = [
      {id:1, text:'Hello world'},
      {id:2, text:"Ща мы как вынесем это react на раз два"}
  ] 

    {/*  через map будем делать копии 
      постов беря данные из массива 
      map работает до тех пора пока у нас есть что брать из массива
    */}
    let newPost = myPost
    .map(post => (<Post text={post.text} id = {post.id} />))
// **************** PROFILE CONTENT **************** //
  {/*  Надо рефакторить, разбить все на компоненты
  слишком много лишнего в одном файле */}
    return (
      <div className={s_profile.profile}>
        <div className={s_profile.header}>
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
          <div className={s_profile.header_info}></div>
        </div>
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
          {/* Component for post selectors */}
          <div className={s_profile.info_post}>
            <div className={s_profile.page_block}>
              <div className={s_profile.page_block_item}>Мои записи</div>
              <div className={s_profile.page_block_item}>Новости</div>
              <div className={s_profile.page_block_item}>Архив записей</div>
            </div>
            {/* Be call posts*/}
              {newPost}
            {/* End call post generation */}
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
