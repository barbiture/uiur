import React from 'react';

import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";

interface IFormValues {
    "Name": string;
    "Phone": string;
    Details: string;

}

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
};

const InputWrapper = ({children}) => (
    <div className="text-white">
        {children}
    </div>
)

const Input = ({label, register, required, errors, type}: InputProps) => {
    const data = {register: {...register(label, {required}),}}
    console.log(errors, type)
    return (
        <InputWrapper>
            <label className="block">{label}</label>
            <input {...data.register} className="form-input px-4 py-3 text-black rounded-lg w-full"/>
        </InputWrapper>
    )
};
const TextArea = ({label, register, required, errors}) => {
    return (
        <InputWrapper>
            <label className="block">{label}</label>
            <textarea {...register(label, {required})} className="form-input px-4 py-3 text-black rounded-lg w-full"/>
        </InputWrapper>
    )
};

const Items = {
    "Input": (props) => <Input {...props}/>,
    'TextArea': (props) => <TextArea {...props} />
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
    return (
        <form onChange={handleSend} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-rows-3 gap-5">
                <div className="grid grid-cols-2 gap-5 row-span-3">
                    <Items.Input label="Name" register={register} errors={errors} required/>
                    <Items.Input label="Phone" register={register} errors={errors} required/>
                </div>
                <Items.TextArea className="row-span-1" label="Description" register={register} errors={errors}
                                cols="30" rows="10"/>
                <input type="submit" className="bg-brand-yellow form-input rounded-lg text-white row-span-2"/>
            </div>
        </form>
    );
};

export default Form;
