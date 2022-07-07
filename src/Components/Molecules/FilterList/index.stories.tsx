import { Story } from "@storybook/react";
import {FilterListProps, FilterList } from ".";

export default {
    title: "Molecules/FilterList",
    component: FilterList
}

const Template: Story<FilterListProps> = args => <FilterList {...args} />

export const filterListBind = Template.bind({})
filterListBind.args = {
    labelArray: ["Past 24 hours","lal","sai"],
    title:"distance"
    
}