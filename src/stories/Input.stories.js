import React from "react";
import Input from "../components/Input/Input";

export default {
    title:'Components/Input',
    component:Input
}

export const Small = () => <Input size='small' placeholder='Small size'></Input>

export const Medium = () => <Input size='medium' placeholder='Medium Sizee'></Input>

export const Large = () => <Input size='large' placeholder='Large size'></Input>



