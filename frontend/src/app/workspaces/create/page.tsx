"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateWorkspacePage() {
  const [workspaceName, setWorkspaceName] = useState("");
  const router = useRouter();

  const handleCreateWorkspace = () => {
    // Logic to handle workspace creation (e.g., API call)
    alert(`Workspace "${workspaceName}" created!`);
    // Optionally redirect to the workspace page after creation
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => router.back()}
          className="text-gray-700 hover:text-gray-900 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back
        </button>
      </div>

      {/* Form */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Create Workspace</h1>
          <div className="mb-4">
            <label htmlFor="workspaceName" className="block text-sm font-medium text-gray-700">
              Workspace Name:
            </label>
            <input
              id="workspaceName"
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Enter workspace name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleCreateWorkspace}
            className="bg-black text-white px-4 py-2 rounded-md w-full hover:bg-gray-800"
          >
            Create Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

