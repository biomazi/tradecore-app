import React from 'react';
import { useFormContext } from 'hooks/useFormContext';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin: 20px auto;
    height: 100px;
`;

const StyledContainer = styled.ul`
  counter-reset: step;

`;

const StyledBreadcrumb = styled.li` 
  list-style-type: none;
  width: 25%;
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => active ? 'black' : '#234361'};

  &::before {
  width: 50px;
  height: 50px;
  content: counter(step);
  color: ${({ active }) => active ? '#E4E7EB' : '#234361'};
  counter-increment: step;
  line-height: 50px;
  border: 1px solid ${({ active }) => active ? '#E4E7EB' : '#234361'};
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: ${({ active }) => active ? '#234361' : '#E4E7EB'};
  }
  &::after {
    width: 100%;
    height: 2px;
    content: '';
    position: absolute;
    background-color: #7d7d7d;
    top: 25px;
    left: -50%;
    z-index: -1;
  }
  &:first-child::after {
    content: none;
  }
`
const Breadcrumb = ({ step }) => {
  const { state } = useFormContext()
  const steps = [
    { name: 'Genre', value: '1' },
    { name: 'Subgenre', value: '2' },
  ]
  if (step < 3) {
    steps.push({ name: '', value: '...' });
  }
  if (step === 3 && state.subgenre === 'newSubgenre') {
    steps.push({ name: 'Add new subgenre', value: '3' });
  }
  if (step === 4 && state.subgenre !== 'newSubgenre') {
    steps.push({ name: 'Information', value: '3', active: true });
  }
  if (step === 4 && state.subgenre === 'newSubgenre') {
    steps.push({ name: 'Add new subgenre', value: '3' });
    steps.push({ name: 'Information', value: '4' });
  }

  return (
    <StyledWrapper>
      <StyledContainer>
        {steps.map(el => (
          <StyledBreadcrumb key={el.value} active={el.value == step || el.active}>{el.name}</StyledBreadcrumb>
        ))}
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Breadcrumb
