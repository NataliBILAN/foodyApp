import React from 'react';
import styled from 'styled-components';

import { Button } from '../../../ui/Button';

const CurrentFilter = ({ category, onClear }) => (
  <div>
    <Filter>Current choice: {category}</Filter>
    <ClearButton type="button" onClick={onClear}>
      Clean Filter
    </ClearButton>
  </div>
);

const Filter = styled.p`
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ClearButton = styled(Button)`
  margin-bottom: 30px;
`;

export default CurrentFilter;
