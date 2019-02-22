import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const CategorySelector = ({ value, options, onChange }) => (
  <StyledSelector
    value={value}
    onChange={onChange}
    options={options}
    placeholder="Категория"
  />
);

const StyledSelector = styled(Select)`
  width: 85%;
  margin:0 auto 30px;
`;

export default CategorySelector;
