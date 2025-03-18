import React, { useState } from "react";

function DeleteAccount() {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium text-gray-800">Delete Account</h3>
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <p className="text-sm text-red-600 mb-4">
          Warning: This action cannot be undone. This will permanently delete
          your account and remove all data associated with it.
        </p>
        {!showConfirm ? (
          <button
            onClick={() => setShowConfirm(true)}
            className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
          >
            Delete Account
          </button>
        ) : (
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-900">
              Are you sure you want to delete your account?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => console.log("Delete account")}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Yes, delete my account
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeleteAccount;
