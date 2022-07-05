import {ComponentStory} from '@storybook/react'
import CustomizedRadios from '.'
export default {
    title: 'Atoms/RadioButtons',
    component: CustomizedRadios,  
}

const Template: ComponentStory <typeof CustomizedRadios> = (args) => < CustomizedRadios  />

export const RadioBtn = Template.bind({})
RadioBtn.args = {}