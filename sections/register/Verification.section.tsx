import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { SignUpFormValues } from 'pages/register';
import { verificationStyles } from './Verification.styles';
import AuthCode from 'react-auth-code-input';
import { CustomButton } from 'components';

interface VerificationProps {
  values: SignUpFormValues;
  setStep: Dispatch<SetStateAction<number>>;
}

export const Verification = ({
  values,
  setStep,
}: VerificationProps): ReactElement => {
  const [otp, setOtp] = useState('');
  return (
    <div
      css={css`
        ${verificationStyles}
      `}
    >
      <div className="verification">
        <div className="verification__heading">
          We&apos;ve sent a 6-digit verification code to the{' '}
          {values?.email ? 'email address' : 'phone number'}
          <span className="verification__heading-mailphone">
            {values?.email || values?.phone}
          </span>
        </div>
        <div className="verification__boxes">
          <AuthCode
            allowedCharacters="numeric"
            length={6}
            containerClassName="container"
            inputClassName="input"
            onChange={(value) => {
              setOtp(value);
            }}
          />
        </div>
        <div className="verification__button">
          <CustomButton type="primary" disabled={otp.length < 6}>
            Continue
          </CustomButton>
        </div>
        <div className="verification__separator"></div>
        <div className="verification__didnt">
          Didn&apos;t receive your code?
        </div>
        <div
          className="verification__different"
          role="button"
          onClick={() => setStep(1)}
        >
          Send to a different email or phone number
        </div>
        <div className="verification__resend">Resend your code</div>
      </div>
    </div>
  );
};
