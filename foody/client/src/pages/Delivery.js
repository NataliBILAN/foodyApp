import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../ui/PageTitle';

const DeliveryPage = () => (
  <DeliveryPageWrap>
    <PageTitle>Delivery page</PageTitle>
  </DeliveryPageWrap>
);
const DeliveryPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default DeliveryPage;
