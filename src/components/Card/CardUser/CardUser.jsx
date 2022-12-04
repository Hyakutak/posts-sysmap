import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
        <EmailUser>
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