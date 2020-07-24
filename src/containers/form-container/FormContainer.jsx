import React from 'react';
import Step from 'components/step/Step';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 0px 12%;
`

const FormContainer = ({ formikProps }) => {
  return (
    <StyledWrapper>
      <Step formikProps={formikProps} />
    </StyledWrapper>
  )
}

export default FormContainer;
