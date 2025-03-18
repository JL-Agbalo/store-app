import React, { useState } from "react";

function UserInformation({ user }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    street: user.address.street,
    city: user.address.city,
    state: user.address.state,
    zip: user.address.zip,
    country: user.address.country,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputField = ({ label, name, type = "text", required = false }) => (
    <div>
      <label className="block  text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black "
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Full Name" name="name" required />
        <InputField label="Email" name="email" type="email" required />
      </div>

      <div className="space-y-4">
        <h3 className=" font-medium text-gray-700">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Street Address" name="street" />
          <InputField label="City" name="city" />
          <InputField label="State/Province" name="state" />
          <InputField label="ZIP/Postal Code" name="zip" />
          <InputField label="Country" name="country" />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default UserInformation;
