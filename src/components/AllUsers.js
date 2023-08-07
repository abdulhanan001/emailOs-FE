import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import UserCard from './UserCard';
import axios from 'axios';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get('http://localhost:5000/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array to execute the effect only once

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
