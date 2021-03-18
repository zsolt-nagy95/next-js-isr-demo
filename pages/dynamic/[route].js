import React from 'react';
import { getRandomAPI } from '../../publicApis';

import { useRouter } from 'next/router';

const ISR = ({ name, description, route }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <>Loading</>;
  }

  return <div>
    <h1 style={{ color: "blue" }}>{`ISR with dynamic path ${route}`}</h1>
    <h1>{`ISR ${name}`}</h1>
    <p>{`ISR ${description}`}</p>
  </div>
}

export default ISR;

export const getStaticProps = async ({ params: { route } }) => {
  const props = await getRandomAPI();
  return {
    props: {
      ...props,
      route
    },
    revalidate: 15
  };
};

export const getStaticPaths = async () => {
  return {
    paths: ['/dynamic/nagymacska', '/dynamic/tehen'],
    fallback: false,
  }
};