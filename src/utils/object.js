export const groupBy = (array, fun) => {
  return array.reduce((result, next) => {
    const key = fun(next);
    const prevData = result?.[key]?.data || [];
    result[key] = {
      key,
      count: result?.[key]?.count + 1 || 1,
      data: [...prevData, next]
    };
    return result;
  }, {});
};
