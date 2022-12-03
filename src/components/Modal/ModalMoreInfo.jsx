import * as React from 'react';
import { useEffect, useState  } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardUser from '../Card/CardUser';
import { ContentMain, PostContent, ContentComment, ButtonClose } from './ModalMoreInfo.elements';

export default function ModalMoreInfo({ openModal, idPost, title, text, onClose }) {
    const [open, setOpen] = React.useState(false);
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
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <PostContent>
                <ContentMain>
                <ButtonClose onClick={onClose}>X</ButtonClose>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        { title }
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        { text }
                    </Typography>
                </ContentMain>
                <ContentComment>
                    { users }
                </ContentComment>
            </PostContent>
        </Modal>
    );
}