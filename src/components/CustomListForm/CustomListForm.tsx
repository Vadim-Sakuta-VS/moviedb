import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import ControlTextInput from '../ControlTextInput/ControlTextInput';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { CustomListParam } from '../../types/params';
import { addList, setFetchState } from '../../store/customLists/actionCreators';
import { CUSTOM_LISTS_ACTIONS_TYPES } from '../../store/customLists/reducers';
import { ApiAccount } from '../../api/apiAccount';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCustomLists,
  selectCustomListsFetchStateByType,
} from '../../store/customLists/selectors';

type CustomListFormProps = {
  defaultValues?: CustomListParam;
};

export const initialDefaultValues: CustomListParam = {
  name: '',
  description: '',
};

const CustomListForm: FC<CustomListFormProps> = ({ defaultValues }) => {
  const { control, handleSubmit, reset } = useForm<CustomListParam>({
    defaultValues: defaultValues || initialDefaultValues,
  });
  const { isLoading, error_message } = useSelector(
    selectCustomListsFetchStateByType(CUSTOM_LISTS_ACTIONS_TYPES.adding)
  );
  const listsCount = useSelector(selectCustomLists).length;
  const dispatch = useDispatch();

  const onSubmitHandler: SubmitHandler<CustomListParam> = async (data) => {
    try {
      if (listsCount >= 20) {
        dispatch(
          setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.adding, {
            isLoading: true,
            error_message: 'Max count of lists - 20.',
          })
        );
        return;
      }

      dispatch(
        setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.adding, {
          isLoading: true,
          error_message: '',
        })
      );

      const res = await ApiAccount.addCustomList(data);
      if (res.list_id) {
        dispatch(
          addList({
            ...data,
            id: res.list_id,
            favorite_count: 0,
            item_count: 0,
          })
        );
        reset();
        return;
      }

      dispatch(
        setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.adding, {
          error_message:
            res.status_message || (res.errors ? res.errors.join('. ') : ''),
        })
      );
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(
        setFetchState(CUSTOM_LISTS_ACTIONS_TYPES.adding, { isLoading: false })
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)} className='bg-light p-2'>
      <Row className='mb-3 flex-column'>
        <Col className='mb-4'>
          <ControlTextInput
            name='name'
            rules={{ required: 'Required field!' }}
            control={control}
            placeholder='Name'
          />
        </Col>
        <Col>
          <ControlTextInput
            name='description'
            control={control}
            placeholder='Description'
            as='textarea'
            rows={3}
          />
        </Col>
      </Row>
      <Row className='justify-content-end align-items-center'>
        {error_message && (
          <Col>
            <p className='pl-2 m-0 text-danger'>{error_message}</p>
          </Col>
        )}
        <Col className='col-auto'>
          <ButtonLoad
            type='submit'
            isLoading={!!isLoading}
            textValue='Add new list'
            style={{ minWidth: '7rem', minHeight: '38px' }}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default CustomListForm;
