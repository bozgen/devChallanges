const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    return data;
}
export default fetchCountries;