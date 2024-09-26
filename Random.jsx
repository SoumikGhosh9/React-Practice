function Random() {
    let number = Math.random()*10;
  return <div style={{'backgroundColor': '#ff7861'}} > Random number is :{Math.round(number)}</div>;
}
export default Random;  