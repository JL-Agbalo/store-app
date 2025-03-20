import React from "react";
import {
  UpdateContactInfo,
  LinkedAccounts,
  ChangePassword,
  DeleteAccount,
} from ".";
import { users } from "../../../../data/appStoreData";

function AccountSection() {
  const user = users[0];

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Account Information</h2>
      <div>
        <div className="mb-8">
          <UpdateContactInfo user={user} />
        </div>
        <div className="mb-8">
          <ChangePassword />
        </div>
        <div className="mb-8">
          <LinkedAccounts />
        </div>
        <div className="mb-8">
          <DeleteAccount />
        </div>
      </div>
    </section>
  );
}

export default AccountSection;
