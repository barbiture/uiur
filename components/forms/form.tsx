import React from 'react';

import {useForm, SubmitHandler} from "react-hook-form";
import {ChildProps, IFormValues, InputProps} from "./form.d";


const InputWrapper = ({children}: ChildProps): JSX.Element => (
    <div className="text-white">
        {children}
    </div>
)

const Input = ({label, name, register, required}: InputProps) => {
    const data = {register: {...register(label, {required}),}}
    return (
        <InputWrapper>
            <label className="block">{name}</label>
            <input {...data.register} className="form-input px-4 py-3 text-black rounded-lg w-full"/>
        </InputWrapper>
    )
};
const TextArea = ({label, name, register, required}: InputProps) => {
        const data = {register: {...register(label, {required}),}}
        return (
            <InputWrapper>
                <label className="block">{name}</label>
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
    return (
        <div className="bg-brand-blue rounded-lg w-full p-6 font-eUkraine">
            <h2 className="text-white text-center mb-6">Долучайтесь до дослідніцької діяльності <br/>
                Та разом будувати здорове суспільство</h2>
            <form className="font-thin" onChange={handleSend} onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-rows-3 gap-5">
                    <div className="grid grid-cols-2 gap-5 row-span-3">
                        <Items.Input name="* Номер телефону" label="Name" register={register} required/>
                        <Items.Input name="* Ім’я" label="Phone" register={register} required/>
                    </div>
                    <Items.TextArea name="Додаткова інформація" className="row-span-1" label="Details"
                                    register={register} cols="30" rows="10"/>
                    <input value="Долучитись" type="submit"
                           className="bg-brand-yellow form-input rounded-lg text-white row-span-2"/>
                </div>
            </form>
        </div>
    );
};

export default Form;
