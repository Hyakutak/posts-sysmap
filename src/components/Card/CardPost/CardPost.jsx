import * as React from 'react';
import { useState  } from 'react';
import CardContent from '@mui/material/CardContent';
import ModalMoreInfo from '../../Modal/ModalMoreInfo';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CardPosts, Content, TitlePost, TextPost, CardActionsButton, ButtonMoreInfo } from './CardPost.elements';

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
                    <TextPost>
                        {textPost}
                    </TextPost>
                </CardContent>
                <CardActionsButton>
                    <ButtonMoreInfo size="small" onClick={handleOnCloseModal} >
                        Saiba Mais
                        <KeyboardArrowRightIcon />
                    </ButtonMoreInfo>
                    {handleOnCloseModal && (
                        <ModalMoreInfo openModal={isModalOpen} title={titlePost} text={textPost} idUserPost={idUser} idPost={idPost} onClose={handleOnCloseModal} />
                    )}
                </CardActionsButton>
            </Content>
        </CardPosts>
    );
}

export default CardPost;