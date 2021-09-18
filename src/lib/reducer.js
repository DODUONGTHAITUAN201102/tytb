const initialState = {
    cars: ["BMW"],
};

export default function reducer(state = initialState, action, args) {
    switch (action) {
        case "ADD":
            const [newCar] = args;
            return {
                ...state,
                cars: [...state.cars, newCar],
            };
            break;
        default:
            return state;
    }
}
