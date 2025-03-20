import React from "react";

function Cards() {
  // TODO: Implement the UI for the Cards component
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Payment Cards</h3>
      <div className="grid gap-4">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-sm text-gray-500">VISA</span>
            </div>
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/24</p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-600">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
