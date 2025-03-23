import extStyles from "./Separator.module.css";

function HorizontalLine({length, height, margin, color, alpha}) {

  const intStyles = {
    width: length,
    height: height,
    margin: margin,
    backgroundColor: color,
    opacity: alpha
  }
  
  return (
    <>
      <hr className={extStyles.separator} style={intStyles} />
    </>
  );
}

export default HorizontalLine;
