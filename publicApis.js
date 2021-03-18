import fetch from 'node-fetch';

export const getRandomAPI = async () => {
    const res = await fetch('https://api.publicapis.org/random');
    const json = await res.json();
    return {
        name: json.entries[0].API,
        description: json.entries[0].Description,
    };
}