import React, { FC } from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';

type AccordionCustomProps = {
  buttonText: string;
  buttonIcon?: JSX.Element | string;
};

const AccordionCustom: FC<AccordionCustomProps> = ({
  buttonText,
  buttonIcon,
  children,
}) => {
  return (
    <Accordion>
      <Row className='mb-1'>
        <Col>
          <Accordion.Toggle
            as={Button}
            variant='light'
            className='d-flex align-items-center'
            eventKey='0'
          >
            <span className='mr-1'>{buttonText}</span>
            {buttonIcon}
          </Accordion.Toggle>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion.Collapse eventKey='0'>
            <>{children}</>
          </Accordion.Collapse>
        </Col>
      </Row>
    </Accordion>
  );
};

export default AccordionCustom;
