export interface Car {
    make: string;
    type: string;
    model: string;
    cost: number;
    id: number;
}

export function isCar(arg: any): arg is Car {
    return  arg &&
            arg.make && typeof(arg.make) == 'string' &&
            arg.type && typeof(arg.type) == 'string' &&
            arg.model && typeof(arg.model) == 'string' &&
            arg.cost && typeof(arg.cost) == 'number' &&
            arg.id && typeof(arg.id) == 'number';
}

export const cars: Car[] = [
    { make: 'tesla', type: 'sedan', model: 'roadster', cost: 33, id: 0 },
    { make: 'tesla', type: 'suv', model: 'model 3', cost: 48, id: 1 },
    { make: 'toyota', type: 'sedan', model: 'prius', cost: 22, id: 2 },
    { make: 'honda', type: 'sedan', model: 'civic', cost: 22, id: 3 }
]