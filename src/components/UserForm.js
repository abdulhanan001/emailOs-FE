import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
  Box,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  age: yup.number().integer().min(18).required(),
  gender: yup.string().oneOf(['male', 'female']).required(),
  about: yup.string().required(),
  dob: yup.date().required(),
  education: yup.string().oneOf(['BS', 'MS', 'PHD']).required(),
});

const Form = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', data);
      if (response.status === 200) {
        reset()
        return navigate('/users');
      }
    } catch (error) {
      toast(error.response.data.message, { type: 'error' });
    }
  };

  return (
    <>
      <Box style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', marginTop: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Register User</h2>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <InputLabel>Email</InputLabel>
          <Controller
            name="email"
            control={control}npm i react-toastify
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="text"
                variant="outlined"
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <InputLabel>Password</InputLabel>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="password"
                variant="outlined"
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          <Controller
            name="age"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="number"
                label="Age"
                variant="outlined"
                {...field}
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            )}
          />

          <FormControl>
            <FormLabel component="legend">Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              )}
            />
            {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
          </FormControl>

          <InputLabel>About</InputLabel>
          <Controller
            name="about"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextareaAutosize
                minRows={6}
                placeholder="Write something about yourself"
                style={{ width: '100%' }}
                {...field}
                error={Boolean(errors.about)}
              />
            )}
          />
          {errors.about && <FormHelperText>{errors.about.message}</FormHelperText>}

          <InputLabel>Date of Birth</InputLabel>
          <Controller
            name="dob"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="date"
                variant="outlined"
                {...field}
                error={!!errors.dob}
                helperText={errors.dob?.message}
              />
            )}
          />

          <Controller
            name="education"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl error={!!errors.education}>
                <InputLabel>Education</InputLabel>
                <Select {...field} label="Education">
                  <MenuItem value="BS">BS</MenuItem>
                  <MenuItem value="MS">MS</MenuItem>
                  <MenuItem value="PHD">PHD</MenuItem>
                </Select>
                {errors.education && <FormHelperText>{errors.education.message}</FormHelperText>}
              </FormControl>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ backgroundColor: '#616161', color: '#ffffff', alignSelf: 'center', margin: '20px 0' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Form;
