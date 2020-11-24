import s_connectW from './connect_wrapper.module.css'
const Connect_wrapper=()=>
{
    return(
    <div className={s_connectW.connect_wrapper}>
            <div className={s_connectW.logo}>
            <div className={s_connectW.logo_container}>
                <h2 className={s_connectW.logo_info}>
                    <span className={s_connectW.DominiSocial}>DominiSocial</span> помогает вам быть в курсе последних новостей а также быстро получать последние обновления нашей системы 
                    <span className={s_connectW.DominiGames}> DominiGames.</span></h2>
            </div>
            </div>
            <div className={s_connectW.connect}>
            <form className={s_connectW.register_form}>
                <div className={s_connectW.register_form_wrapper}>
                    <div className={s_connectW.p_reg}>
                <div className={s_connectW.p_log}><input type="text" className={s_connectW.login} placeholder="Электронный адрес или логин"></input></div>
                <div className={s_connectW.p_pas}><input type="password" className={s_connectW.password } placeholder="Пароль"></input></div>
                <div className={s_connectW.in}><input value="Вход" type="Submit" className={s_connectW.submit}></input>
                <div className={s_connectW.pass_none}>Забыли пароль?</div></div>
                <div className={s_connectW.no_reg}><h2 className={s_connectW.no_reg_text}>Создать аккаунт</h2></div>
                </div>
               
            
                </div>
                <div className={s_connectW.target}><h3>Зарегестрируйся и получи доступ к эксклюзивному контенту DominiGames!</h3>
                <h4 className={s_connectW.podr}>*подробности смотри на сайте в описании</h4></div>
            </form>
            </div>
           
    </div>
    );
}

export default Connect_wrapper;