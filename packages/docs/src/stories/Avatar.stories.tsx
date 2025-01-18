import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@stein-ignite-ui/react'

export default {
    title: 'Data Display/Avatar',
    component: Avatar,

    args: {
        src: 'https://github.com/steinmurilo.png',
        alt: 'Murilo Stein'
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            }
        }
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}
