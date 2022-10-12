const solution = (nums: number[]) => {
  let result = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      loop: for (let k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        
        // 소수 판별
        for (let z = 2; z * z <= num; z++) {
          if (num % z === 0) continue loop;
        }
        
        result++;
      }
    }
  }
  
  return result;
}

export default solution;