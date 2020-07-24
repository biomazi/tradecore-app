import React from 'react';
import { Pane, Radio } from 'evergreen-ui';
import { Field } from 'formik';
import styled from 'styled-components';

export const StyledRadio = styled(Radio)`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  input { visibility: hidden; }
  div  { 
    visibility: hidden; 
    width: 0px;
    height: 0px;
  }
  span {
    color: ${({ active }) => active ? '#E4E7EB' : '#234361'};
    margin: 0;
  }
`;

export const StyledPane = styled(Pane)`
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 10px 0 0;
  background-color: ${({ active }) => active ? '#234361' : '#E4E7EB'};
  color: ${({ active }) => active ? '#E4E7EB!important' : '#234361!important'};
`;

const GenreList = ({ genres, formikProps }) => {
  const options = genres.map(genre => ({ id: genre.id, label: genre.name, value: genre.name }));

  return (
    <Pane
      marginBottom={24}
      role="group"
      display="flex"
      justifyContent="flex-start"
      flexWrap="wrap">
      {options.map(genre => (
        <StyledPane width={160} height={56} active={formikProps.values.genre === genre.value} key={genre.id}>
          <Field
            as={StyledRadio}
            name="genre"
            active={formikProps.values.genre === genre.value}
            checked={genre.value === formikProps.values.genre}
            label={genre.label}
            value={genre.value}
          />
        </StyledPane>
      ))}
    </Pane>
  )
}

export default GenreList;
