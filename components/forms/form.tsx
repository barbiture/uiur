import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  ChildProps,
  IFormValues,
  InputProps,
  TitleProps,
  IStylesForm,
} from './form.d';
import { useIntl } from 'react-intl';
import { Checkmark } from 'components/checkmark';
import * as process from 'process';

const stylesForm: IStylesForm = {
  team: {
    form: 'bg-brand-blue text-white rounded-lg',
    text: 'text-white',
    input: 'form-input px-4 text-black w-full rounded-lg',
    button: 'hover:bg-white hover:text-brand-blue duration-700',
    radio:
      'rounded-lg block p-5 bg-brand-yellow w-full text-center peer-checked:text-brand-blue peer-checked:bg-white cursor-pointer',
    formWrapper: '',
  },
  home: {
    form: 'bg-white text-brand-blue',
    text: 'text-3xl',
    input: 'form-input px-4 text-black w-full',
    button: 'hover:bg-brand-blue hover:text-white duration-700',
    radio:
      'block p-5 bg-brand-yellow w-full text-center peer-checked:text-white peer-checked:bg-brand-blue cursor-pointer',
    formWrapper: 'sm:w-1/2 mx-auto',
  },
};
const styleSwitch = new Map(Object.entries(stylesForm));

const InputWrapper = ({ children }: ChildProps): JSX.Element => (
  <div>{children}</div>
);

const Radio = ({ name, register, typePage, value, type }: InputProps) => {
  return (
    <div className="w-full">
      <input
        {...register}
        id={value}
        type={type}
        name={register.name}
        value={value}
        className="peer hidden"
      />
      <label htmlFor={value} className={styleSwitch.get(typePage)?.radio}>
        {name}
      </label>
    </div>
  );
};
const countryCode = `+3\\80`;
const Input = ({ name, register, typePage, widthMaskPhone }: InputProps) => {
  return (
    <InputWrapper>
      <label className="block">{name}</label>
      {widthMaskPhone ? (
        <InputMask
          {...register}
          className={`${styleSwitch.get(typePage)?.input} p-3`}
          mask={`${countryCode} 99 999 99 99`}
          maskChar=" "
        />
      ) : (
        <input
          {...register}
          className={`${styleSwitch.get(typePage)?.input} p-3`}
        />
      )}
    </InputWrapper>
  );
};
const TextArea = ({ name, register, typePage }: InputProps) => {
  return (
    <InputWrapper>
      <label className="block">{name}</label>
      <textarea {...register} className={styleSwitch.get(typePage)?.input} />
    </InputWrapper>
  );
};
const Items = {
  Input: (props: InputProps) => <Input {...props} />,
  TextArea: (props: InputProps) => <TextArea {...props} />,
  Radio: (props: InputProps) => <Radio {...props} />,
};

const FormTitle = ({ typePage }: TitleProps) => {
  const intl = useIntl();
  return (
    <h2 className={`${styleSwitch.get(typePage)?.text} text-center mb-6`}>
      {intl.formatMessage({ id: 'form.title' })}
    </h2>
  );
};

const Form = ({ typePage }: TitleProps) => {
  const [isDone, setIsDone] = useState(false);
  const styleSwitch = new Map(Object.entries(stylesForm));
  const intl = useIntl();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const TOKEN = process.env.TELEGRAM_TOKEN;
  const chatID = process.env.TELEGRAM_CHAT_ID;
  const api =
    'https://api.telegram.org/bot' +
    TOKEN +
    '/sendMessage?chat_id=' +
    chatID +
    '&text=';
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const message = JSON.stringify(data);
    fetch(api + 'New%20Message:%20' + message)
      .then(() => {
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`${
        styleSwitch.get(typePage)?.form || ''
      } w-full p-6 font-eUkraine sm:text-base text-xs relative overflow-hidden`}
    >
      {isDone && (
        <div className="absolute bg-white opacity-75 w-full h-full flex items-center justify-center -left-1">
          <Checkmark />
        </div>
      )}
      <div className={styleSwitch.get(typePage)?.formWrapper}>
        <FormTitle typePage={typePage} />
        <div
          className={`pb-4 text-error font-light ${
            !Object.values(errors).length && 'invisible'
          } `}
        >
          * {intl.formatMessage({ id: 'form.error' })}
        </div>
        <form
          className="font-thin"
          // onChange={handleSend}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-rows-3 gap-5">
            <div className="grid grid-cols-2 gap-5 row-span-3">
              <Items.Input
                name={`* ${intl.formatMessage({ id: 'form.name' })}`}
                register={{ ...register('Name', { required: true }) }}
                typePage={typePage}
              />
              <Items.Input
                name={`* ${intl.formatMessage({ id: 'form.phone' })}`}
                register={{ ...register('Phone', { required: true }) }}
                typePage={typePage}
                widthMaskPhone={true}
              />
            </div>
            <Items.TextArea
              name={intl.formatMessage({ id: 'form.additional' })}
              className="row-span-1"
              register={{ ...register('Details') }}
              typePage={typePage}
              cols="30"
              rows="10"
            />
            <div className="grid grid-cols-2 gap-5">
              <Items.Radio
                typePage={typePage}
                name={intl.formatMessage({ id: 'form.radio.participant' })}
                type="radio"
                register={{ ...register('LeadType', { required: true }) }}
                value="participant"
              />
              <Items.Radio
                typePage={typePage}
                name={intl.formatMessage({ id: 'form.radio.volunteer' })}
                type="radio"
                value="volunteer"
                register={{ ...register('LeadType', { required: true }) }}
                required
              />
            </div>
            <input
              value={intl.formatMessage({ id: 'form.join' })}
              type="submit"
              className={`p-5 bg-brand-yellow row-span-2 border-0 font-thin text-brand-blue cursor-pointer ${
                styleSwitch.get(typePage)?.button
              }  ${styleSwitch.get(typePage)?.input}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
