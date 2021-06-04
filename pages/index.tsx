import { NextPage } from 'next';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: orange;
  font-size: 35px;
`;

const Index: NextPage = () => {
  return (
    <div>
      <StyledTitle>Start next</StyledTitle>
    </div>
  );
};

export default Index;
