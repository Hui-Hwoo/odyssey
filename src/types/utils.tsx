import { Color } from "./color";
import { Category } from "./graph";

// Extract type from enum
export const getType = <EnumType extends Record<string, string>>(
    typeEnum: EnumType,
    defaultValue: EnumType[keyof EnumType]
) => {
    return (typeString: string): EnumType[keyof EnumType] => {
        if (
            Object.values(typeEnum).includes(
                typeString.toLowerCase() as EnumType[keyof EnumType]
            )
        ) {
            return typeString.toLowerCase() as EnumType[keyof EnumType];
        }
        return defaultValue;
    };
};

// Get color from string, default is gray
export const getColor = getType(Color, Color.Gray);

// Get category from string, default is other
export const getCategory = getType(Category, Category.Other);
