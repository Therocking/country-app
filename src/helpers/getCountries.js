

export const getCountriesFetch = async() => {
    const resp = await fetch('https://restcountries.com/v3.1/all');
    const data = await resp.json();

    return data
}