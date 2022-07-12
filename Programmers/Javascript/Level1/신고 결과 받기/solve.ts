const solution = (id_list: string[], report: string[], k: number) => {
  const reportCounts = id_list.reduce((obj, id) => {
    return { ...obj, [id]: 0 }
  }, {});
  const reportUsers = id_list.reduce((obj, id) => {
    return { ...obj, [id]: [] }
  }, {});
  
  [...new Set(report)].forEach(list => {
    const [reportId, userId] = list.split(' ');
    
    reportCounts[userId] += 1;
    reportUsers[reportId].push(userId);
  });
  
  return id_list.map(id => reportUsers[id].filter(reportId => reportCounts[reportId] >= k).length);
};

export default solution;