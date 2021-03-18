import React from 'react';
import { getRandomAPI } from '../publicApis';
import { useRouter } from 'next/router';

const SSG = ({ name, description }) => {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <>Loading</>;
    }

    return <div>
        <h1>{`SSG ${name}`}</h1>
        <p>{`SSG ${description}`}</p>
    </div>
};

export default SSG;

export async function getStaticProps() {
    const props = await getRandomAPI();
    return { props };
}