import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Form, Image, Row } from 'react-bootstrap';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import ControlTextInput from '../ControlTextInput/ControlTextInput';
import { IUserParam } from '../../types/params';

type LoginFormProps = {
  onSubmit: (user: IUserParam) => void;
  isLoading: boolean;
  error_message: string;
};

const fields = ['username', 'password'];

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  isLoading,
  error_message,
}) => {
  const { control, handleSubmit } = useForm<IUserParam>();

  const onSubmitHandler: SubmitHandler<IUserParam> = (data) => {
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Row className='d-flex justify-content-center align-items-center mb-3'>
        <Col className='col-auto'>
          <h3 className='m-0'>Login with TMDB</h3>
        </Col>
        <Col className='col-auto pl-0'>
          <Image
            src='https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd.jpg'
            roundedCircle
            width={50}
          />
        </Col>
      </Row>
      {fields.map((name) => (
        <Row className='mb-4' key={name}>
          <Col>
            <ControlTextInput
              type={name.includes('pass') ? 'password' : 'text'}
              name={name}
              rules={{ required: 'Required field!' }}
              placeholder={name[0].toUpperCase() + name.slice(1)}
              control={control}
            />
          </Col>
        </Row>
      ))}
      <Row className='mb-2'>
        <Col className='d-flex justify-content-center'>
          <ButtonLoad
            type='submit'
            isLoading={isLoading}
            textValue='Sign In'
            style={{ minWidth: '10rem', minHeight: 38 }}
          />
        </Col>
      </Row>
      {error_message && (
        <Row>
          <Col>
            <p className='text-danger text-center'>{error_message}</p>
          </Col>
        </Row>
      )}
    </Form>
  );
};

export default LoginForm;
