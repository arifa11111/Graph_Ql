import {theme} from "../../../Theme/index"

interface MyProps  {
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
    background: theme.palette.light?.linearOne
};

  return (
    <img src={props.src} style={styles} alt={"loading..."} ></img>
  );
};
export default Image;
