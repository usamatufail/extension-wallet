import { ReactElement, useState } from 'react';
import { css } from '@emotion/react';
import { emailPhoneStyles } from './EmailPhone.styles';
import { Input } from 'components';

export const EmailPhone = (): ReactElement => {
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
      <div className="emailphone__continue">Continue</div>
      <div className="emailphone__privacy-policy">PP</div>
      <div className="emailphone__separator"></div>
      <div className="emailphone__already-text"></div>
      <div className="emailphone__login-btn"></div>
    </div>
  );
};
