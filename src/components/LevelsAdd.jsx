import { useState } from "react";

export default function LevelsAdd() {
  const [activeTab, setActiveTab] = useState("states");
  const [states, setStates] = useState([
    { id: 1, name: "California", code: "CA" },
    { id: 2, name: "New York", code: "NY" },
    { id: 3, name: "Texas", code: "TX" },
  ]);
  const [constituencies, setConstituencies] = useState([
    { id: 1, name: "Los Angeles", stateId: 1 },
    { id: 2, name: "San Francisco", stateId: 1 },
    { id: 3, name: "New York City", stateId: 2 },
    { id: 4, name: "Houston", stateId: 3 },
  ]);
  const [constituencyLevels, setConstituencyLevels] = useState([
    { id: 1, name: "City", constituencyId: 1 },
    { id: 2, name: "District", constituencyId: 1 },
    { id: 3, name: "Borough", constituencyId: 3 },
    { id: 4, name: "Ward", constituencyId: 4 },
  ]);
  const handleStateSubmit = (state) => {};
  const handleConstituencySubmit = (constituency) => {};
  const handleConstituencyLevelSubmit = (constituencyLevel) => {};
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="bg-green-900 py-4 px-6 text-white">
        <h1 className="text-2xl font-bold">Add Level</h1>
      </header>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto py-8">
          <nav className="mb-8 flex justify-center">
            <button
              className={`mx-2 rounded-md px-4 py-2 transition-colors ${
                activeTab === "states"
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("states")}>
              States
            </button>
            <button
              className={`mx-2 rounded-md px-4 py-2 transition-colors ${
                activeTab === "constituencies"
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("constituencies")}>
              Constituencies
            </button>
            <button
              className={`mx-2 rounded-md px-4 py-2 transition-colors ${
                activeTab === "constituencyLevels"
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("constituencyLevels")}>
              Constituency Levels
            </button>
          </nav>
          {activeTab === "states" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold">State Management</h2>
              <div className="mb-8 rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">States</h3>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left">State Name</th>
                      <th className="px-4 py-2 text-left">State Code</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {states.map((state) => (
                      <tr
                        key={state.id}
                        className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-2">{state.name}</td>
                        <td className="px-4 py-2">{state.code}</td>
                        <td className="px-4 py-2">
                          <button className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                            Edit
                          </button>
                          <button className="rounded-md bg-gray-200 px-4 py-2 text-red-500 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">Add State</h3>
                <form onSubmit={handleStateSubmit}>
                  <div className="mb-4">
                    <label htmlFor="stateName" className="block font-medium">
                      State Name
                    </label>
                    <input
                      id="stateName"
                      type="text"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="stateCode" className="block font-medium">
                      State Code
                    </label>
                    <input
                      id="stateCode"
                      type="text"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                    Add State
                  </button>
                </form>
              </div>
            </div>
          )}
          {activeTab === "constituencies" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Constituency Management
              </h2>
              <div className="mb-8 rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">Constituencies</h3>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left">Constituency Name</th>
                      <th className="px-4 py-2 text-left">State</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {constituencies.map((constituency) => (
                      <tr
                        key={constituency.id}
                        className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-2">{constituency.name}</td>
                        <td className="px-4 py-2">
                          {
                            states.find(
                              (state) => state.id === constituency.stateId
                            )?.name
                          }
                        </td>
                        <td className="px-4 py-2">
                          <button className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                            Edit
                          </button>
                          <button className="rounded-md bg-gray-200 px-4 py-2 text-red-500 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">Add Constituency</h3>
                <form onSubmit={handleConstituencySubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="constituencyName"
                      className="block font-medium">
                      Constituency Name
                    </label>
                    <input
                      id="constituencyName"
                      type="text"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="state" className="block font-medium">
                      State
                    </label>
                    <select
                      id="state"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required>
                      <option value="">Select a state</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.id}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                    Add Constituency
                  </button>
                </form>
              </div>
            </div>
          )}
          {activeTab === "constituencyLevels" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Constituency Level Management
              </h2>
              <div className="mb-8 rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">Constituency Levels</h3>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left">Level Name</th>
                      <th className="px-4 py-2 text-left">Constituency</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {constituencyLevels.map((level) => (
                      <tr
                        key={level.id}
                        className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-2">{level.name}</td>
                        <td className="px-4 py-2">
                          {
                            constituencies.find(
                              (c) => c.id === level.constituencyId
                            )?.name
                          }
                        </td>
                        <td className="px-4 py-2">
                          <button className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                            Edit
                          </button>
                          <button className="rounded-md bg-gray-200 px-4 py-2 text-red-500 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">
                  Add Constituency Level
                </h3>
                <form onSubmit={handleConstituencyLevelSubmit}>
                  <div className="mb-4">
                    <label htmlFor="levelName" className="block font-medium">
                      Level Name
                    </label>
                    <input
                      id="levelName"
                      type="text"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="constituency" className="block font-medium">
                      Constituency
                    </label>
                    <select
                      id="constituency"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required>
                      <option value="">Select a constituency</option>
                      {constituencies.map((constituency) => (
                        <option key={constituency.id} value={constituency.id}>
                          {constituency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                    Add Constituency Level
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
