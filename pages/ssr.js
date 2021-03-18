import React from 'react';
import { getRandomAPI } from '../publicApis';
import { useRouter } from 'next/router';

const SSR = ({ name, description }) => (
    <div>
        <h1>{`SSR ${name}`}</h1>
        <p>{`SSR ${description}`}</p>
    </div>
);

export default SSR;

export async function getServerSideProps() {
    const props = await getRandomAPI();
    return { props };
}