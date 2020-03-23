const kebabToCamel = (str: string): string => str.replace(/([-][a-z])/g, group => group.toUpperCase().replace('-', ''));

export default kebabToCamel;
