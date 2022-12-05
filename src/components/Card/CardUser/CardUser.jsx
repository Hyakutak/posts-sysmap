import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CardUser, CardHeaderUser, NameUser, EmailUser, CardContentUser, TextCommentUser } from './CardUser.elements';

export default function CardPost({ nameUser, emailUser, textComment }) {

  return (
    <CardUser>
      <CardHeaderUser>
        <AccountCircleIcon fontSize='large' />
        <NameUser>
          {nameUser}
        </NameUser>
        <EmailUser href={`emailto:${emailUser}`}>
          {emailUser}
        </EmailUser>
      </CardHeaderUser>
      <CardContentUser>
        <TextCommentUser>
          { textComment }
        </TextCommentUser>
      </CardContentUser>
    </CardUser>
  );
}