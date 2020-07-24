import React from 'react';
import styled from 'styled-components';
import { TickCircleIcon, Button } from 'evergreen-ui';
import { useFormContext } from 'hooks/useFormContext';

const StyledButton = styled(Button)`
  width: fit-content;

  background-image:linear-gradient(to bottom, #6b6d6d, #7c7c7d);
  color: white;
  &&& { 
    &:hover, :active, :focus {
    background-image:linear-gradient(to bottom, grey, grey);
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  justify-content: space-evenly;
`

const StyledText = styled.p`
  width: fit-content;
`

const BookAdded = ({ resetForm }) => {
  const { state, dispatch } = useFormContext();
  const resetFormHandler = () => {
    resetForm();
    dispatch({ type: 'setShowBookAdded', payload: false });
  }
  return (
    state.showBookAdded && (
      <StyledContainer>
        <TickCircleIcon size={120} color="muted" />
        <StyledText>Book added successfully</StyledText>
        <StyledButton onClick={() => resetFormHandler()}>Add Another book</StyledButton>
      </StyledContainer>
    )
  )
};

export default BookAdded;
