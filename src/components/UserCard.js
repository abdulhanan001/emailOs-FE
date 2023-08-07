import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1">
          <strong>Age:</strong> {user.age}
        </Typography>
        <Typography variant="body1">
          <strong>Gender:</strong> {user.gender}
        </Typography>
        <Typography variant="body1">
          <strong>About:</strong> {user.about}
        </Typography>
        <Typography variant="body1">
          <strong>Date of Birth:</strong> {user.dob}
        </Typography>
        <Typography variant="body1">
          <strong>Education:</strong> {user.education}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
