export interface Plan {
    price: number;
    description: string;
    image: string;
    type: 'standard' | 'bundle' | 'starzplaybundle';
};