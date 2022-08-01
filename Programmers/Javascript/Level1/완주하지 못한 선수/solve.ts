const solution = (participant: string[], completion: string[]) => {
  participant.sort();
  completion.sort();
  
  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

export default solution;