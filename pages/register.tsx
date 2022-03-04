import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import { register } from 'styles';
import { TitleBar, Input } from 'components';
import { Formik, Form } from 'formik';
import { EmailPhone, Verification } from 'sections';

export interface SignUpFormValues {
  email: string;
  phone: string;
  verificationCode: string;
  fullName: string;
  accountID: string;
  password: string;
  confirmPassword: string;
  seedPhrase: string[];
}

const Home: NextPage = () => {
  const [step, setStep] = useState(1);
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    switch (step) {
      case 2:
        setTitleText('Verification');
        break;
      case 3:
        setTitleText('Create NEAR Account');
        break;
      case 4:
      case 5:
        setTitleText('Secure your account');
        break;
      default:
        setTitleText('');
    }
  }, [step]);

  const closeAction = () => {
    switch (step) {
      case 2:
        return setStep(1);
      default:
        setStep((step) => step);
    }
  };

  const initialValues: SignUpFormValues = {
    email: '',
    phone: '',
    verificationCode: '',
    fullName: '',
    accountID: '',
    password: '',
    confirmPassword: '',
    seedPhrase: [''],
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={css`
          ${register}
        `}
      >
        <TitleBar
          closeAction={closeAction}
          close={step !== 1}
          text={titleText}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            actions.setSubmitting(false);
          }}
          component={({ values }) => {
            console.log(values);
            return (
              <Form>
                {step === 1 && <EmailPhone values={values} setStep={setStep} />}
                {step === 2 && (
                  <Verification values={values} setStep={setStep} />
                )}
              </Form>
            );
          }}
        ></Formik>
      </div>
    </div>
  );
};

export default Home;
