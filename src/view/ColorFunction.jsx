
const ColorComponent = ( {colors} ) => {
  return (
    <div>
      {colors.map((color) => {
        return (
          <div style ={{backgroundColor: color}}>{color}</div>
        )
      })}
    </div>
    
  );
}

export default ColorComponent;
