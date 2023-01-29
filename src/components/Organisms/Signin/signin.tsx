import React, { useState } from 'react';
import { Form, Input, Button, Heading, Text, Link, FlexBox, Seperator } from '../..';
import StyledSignIn from './style';

const SignIn = () => {
  const [data, setData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledSignIn>
      <Heading level="h1"> Log in to your account </Heading>
      <Form onSubmit={handleSubmit}>
        <Input id="email" type="text" name="email" placeholder="Email" onChange={handleChange} />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button> Sign in</Button>
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
    </StyledSignIn>
  );
};

export default SignIn;
