import { useEffect, useState  } from 'react';
import axios from 'axios';
import CardPost from '../Card/CardPost';
import { MainContainer, ContentCards } from './ContainerPosts.elements';

function ContainerPosts() {
    const [posts, setPosts] = useState([]);
    const api = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        getPosts();
    });

    const getPosts = () => {
        axios.get(api).then(resp => {
            setPosts(resp.data);
        });
    }

    const post = posts.map(element => (
        <CardPost key={element.id} idPost={element.id} titlePost={element.title} textPost={element.body} idUser={element.userId} />
    ));

    return(
        <MainContainer>
            <ContentCards>
                {post}
            </ContentCards>
        </MainContainer>
    );
}

export default ContainerPosts;