function randomRGB(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `RGB(${r}, ${g}, ${b})`;
}

export { randomRGB };