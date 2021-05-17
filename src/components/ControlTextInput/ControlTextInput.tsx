import React, { FC } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useController, RegisterOptions, Control } from 'react-hook-form';
import styled from 'styled-components';

const RowWrapper = styled(Row)`
  position: relative;
`;

const StyledFormText = styled(Form.Text)`
  position: absolute;
  top: 100%;
  left: 0;
`;

interface ControlProps {
  name: string;
  defaultValue?: string;
  rules?: RegisterOptions;
  control: Control<any>;
  onChange?: (value: string) => void;
  [key: string]: any;
}

const ControlTextInput: FC<ControlProps> = ({
  name,
  defaultValue,
  rules,
  control,
  onChange,
  ...props
}) => {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    defaultValue: defaultValue || '',
    rules,
    control,
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    filedOnChange: (e: React.ChangeEvent) => void
  ) => {
    onChange && onChange(e.target.value);
    filedOnChange(e);
  };

  return (
    <RowWrapper className='m-0'>
      <Form.Control
        isInvalid={errors[name]}
        {...props}
        {...field}
        onChange={
          onChange
            ? (e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeHandler(e, field.onChange)
            : field.onChange
        }
      />
      {errors[name] && (
        <StyledFormText className='text-danger'>
          {errors[name].message}
        </StyledFormText>
      )}
    </RowWrapper>
  );
};

export default ControlTextInput;
