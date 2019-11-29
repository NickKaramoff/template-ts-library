export const input = "./src/~library-name~.ts";

export const defaultOutput = {
    name: "~library-name~", // TODO: use camelCase here
};

export const getFilename = (infix, dev=false) => 
    `./dist${dev ? '_dev' : ''}/~library-name~.${infix}.js`;
