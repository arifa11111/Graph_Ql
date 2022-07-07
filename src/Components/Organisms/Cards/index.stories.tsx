import { ComponentStory} from '@storybook/react';
import Cards from '.';

export default {
  title: 'Organisms/Cards ',
  component: Cards,
}

const Template: ComponentStory<typeof Cards> = (args) => (
  <Cards {...args} />
);

export const smallCards = Template.bind({});
smallCards.args = {
  icons:"../../../images/icons/hp.svg",
  job:"User Experience Designer",
  company:"HP",
  location:"Hyderabad, Telangana, India",
  bike:true,
  bus:true,
  car:true,
  train:true,
  postedTime:"1hr 36 mins ago",
  state: false,
};

export const largeCards = Template.bind({});
largeCards.args = {
  icons:"../../../images/icons/hp.svg",
  job:"User Experience Designer",
  company:"HP",
  location:"Hyderabad, Telangana, India",
  bike:true,
  bus:true,
  car:true,
  train:true,
  postedTime:"1hr 36 mins ago",
  state:true,
};