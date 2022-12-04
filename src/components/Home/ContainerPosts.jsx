import { useEffect, useState  } from 'react';
import axios from 'axios';
import CardPost from '../Card/CardPost/CardPost';
import { MainContainer, ContentCards, ContainerPagination, ButtonPagination } from './ContainerPosts.elements';

function ContainerPosts() {
    const [posts, setPosts] = useState([]);
    const [postsPerPage, SetpostsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.ceil(posts.length / postsPerPage);
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    const api = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        getPosts();
    });

    const getPosts = () => {
        axios.get(api).then(resp => {
            setPosts(resp.data);
        });
    }

    const pagination = Array.from(Array(pages), (item, index) => {
        return <ButtonPagination value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} >{ index + 1 }</ButtonPagination>
    });

    const post = currentPosts.map(element => (
        <CardPost key={element.id} idPost={element.id} titlePost={element.title} textPost={element.body} idUser={element.userId} />
    ));

    return(
        <MainContainer>
            <ContentCards>
                { post }
            </ContentCards>
            <ContainerPagination>
                { pagination }
            </ContainerPagination>
        </MainContainer>
    );
}

export default ContainerPosts;