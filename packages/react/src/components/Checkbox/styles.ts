import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";
import { styled, keyframes } from "../../styles";

const slideIn = keyframes({
    from: {
        transform: 'translateY(-100%)',
    },
    to: {
        transform: 'translateY(0%)',
    }
})

const slideOut = keyframes({
    from: {
        transform: 'translateY(0%)',
    },
    to: {
        transform: 'translateY(-100%)',
    }
})

export const CheckboxContainer = styled(Checkbox, {
    all: 'unset',
    width: '$6',
    height: '$6',
    backgroundColor: '$gray900',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $gray900',

    '&[data-state="checked"]': {
        backgroundColor: '$ignite300',
    },

    '&:focus': {
        border: '2px solid $ignite300',
    },


    svg: {
        color: '$white',
        width: '$4',
        height: '$4',

        '&[data-state="checked"]': {
            animation: `${slideIn} 200ms ease-out`,
        },

        '&[data-state="unchecked"]': {
            animation: `${slideOut} 200ms ease-out`,
        },
    }
})

export const Indicator = styled(CheckboxIndicator, {})

Checkbox.displayName = 'Checkbox'