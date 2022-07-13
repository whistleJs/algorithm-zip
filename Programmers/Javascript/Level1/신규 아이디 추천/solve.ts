const solution = (new_id: string) => {
  new_id = new_id.toLowerCase().replace(/([^a-zA-Z\d\-\_\.]+)/g, '').replace(/[\.]+/g, '.').replace(/(^\.)|(\.$)/g, '');
  
  if (new_id === '') new_id = 'a';
  
  new_id = new_id.slice(0, 15).replace(/(\.$)/g, '');
  
  if (new_id.length < 3) {
    new_id += new_id[new_id.length - 1].repeat(3 - new_id.length);
  }
  
  return new_id;
}

export default solution;