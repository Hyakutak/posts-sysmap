import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { CardUser } from './CardUser.elements';

export default function CardPost({ nameUser, emailUser, textComment }) {

  return (
    <CardUser>
      <CardHeader
        avatar={
          <PersonIcon />
        }
        title={nameUser}
        subheader={emailUser}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { textComment }
        </Typography>
      </CardContent>
    </CardUser>
  );
}