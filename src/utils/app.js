import { rand } from "./number";

export const getRandomColor = () => {
  const h = rand(1, 360);
  const s = rand(0, 100);
  const l = rand(0, 100);
  return "hsl(" + h + "," + s + "%," + l + "%)";
};

export const getModelsByMaker = (array = [], filterFun) => {
  try {
    return array.reduce((result, next) => {
      let isFiltered = true;
      if (typeof filterFun === "function") isFiltered = filterFun(next);
      if (isFiltered) {
        const make = next?.vehicle?.make;
        const model = next?.vehicle?.model;
        const models = result?.[make]?.models
          ? [...new Set([...result?.[make]?.models, model])]
          : [];
        result[make] = {
          name: make,
          modelsCount: models.length,
          models,
          fill: getRandomColor()
        };
        return result;
      } else {
        return result;
      }
    }, {});
  } catch (err) {
    return {};
  }
};

export const getHighestAgeOfCarModels = (array = [], filterFun) => {
  try {
    return array.reduce((result, next) => {
      let isFiltered = true;
      if (typeof filterFun === "function") isFiltered = filterFun(next);
      if (isFiltered) {
        const make = next?.vehicle?.make;
        const model = next?.vehicle?.model;
        const nextAge = next?.vehicle?.age;
        const prevAge = result?.[model]?.heighestAge || 0;
        result[model] = {
          name: `${make}: Model ${model?.toUpperCase()}`,
          heighestAge: nextAge > prevAge ? nextAge : prevAge,
          fill: getRandomColor()
        };
        return result;
      } else {
        return result;
      }
    }, {});
  } catch (err) {
    return {};
  }
};
