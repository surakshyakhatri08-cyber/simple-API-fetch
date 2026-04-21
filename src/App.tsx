import { useState } from "react";
import CountryCard from "./components/country-card";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="p-10 flex flex-col items-center">
      <div className="w-full max-w-sm mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Type "nepal" to see details:
        </label>
        <input
          type="text"
          placeholder="Search country..."
          className="border p-2.5 w-full rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <CountryCard name={searchTerm} />
    </main>
  );
}

export default App;