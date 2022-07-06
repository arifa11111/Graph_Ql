import React from 'react';


export interface MyProps  {
  src: string,
  height: number,
  width: number,
};

const Image = (props: MyProps) => {
  const styles = {
    height: props.height,
    maxWidth: props.width,
    width:'100%',
    borderRadius:'8px',
    
};


  return (
    <img src={props.src} style={styles} alt={props.src}></img>
  );
};
export default Image;
