import * as React from 'react';
import { useEffect, useState  } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import CardUser from '../Card/CardUser/CardUser';
import { ContentMain, PostContent, ContentComment, ButtonClose, TitlePost, TextPost } from './ModalMoreInfo.elements';

export default function ModalMoreInfo({ openModal, idPost, title, text, onClose }) {
    const [comment, setComment] = useState([])
    const apiComment = `https://jsonplaceholder.typicode.com/posts/${idPost}/comments`;

    useEffect(() => {
        getPosts();
    });

    const getPosts = () => {
        axios.get(apiComment).then(resp => {
            setComment(resp.data);
        });
    }

    const users = comment.map(element => (
        <CardUser nameUser={element.name} emailUser={element.email} textComment={element.body} />
    ));
  
    return (
        <Modal
            open={openModal}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <PostContent>
                <ContentMain>
                    <ButtonClose onClick={onClose}>X</ButtonClose>
                    <TitlePost>
                        { title }
                    </TitlePost>
                    <TextPost>
                        { text }
                    </TextPost>
                </ContentMain>
                <ContentComment>
                    { users }
                </ContentComment>
            </PostContent>
        </Modal>
    );
}