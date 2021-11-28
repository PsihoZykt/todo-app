export const getNumberOfDone = task => {
  const totalSubtasks = task.subTasks.length;
  let counter = 0;
  task.subTasks.forEach(item => {
    if (!item.isChecked) counter++;
  });
  return totalSubtasks - counter;
};

export const getDoneProcent = task => {
  if (task.subTasks.length === 0) return 0;
  return (getNumberOfDone(task) / task.subTasks.length) * 100;
};
