export default function getSpecialAttack(attack) {
  const arr = [];
  attack.special.forEach((item) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;
    arr.push({
      id,
      name,
      icon,
      description,
    });
  });
  return arr;
}
