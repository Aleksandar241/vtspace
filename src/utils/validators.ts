import * as yup from 'yup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-inferrable-types
const emailRegex: RegExp =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailValidator = yup
  .string()
  .email('Email adresa nije dobra')
  .matches(emailRegex, 'Unesite validan email')
  .required('Email polje je obavezno');

const passwordValidation = yup
  .string()
  .min(8, 'Password mora imati minimalno 8 karaktera')
  .required('Password je obavezno polje');

const confrimPasswprdValidation = yup
  .string()
  .required('Potvrda password je obavezna')
  .oneOf([yup.ref('password')], 'Password se ne podudara');

export const loginValidationScheme = yup.object().shape({
  email: emailValidator,
  password: passwordValidation
});

export const signupValidationScheme = yup.object().shape({
  email: emailValidator,
  name: yup.string().required('Ime je obavezno polje'),
  surname: yup.string().required('Prezime je obavezno polje'),
  password: passwordValidation,
  confirmPassword: confrimPasswprdValidation
});
