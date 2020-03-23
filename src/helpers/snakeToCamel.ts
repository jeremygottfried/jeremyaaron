const snakeToCamel = (str: string): string => str.replace(/([_][a-z])/g, group => group.toUpperCase().replace('_', ''));

export default snakeToCamel;
