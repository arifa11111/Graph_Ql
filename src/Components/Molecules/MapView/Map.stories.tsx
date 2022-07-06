import { ComponentStory } from '@storybook/react';
import Image from './Map';
import map from "../../../images/CoverImages/mapview.png";


export default {
  title: 'Molecules / MapView',
  component: Image,
};

const Template : ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
);

export const images = Template.bind({});

images.args = {
  src: map,
  height: 143,
  width: 361,
};
