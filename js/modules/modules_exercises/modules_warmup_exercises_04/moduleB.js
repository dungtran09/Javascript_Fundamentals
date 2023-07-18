import { mdA as A } from "./moduleA.js";

const greettingModuleB = "Hi, This is ModuleB";
console.log(greettingModuleB);

export { greettingModuleB as mdB };
