import React, { FC } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useController, RegisterOptions, Control } from 'react-hook-form';

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
    <Row className='m-0' style={{ position: 'relative' }}>
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
        <Form.Text
          className='text-danger'
          style={{ position: 'absolute', top: '100%', left: 0 }}
        >
          {errors[name].message}
        </Form.Text>
      )}
    </Row>
  );
};

export default ControlTextInput;
