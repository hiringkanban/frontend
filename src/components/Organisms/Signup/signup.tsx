import React, { useState } from 'react';
import { Form, Input, Button, Heading, Text, Link, FlexBox, Seperator } from '../..';
import StyledSignup from './style';

const Signup = () => {
  const [data, setData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledSignup>
      <Heading level="h2"> Welcome to EasyRecruiters </Heading>
      <Text>Get started - it&apos;s free. No credit card needed.</Text>
      <Form onSubmit={handleSubmit}>
        <Input
          id="full_name"
          type="text"
          name="full_name"
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
        <Button> Sign up</Button>
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
    </StyledSignup>
  );
};

export default Signup;
