import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import ControlSelect from '../ControlSelect/ControlSelect';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { ISelectOption } from '../../types/uiTypes';
import { useSelector } from 'react-redux';
import { selectMovieCustomLists } from '../../store/movieDetails/selectors';
import { createValuesSelectField } from '../../utils/selectUtils';

type MovieCustomListFormValues = {
  custom_lists: ISelectOption[];
};

const MovieCustomListForm: FC = () => {
  const filteredCustomLists = useSelector(selectMovieCustomLists);
  const filteredCustomListsOptions = createValuesSelectField(
    filteredCustomLists
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieCustomListFormValues>({
    defaultValues: {
      custom_lists: [filteredCustomListsOptions[0]],
    },
  });

  const onSubmitHandler: SubmitHandler<MovieCustomListFormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Row className='align-items-center'>
        <Col className='pr-0'>
          <ControlSelect
            control={control}
            isMulti={true}
            name='custom_lists'
            options={filteredCustomListsOptions}
            rules={{ required: 'Required field!' }}
          />
        </Col>
        <Col className='col-auto'>
          <ButtonLoad
            type='submit'
            isLoading={false}
            textValue='Add'
            style={{
              minWidth: '4rem',
              minHeight: 38,
              maxHeight: 36,
              marginBottom: '.5rem',
            }}
          />
        </Col>
      </Row>
      {errors.custom_lists && (
        <Row>
          <Col>
            <p className='text-danger m-0'>
              {errors.custom_lists && (errors.custom_lists as any).message}
            </p>
          </Col>
        </Row>
      )}
    </Form>
  );
};

export default MovieCustomListForm;
