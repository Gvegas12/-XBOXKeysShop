type useCheckClassNameType = (className?: string) => string;

export const useCheckClassName: useCheckClassNameType = (className) => {
  const cls = className ? " " + className : "";
  return cls;
};
