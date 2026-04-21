import { useEffect, useState } from 'react'

const CountryCard = ({ name }: { name: string }) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (name.toLowerCase() === 'nepal') {
            async function getCountry() {
                try {
                    setLoading(true);
                    await new Promise((resolve) => setTimeout(resolve, 5000));
                    const response = await fetch(`https://restcountries.com/v3.1/name/nepal`);
                    const json = await response.json();

                    console.log("Nepal API Data:", json[0]);

                    setData(json[0]);
                } catch (error) {
                    console.error("Fetch Error:", error);
                } finally {
                    setLoading(false);
                }
            }

            getCountry();
        } else {
            setData(null);
            setLoading(false);
        }
    }, [name]);

    if (loading) {
        return <div className="mt-4 text-blue-600 font-semibold italic animate-pulse">Fetching Nepal's data...</div>;
    }

    if (data) {
        return (
            <div className="mt-4 p-6 border rounded-xl shadow-lg bg-white w-full max-w-sm text-center border-blue-100 transition-all">
                <div className="text-5xl mb-3">{data.flag}</div>
                <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">
                    {data.name.common}
                </h2>
                <div className="text-left mt-4 space-y-2 text-gray-600">
                    <p className="border-b pb-1 flex justify-between">
                        <strong>Capital:</strong> <span>{data.capital?.[0]}</span>
                    </p>
                    <p className="border-b pb-1 flex justify-between">
                        <strong>Population:</strong> <span>{data.population.toLocaleString()}</span>
                    </p>
                    <p className="border-b pb-1 flex justify-between">
                        <strong>Region:</strong> <span>{data.region}</span>
                    </p>
                    <p className="flex justify-between">
                        <strong>Subregion:</strong> <span>{data.subregion}</span>
                    </p>
                </div>
            </div>
        );
    }

    return name && name.toLowerCase() !== 'nepal' ? (
        <div className="mt-4 text-gray-400 italic">Please type "nepal" exactly.</div>
    ) : null;
}

export default CountryCard;