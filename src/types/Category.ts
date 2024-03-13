export type category = {
    id: number;
    title: string;
    image: string;
    imageType?: string;
    restaurantChain?: string;
    servings?: {
        number: number;
        size: number;
        unit: string;
    }
};