import s_footer from './footer.module.css';
import footer from './footer.png'
const Footer=()=>
{
    return(
        
    <div className={s_footer.footer}>
         
            <div className={s_footer.footer_info}>
                    <ul className={s_footer.footer_info_language_ul}>
                        <li>Русский</li>
                        <li>English</li>
                        <li>Deutsche</li>
                        <li>Français</li>
                        <li>Український</li>
                        <li>Ceština</li>
                    </ul>
                    
            </div>
            <div className={s_footer.coppyright}>©Alexey Lyovin 2020</div>
    </div>
    );
}

export default Footer;