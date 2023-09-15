import {createElement as e, useState} from 'react';

function example() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold', key: 1}, `TEST JSX ${count}`),
        e('button', {className: 'py-2 px-4 border',
                key: 2,
                onClick: () => setCount(count + 1)},
            'Click me')
    ])
}

export default example;
