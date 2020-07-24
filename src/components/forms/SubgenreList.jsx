import React from 'react'
import { useFormContext } from 'hooks/useFormContext';
import { Pane } from 'evergreen-ui';
import { Field } from 'formik';
import { StyledRadio } from './GenreList';
import { StyledPane } from './GenreList';

const SubgenreList = ({ subgenres, formikProps }) => {
  const options = subgenres.map(subgenre => ({ id: subgenre.id, label: subgenre.name, value: subgenre.name }));
  options.push({ id: 'Add New', label: 'Add New', value: 'newSubgenre' });
  const { dispatch } = useFormContext();

  const handleChange = event => {
    formikProps.setFieldValue('subgenre', event.target.value);
    dispatch({ type: 'setSubgenre', payload: event.target.value })
  }

  return (
    <Pane
      marginBottom={24}
      role="group"
      display="flex"
      justifyContent="flex-start"
      flexWrap="wrap">
      {options.map(subgenre => (
        <StyledPane width={160} height={56} active={formikProps.values.subgenre === subgenre.value} key={subgenre.id}>
          <Field
            as={StyledRadio}            
            name="subgenre"
            active={formikProps.values.subgenre === subgenre.value}
            checked={subgenre.value === formikProps.values.subgenre}
            label={subgenre.label}
            value={subgenre.value}
            onChange={handleChange}
          />
        </StyledPane>
      ))}
    </Pane>
  )
}

export default SubgenreList
