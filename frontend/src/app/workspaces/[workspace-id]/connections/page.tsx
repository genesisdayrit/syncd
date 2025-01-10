export default function ConnectionsPage({ params }: { params: { "workspace-id": string } }) {
  const workspaceId = params["workspace-id"];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Connections for Workspace: {workspaceId}
        </h1>
        <p className="text-sm font-medium text-green-600">1 healthy</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-60 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option>All connections</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option>All statuses</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option>All sources</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option>All destinations</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700">
          + New connection
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="grid grid-cols-6 items-center text-gray-600 font-medium text-sm border-b border-gray-200 p-4">
          <div>Name</div>
          <div>Source Name</div>
          <div>Destination Name</div>
          <div>Frequency</div>
          <div>Last Sync</div>
          <div className="text-right">Enabled</div>
        </div>

        {/* Example Row */}
        <div className="grid grid-cols-6 items-center text-gray-800 text-sm p-4 hover:bg-gray-50">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-green-600 rounded-full"></span>
            <span>Fake API → Snowflake</span>
          </div>
          <div>Fake Prod API</div>
          <div>Snowflake</div>
          <div>Manual</div>
          <div>2 days ago</div>
          <div className="flex justify-end">
            <input type="checkbox" className="toggle-checkbox" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}

