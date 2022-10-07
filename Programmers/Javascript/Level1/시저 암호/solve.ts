const solution = (s: string, n: number) => {
  return s.split('').map(x => x == ' ' ? ' ' : String.fromCharCode(x.toUpperCase().charCodeAt(0) >= 91 - n ? x.charCodeAt(0) + n - 26 : x.charCodeAt(0) + n)).join('');
};

export default solution;