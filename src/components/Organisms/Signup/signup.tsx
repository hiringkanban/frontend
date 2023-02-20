import React, { useState } from 'react';
import { Form, Input, Button, Heading, Text, Link, FlexBox, Seperator } from '../..';
import Box from '../../Atoms/Box';
import StyledAuth from '../AuthStyle';
import { addUser, UserT } from '../../../api/users';

const Signup = () => {
  const [data, setData] = useState<UserT>({ name: '', email: '', password: '' });
  const [errors, setErros] = useState({ email: false, name: false, password: false });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErros({ ...errors, [e.target.name]: false });
  };

  const formValidation = () => {
    if (data.email === '') {
      setErros({ ...errors, email: true });
    }

    if (data.name === '') {
      setErros({ ...errors, name: true });
    }

    if (data.password === '') {
      setErros({ ...errors, password: true });
    }

    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValidation()) return;
    addUser(data);
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
            status={errors.name ? 'danger' : ''}
          />
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            status={errors.email ? 'danger' : ''}
          />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            status={errors.password ? 'danger' : ''}
          />
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
