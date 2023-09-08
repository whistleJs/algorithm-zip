const solution = ([id, pw]: [string, string], db: [string, string][]) => {
  const okIdList = db.filter(([i, ]) => i === id);
  
  if (!okIdList.length) return 'fail';
  
  const ok = okIdList.find(([, p]) => p === pw);
  
  return ok ? 'login' : 'wrong pw';
};

export default solution;