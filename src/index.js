import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//* hard code without bd for our posts, вынесли данные в index.js */
let myPost = [
  { id: 1, text: 'Hello world' },
  { id: 2, text: "Ща мы как вынесем это react на раз два" },
  { id: 3, text: "Этот пост сгенерирован просто для теста"},
  { id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus semper urna,"+
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus semper urna,"+
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus semper urna,"},
  { id: 5, text: "Last post"}
]
//newPost is a generating messages for link in drop-down menu - messages 
//newPost переменная для генерации сообщений для окна сообщений из выпадающего меню (Сообщения)
let newPost =
[
  {url: 'https://sun1-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=200x0&quality=96&crop=78,42,1480,2017&sign=c1f652efd7ca6c8c2b523d3dd56e162b&ava=1', name: 'Светлана Лёвина', text:'Сегодня чудесный день'},
  {url: 'https://vk.com/images/camera_200.png?ava=1', name: 'Андрей Дубов', text:'Привет, как дела?'}
]
ReactDOM.render(

  <React.StrictMode>
    {/* будем передавать пропсы из index.js */}
    <App myPost={myPost} newPost={newPost}/>

  </React.StrictMode>,
  document.body

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
