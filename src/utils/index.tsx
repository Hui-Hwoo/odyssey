export const capitalizeFirstLetter = (str: string) => {
    // FIXME: deal with case like "typescript" => "TypeScript"
    return str.charAt(0).toUpperCase() + str.slice(1);
};
