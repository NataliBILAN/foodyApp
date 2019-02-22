import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../ui/PageTitle';

const PlannerPage = () => (
  <PlannerContentWrap>
    <PageTitle>PlannerPage</PageTitle>
  </PlannerContentWrap>
);

const PlannerContentWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default PlannerPage;
