import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import ControlSelect from '../ControlSelect/ControlSelect';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { ISelectOption } from '../../types/uiTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieCustomLists,
  selectMovieCustomListsLoading,
} from '../../store/movieDetails/selectors';
import { createValuesSelectField } from '../../utils/selectUtils';
import { addMovieToCustomListsEffect } from '../../store/movieDetails/effects';

type MovieCustomListFormValues = {
  custom_lists: ISelectOption[];
};

type MovieCustomListFormProps = {
  movieId: number;
};

const MovieCustomListForm: FC<MovieCustomListFormProps> = ({ movieId }) => {
  const filteredCustomLists = useSelector(selectMovieCustomLists);
  const { isSubmitLoading } = useSelector(selectMovieCustomListsLoading);
  const filteredCustomListsOptions = createValuesSelectField(
    filteredCustomLists
  );
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MovieCustomListFormValues>({
    defaultValues: {
      custom_lists: [filteredCustomListsOptions[0]],
    },
  });

  useEffect(() => {
    reset({ custom_lists: [filteredCustomListsOptions[0]] });
  }, [filteredCustomLists]);

  const onSubmitHandler: SubmitHandler<MovieCustomListFormValues> = (data) => {
    dispatch(addMovieToCustomListsEffect(data.custom_lists, movieId));
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
            isLoading={isSubmitLoading}
            textValue='Add'
            style={{
              minWidth: '4rem',
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
