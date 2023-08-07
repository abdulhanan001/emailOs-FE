import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import UserCard from '../components/UserCard';
import api from '../api'

const AllUsers = () => {
  const [users, setUsers] = useState([]); // TODO: we should use RTK or redux

  useEffect(() => {
    api.get('/users')
      .then((response) => {
        setUsers(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <h1>All Users</h1>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllUsers;
