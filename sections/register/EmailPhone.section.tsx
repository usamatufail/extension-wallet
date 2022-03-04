import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { CustomButton, Input } from 'components';
import { SignUpFormValues } from 'pages/register';
import { emailPhoneStyles } from './EmailPhone.styles';

interface EmailPhoneProps {
  values: SignUpFormValues;
  setStep: Dispatch<SetStateAction<number>>;
}

export const EmailPhone = ({
  values,
  setStep,
}: EmailPhoneProps): ReactElement => {
  const [email, setEmail] = useState(false);

  return (
    <div
      css={css`
        ${emailPhoneStyles}
      `}
    >
      <div className="emailphone__buttons">
        <button
          className={`emailphone__buttons-btn ${
            email ? 'emailphone__buttons-btn-active' : ''
          }`}
          onClick={() => setEmail(true)}
          type="button"
        >
          Email
        </button>
        <button
          className={`emailphone__buttons-btn ${
            !email ? 'emailphone__buttons-btn-active' : ''
          }`}
          onClick={() => setEmail(false)}
          type="button"
        >
          Phone
        </button>
      </div>
      <div className="emailphone__input">
        {email && (
          <Input
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            type="email"
          />
        )}
        {!email && (
          <Input
            id="phone"
            name="phone"
            placeholder="Ex (337) 378 8383"
            type="email"
          />
        )}
      </div>
      <div className="emailphone__continue">
        <CustomButton
          type="primary"
          disabled={email ? values?.email === '' : values?.phone === ''}
          onClick={() => setStep(2)}
        >
          Continue
        </CustomButton>
      </div>
      <div className="emailphone__privacy-policy">
        by clicking continue you must agree to near labs <br />
        <Link href="/">Terms & Conditions</Link> and{' '}
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="emailphone__separator"></div>
      <div className="emailphone__already-text">Already have NEAR account?</div>
      <div className="emailphone__login-btn">
        <CustomButton type="secondary">Log in with NEAR</CustomButton>
      </div>
    </div>
  );
};
