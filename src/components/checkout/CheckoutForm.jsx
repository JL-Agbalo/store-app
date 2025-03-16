import React from "react";
import { users } from "../../data/appStoreData";

function CheckoutForm({ step }) {
  const user = users[0];

  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.image}
            alt={user.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold">Shipping Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              defaultValue={user.name.split(" ")[0]}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              defaultValue={user.name.split(" ")[1]}
              readOnly
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg"
            defaultValue={user.email}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            defaultValue={user.address.street}
            readOnly
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              defaultValue={user.address.city}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              defaultValue={user.address.zip}
              readOnly
            />
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Payment Information</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="123"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
