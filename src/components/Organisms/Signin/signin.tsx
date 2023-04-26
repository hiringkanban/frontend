import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Heading, Text, Link, FlexBox, Seperator } from '../..';
import { auth } from '../../../api/users';
import Alert from '../../Atoms/Alert';
import Box from '../../Atoms/Box';
import StyledAuth from '../AuthStyle';
import { updateAuth } from './auth';
import CheckBox from '../../Atoms/Checkbox';

const SignIn = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ msg: '', type: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.email === '' || data.password === '') {
      setStatus({ ...status, msg: 'Please fill out all required fields', type: 'danger' });
      return;
    }

    auth(data).then((result) => {
      if (result.data.length === 0) {
        setStatus({ ...status, msg: 'Email or password wrongs', type: 'danger' });
        return;
      }
      localStorage.setItem('authenticated', 'token');
      dispatch(updateAuth(true));
      navigate('/admin');
    });
  };

  const handlechangeValues = (values) => {
    console.log(values);
  };

  return (
    <StyledAuth>
      <Box>
        <Heading level="h3">Welcome to EasyHire! 👋</Heading>
        <Text>Please sign-in to your account and start the adventure</Text>
        <Form onSubmit={handleSubmit}>
          <Input id="email" type="text" name="email" placeholder="Email" onChange={handleChange} />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <CheckBox name="remember" checked onChange={handleChange}>
            {' '}
            Remember{' '}
          </CheckBox>
          <CheckBox.Group
            options={[{ name: 'item01' }, { name: 'item02' }]}
            onChange={handlechangeValues}
          />
          {status.type !== '' && <Alert message={status.msg} type={status.type} />}
          <Button size="large"> Sign in</Button>
        </Form>
        <FlexBox justify="space-between" alignItem="center">
          <Seperator width="30%" />
          <Text>Or Sign in with</Text>
          <Seperator width="30%" />
        </FlexBox>
        <FlexBox justify="center" margin="20px">
          <Button variant="default"> Google </Button>
        </FlexBox>
        <Text align="center" weight="300">
          Don&apos;t have an account yet?
          <Link href="/signup">Sign up</Link>
        </Text>
      </Box>
    </StyledAuth>
  );
};

export default SignIn;
