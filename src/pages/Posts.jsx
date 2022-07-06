import {useEffect, useRef, useState} from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const lastElement = useRef()

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts()
    }, [page, limit])


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }
    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton
                style={{marginTop: '30px'}}
                onClick={() => {
                    setModal(true)
                }}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '20px 0px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
            onChange={value => setLimit(value)}
            defaultValue={'posts count on page'}
            options={[
                {value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 20, name: '20'},
                {value: -1, name: 'all'},
            ]}
            />
            {postError &&
                <h1>Error: {postError}</h1>}
            <PostList delete={deletePost} posts={sortedAndSearchedPosts} title={'List of posts'}/>
            <div ref={lastElement} style={{height: '20px', background: 'grey'}}/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
            }
            <MyPagination page={page} setPage={setPage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;