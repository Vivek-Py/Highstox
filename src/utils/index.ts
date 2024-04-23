import mapping from "./mapping";

const getComponentMapping = (name:string) => mapping[name];

const generateKey = (str: string):string => (Math.random() + 1).toString(36).substring(7) + str;

export {getComponentMapping, generateKey};