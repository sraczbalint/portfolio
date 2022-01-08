import React from "react";

import { CustomButtonContainer } from "./custom-botton.style";

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;