import * as React from 'react';
import { useEffect, useState  } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalMoreInfo from '../Modal/ModalMoreInfo';
import { CardPosts, Content, TitlePost } from './CardPost.elements';

function CardPost({ titlePost, textPost, idUser, idPost}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOnCloseModal = () => {
        setModalOpen((old) => !old);
    };

    return (
        <CardPosts>
            <Content>
                <CardContent>
                    <TitlePost>
                        {titlePost}
                    </TitlePost>
                    <Typography variant="body2">
                        {textPost}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleOnCloseModal} >Saiba Mais</Button>
                    {handleOnCloseModal && (
                        <ModalMoreInfo openModal={isModalOpen} title={titlePost} text={textPost} idUserPost={idUser} idPost={idPost} onClose={handleOnCloseModal} />
                    )}
                </CardActions>
            </Content>
        </CardPosts>
    );
}

export default CardPost;