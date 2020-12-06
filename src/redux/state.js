//* hard code without bd for our posts, вынесли данные в index.js */
let state =
{
    profile: //profile.jsx
    {
        myPost: [
        { id: 1, text: 'Hello world' },
        { id: 2, text: "Ща мы как вынесем это react на раз два" },
        { id: 3, text: "Этот пост сгенерирован просто для теста" },
        {
            id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus semper urna," +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus semper urna," +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus semper urna,"
        },
        { id: 5, text: "Last post" }],
    },
    messages: //messages.jsx
    {
        newPost: [
            {
                id:`dialog/${1}`,
                url: 'https://sun1-26.userapi.com/impg/fY54ae27V-Vcy4XXJhS2t10ps5BQk0I4QsNGQA/Xol7_0_s7gg.jpg?size=200x0&quality=96&crop=78,42,1480,2017&sign=c1f652efd7ca6c8c2b523d3dd56e162b&ava=1',
                name: 'Светлана Лёвина',
                text: 'Сегодня чудесный день',
                
               
            },
            {
                id:`dialog/${2}`,
                url: 'https://vk.com/images/camera_200.png?ava=1',
                name: 'Андрей Дубов',
                text: 'Привет, как дела?',

                
            }
        ]
    }

}

export default state