import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

type ErrorBoundaryType = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryType,
  ErrorBoundaryType
> {
  constructor(props: ErrorBoundaryType) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.props.hasError || this.state.hasError) {
      return (
        <Container className='p-4'>
          <Row>
            <Col>
              <Alert variant='warning'>
                <h1 className='text-center'>Something went wrong...</h1>
              </Alert>
            </Col>
          </Row>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
