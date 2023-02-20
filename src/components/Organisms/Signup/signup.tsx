import React, { useState } from 'react';
import { Form, Input, Button, Heading, Text, Link, FlexBox, Seperator } from '../..';
import Box from '../../Atoms/Box';
import StyledAuth from '../AuthStyle';
import { addUser, UserT } from '../../../api/users';
import Alert from '../../Atoms/Alert';

const Signup = () => {
  const [data, setData] = useState<UserT>({ name: '', email: '', password: '' });
  const [status, setStatus] = useState({ msg: '', type: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.email === '' || data.name === '' || data.password === '') {
      setStatus({ ...status, msg: 'Please fill out all required fields', type: 'danger' });
      return;
    }
    addUser(data);
    setStatus({
      ...status,
      msg: 'Register success please check your inbox to verify your account',
      type: 'success',
    });
  };

  return (
    <StyledAuth>
      <Box>
        <Heading level="h3"> Welcome to EasyHire! 👋 </Heading>
        <Text>Get started - it&apos;s free. No credit card needed.</Text>
        <Form onSubmit={handleSubmit}>
          <Input
            id="full_name"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <Input id="email" type="text" name="email" placeholder="Email" onChange={handleChange} />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {status.type !== '' && <Alert message={status.msg} type={status.type} />}
          <Button size="large"> Sign up</Button>
        </Form>
        <FlexBox justify="space-between" alignItem="center">
          <Seperator width="30%" />
          <Text>Or Sign up with</Text>
          <Seperator width="30%" />
        </FlexBox>
        <FlexBox justify="center" margin="20px">
          <Button variant="default"> Google </Button>
        </FlexBox>
        <Text align="center" weight="300">
          Already have an account?
          <Link href="/signin">Sign in</Link>
        </Text>
      </Box>
    </StyledAuth>
  );
};

export default Signup;
