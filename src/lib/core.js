//Ham loc de tao html;
export default function html([frist, ...strings], ...values) {
    return values
        .reduce(
            (acc, cur) => {
                return acc.concat(cur, strings.shift());
            },
            [frist]
        )
        .filter((x) => (x && x !== true) || x === 0)
        .join("");
}

export function createStore(reducer) {
    // Tao trang thai cho store;
    let state = reducer();

    // khơi tao ham chua component va element html;
    const roots = new Map();

    // ham render html ra ngoai giao dien;
    function render() {
        for (const [root, component] of roots) {
            // output se chua html;
            const output = component();

            // root se inner html ra ngoai giao dien;
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        connect(selector = (state) => state) {
            return (component) =>
                (props, ...args) =>
                    component(
                        Object.assign({}, props, selector(state), ...args)
                    );
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        },
    };
}

// export { createStore };
