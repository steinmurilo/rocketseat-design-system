import { Indicator } from "@radix-ui/react-checkbox";
import { CheckboxContainer } from "./styles";
import { Check } from "phosphor-react";
import { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxContainer {...props}>
            <Indicator asChild>
                <Check weight="bold" />
            </Indicator>
        </CheckboxContainer>
    )
}