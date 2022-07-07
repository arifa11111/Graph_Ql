import { Story } from "@storybook/react";
import HomePageStepper from ".";

export default {
    title: "Organisms/stepper",
    component: HomePageStepper
}

const Template: Story<any> = args => <HomePageStepper />

export const stepperOranism = Template.bind({})
stepperOranism.args = {

}