import React from "react";

function Banks() {
  // TODO: Implement the UI for the Bank component

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Bank Accounts</h3>
      <div className="grid gap-4">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-sm text-gray-500">Bank</span>
            </div>
            <div>
              <p className="font-medium">Main Account</p>
              <p className="text-sm text-gray-500">**** 1234</p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-600">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Banks;
