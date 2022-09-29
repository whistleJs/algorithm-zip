const solution = (str: string) => {
  return /^((\d{4})|(\d{6}))$/.test(str);
}

export default solution;