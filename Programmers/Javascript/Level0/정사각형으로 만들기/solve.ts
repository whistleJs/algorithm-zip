const solution = (arr: number[][]) => {
  return arr.length > arr[0].length ?
    arr.map(item => [...item, ...new Array(arr.length - arr[0].length).fill(0)])
    : [...arr, ...new Array(arr[0].length - arr.length).fill(new Array(arr[0].length).fill(0))];
};

export default solution;