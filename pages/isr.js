import React from 'react';
import { getRandomAPI } from '../publicApis';

import { useRouter } from 'next/router';

const ISR = ({ name, description }) => {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <>Loading</>;
    }

    return <div>
        <h1>{`ISR ${name}`}</h1>
        <p>{`ISR ${description}`}</p>
    </div>
}

export default ISR;

export async function getStaticProps() {
    const props = await getRandomAPI();
    return {
        props,
        revalidate: 15
    };
}