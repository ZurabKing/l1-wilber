const stackSize = () => {
  try {
    return 1 + stackSize();
  } catch {
    return 0;
  }
};

const maxStackSize = stackSize();
console.log(`Максимальный размер стека: ${maxStackSize}`);
