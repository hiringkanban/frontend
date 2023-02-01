import React, { useState } from 'react';
import { Form, Input, Button, Heading, Text, Link, FlexBox, Seperator } from '../..';
import Box from '../../Atoms/Box';
import StyledAuth from '../AuthStyle';

const SignIn = () => {
  const [data, setData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
