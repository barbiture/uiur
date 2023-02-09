import {UseFormRegister} from 'react-hook-form';

export type IStylesForm = {
    [key: string]: {
        [key: string]: string
    }
}
export type TitleProps = {
    typePage: string
}

export interface IFormValues {
    Name: string;
    Phone: string;
    Details: string;
    LeadType: string;
    required: boolean

}


export interface InputProps extends TitleProps {
    name: string;
    register: Record<UseFormRegister<IFormValues>>;
    required?: boolean;
    className?: string;
    cols?: string;
    rows?: string;
    type?: string
    value?: string
    pattern?: Array<string>
    widthMaskPhone?: boolean
};

export interface ChildProps {
    children: React.ReactNode;
}
