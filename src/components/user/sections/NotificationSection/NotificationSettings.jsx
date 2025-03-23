import React, { useState } from "react";
import { notificationSettings } from "../../../../data/users/NotificationSettings";
import NotificationItem from "./NotificationItem";

function NotificationSettings() {
  const [settings, setSettings] = useState(notificationSettings);

  const handleToggle = (categoryId, settingId) => {
    // Fix the list
    setSettings((prev) =>
      prev.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            settings: category.settings.map((setting) => {
              if (setting.id === settingId) {
                return { ...setting, enabled: !setting.enabled };
              }
              return setting;
            }),
          };
        }
        return category;
      })
    );
  };

  return (
    <section className="p-5">
      {/* Add more design */}
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
      <div className="space-y-8">
        {settings.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.settings.map((setting) => (
                <NotificationItem
                  key={setting.id}
                  setting={setting}
                  onToggle={() => handleToggle(category.id, setting.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NotificationSettings;
