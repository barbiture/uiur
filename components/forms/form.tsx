import React from 'react';

import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";

interface IFormValues {
    "Name": string;
    "Phone": string;
    Details: string;

}

type InputProps = {
    label: Path<IFormValues> & string;
    register: UseFormRegister<IFormValues>;
    required?: boolean;
    className?: string
    cols?: string
    rows?: string
};

export interface ChildProps {
    children: React.ReactNode
}

const InputWrapper = ({children}: ChildProps): JSX.Element => (
    <div className="text-white">
        {children}
    </div>
)

const Input = ({label, register, required}: InputProps) => {
    const data = {register: {...register(label, {required}),}}
    return (
        <InputWrapper>
            <label className="block">{label}</label>
            <input {...data.register} className="form-input px-4 py-3 text-black rounded-lg w-full"/>
        </InputWrapper>
    )
};
const TextArea = ({label, register, required}: InputProps) => {
        const data = {register: {...register(label, {required}),}}
        return (
            <InputWrapper>
                <label className="block">{label}</label>
                <textarea {...data.register} className="form-input px-4 py-3 text-black rounded-lg w-full"/>
            </InputWrapper>
        )
    }
;

const Items = {
    "Input": (props: InputProps) => <Input {...props}/>,
    'TextArea': (props: InputProps) => <TextArea {...props} />
}

const Form = () => {
    const {register, handleSubmit, formState: {errors},} = useForm<IFormValues>();
    console.log(errors)
    const handleSend: React.FormEventHandler<HTMLFormElement> = (event): void => {
        console.log(event)
    }
    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
    };
    console.log('errors')
    return (
        <div className="bg-brand-blue rounded-lg w-full p-6">
            <h2 className="text-white text-center mb-2">Долучайтесь до дослідніцької діяльності <br/>
                Та разом будувати здорове суспільство</h2>
            <form onChange={handleSend} onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-rows-3 gap-5">
                    <div className="grid grid-cols-2 gap-5 row-span-3">
                        <Items.Input label="Name" register={register} required/>
                        <Items.Input label="Phone" register={register} required/>
                    </div>
                    <Items.TextArea className="row-span-1" label="Details" register={register} cols="30" rows="10" />
                    <input type="submit" className="bg-brand-yellow form-input rounded-lg text-white row-span-2"/>
                </div>
            </form>
        </div>
    );
};

export default Form;
