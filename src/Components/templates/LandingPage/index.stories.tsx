import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LandingTemplate } from "./index";
import { ReactComponent as Logo } from "../../../images/icons/logo-1.svg";
import HomePageStepper from "../../Organisms/Stepper";

export default {
    title: "Templates/LandingTemplate",
    component: LandingTemplate,
} as ComponentMeta<typeof LandingTemplate>;

const Template: ComponentStory<typeof LandingTemplate> = (args) => ( <LandingTemplate {...args}/> );

export const LandingTemp = Template.bind({});
    LandingTemp.args = {
        homestepper: <HomePageStepper />,
        Logo: <Logo width={"205"} height={"40"} />,
    }