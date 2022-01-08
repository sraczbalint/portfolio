import React from "react";
import { GroupConteiner, FormInputContainer, FormInputLabel } from "./form-input.style";


const FormInput = ({ handleChange, label, ...otherProps}) => (
    <GroupConteiner>
        <FormInputContainer  onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </FormInputLabel>)
            : null
        }    
    </GroupConteiner>
);

export default FormInput;