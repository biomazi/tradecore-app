import * as Yup from 'yup';

export const schema = Yup.object().shape({
  newSubgenreName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  author: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  isbn: Yup.string()
    .min(9, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
  publisher: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  datePublished: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  numberOfPages: Yup.number()
    .min(1, 'Too Short!')
    .max(2000, 'Too Long!')
    .required('Required'),
  format: Yup.string()
    .required('Required'),
  edition: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  editionLanguage: Yup.string()
    .required('Required'),
});
