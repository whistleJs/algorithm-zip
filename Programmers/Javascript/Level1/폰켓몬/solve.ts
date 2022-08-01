const solution = (nums: number[]) => {
  return Math.min(Array.from(new Set(nums)).length, nums.length / 2);
};

export default solution;