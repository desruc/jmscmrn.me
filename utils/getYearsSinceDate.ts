export function getYearsSinceDate(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffYears = diff / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(diffYears);
}
