import * as yup from 'yup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-inferrable-types
const emailRegex: RegExp =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailValidator = yup
  .string()
  .email('Email adresa nije dobra')
  .matches(emailRegex, 'UNesite validan email')
  .required('Email polje je obavezno');

const passwordValidation = yup
  .string()
  .min(8, 'Password mora imati minimalno 8 karaktera')
  .required('Password je obavezno polje');

export const loginValidationScheme = yup.object().shape({
  email: emailValidator,
  password: passwordValidation
});
