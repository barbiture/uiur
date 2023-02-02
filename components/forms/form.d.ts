import {Path, UseFormRegister} from "react-hook-form";

export interface IFormValues {
    "Name": string;
    "Phone": string;
    Details: string;

}

export type InputProps = {
    label: Path<IFormValues> & string;
    name: string
    register: UseFormRegister<IFormValues>;
    required?: boolean;
    className?: string
    cols?: string
    rows?: string
};

export interface ChildProps {
    children: React.ReactNode
}
