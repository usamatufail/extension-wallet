import { ReactElement } from 'react';
import { css } from '@emotion/react';
import { Field } from 'formik';
import { inputStyles } from './Input.styles';

interface InputProps {
  name: string;
  id: string;
  placeholder: string;
  type?: 'email' | 'number' | 'text';
  label?: string;
  validate?: (value: string) => string | undefined;
}

export const Input = ({
  name,
  id,
  placeholder,
  type = 'text',
  label = '',
  validate,
}: InputProps): ReactElement => {
  return (
    <div
      css={css`
        ${inputStyles}
      `}
    >
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <Field
        className="input__element"
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        validate={validate}
      />
    </div>
  );
};
