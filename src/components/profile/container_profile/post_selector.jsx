// ****** Styles from profile.jsx (profile.module.css) */
//* by Alexey Lyovin 2020 */
import s_profile from './../profile.module.css';
import Post from './../post/post.jsx';
const PostSelector = (props) => {

    //* Convert our myPost mass in generated posts for profile.jsx */
    let newPost = props.myPost //выносим посты в пропсы
        .map(post => (<Post text={post.text} id={post.id} />))
    return (
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
    );
}
export default PostSelector;