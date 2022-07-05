import { CheckBox,checkBoxprops } from ".";
import { Story } from "@storybook/react"

export default {
    title: 'Atoms/CheckBox',
    component: CheckBox
}
const Template: Story<checkBoxprops> = (args) => <CheckBox {...args}/>
export const CheckB = Template.bind({})

CheckB.args = {
    checked:true
}
