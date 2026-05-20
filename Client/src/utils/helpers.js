export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
