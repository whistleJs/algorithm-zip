const solution = (rsp: string) => {
  return [...rsp].map(s => {
    switch (s) {
      case '2':
        return '0';
      case '0':
        return '5';
      case '5':
        return '2';
    }
  }).join('');
};

export default solution;