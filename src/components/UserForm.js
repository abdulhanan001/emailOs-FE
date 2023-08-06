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
  Grid,
  Paper,
  FormHelperText,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

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
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <>
      <Paper elevation={3} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', marginTop: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Register User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="text"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="age"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="number"
                    label="Age"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={!!errors.age}
                    helperText={errors.age?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.gender}>
                <FormLabel component="legend">Gender</FormLabel>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  )}
                />
                {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>About</InputLabel>
              <Controller
                name="about"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextareaAutosize
                    minRows={6}
                    placeholder="Write something about yourself"
                    fullWidth
                    style={{ width: '100%' }}
                    {...field}
                    error={!!errors.about}
                  />
                )}
              />
              {errors.about && <FormHelperText>{errors.about.message}</FormHelperText>}
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Date of Birth</InputLabel>
              <Controller
                name="dob"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="date"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={!!errors.dob}
                    helperText={errors.dob?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="education"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.education}>
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
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
              <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#616161', color: '#ffffff' }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Form;
