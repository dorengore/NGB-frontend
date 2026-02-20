import { BellIcon } from "lucide-react";

import NoNotifications from "@/components/no-notifications";

const NotificationsPage = () => {
  return (
    <div className="w-full px-4">
      <h2 className="text-4xl font-bold py-5 ">Notifications</h2>
      <div className="flex flex-col items-center justify-center gap-3 py-10">
        <NoNotifications
          content="Your recent notifications will show up here."
          heading="No Notifications"
          icon={BellIcon}
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
