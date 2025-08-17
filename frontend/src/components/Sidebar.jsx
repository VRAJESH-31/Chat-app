import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import useAuth from "../store/useAuth";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers = [] } = useAuth(); // ✅ safe default
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-gray-200 dark:border-gray-800 bg-gradient-to-b from-orange-50 via-white to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black flex flex-col transition-all duration-300 shadow-md">
  {/* Header */}
  <div className="border-b border-gray-200 dark:border-gray-800 w-full p-5 backdrop-blur-md">
    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
      <Users className="size-6" />
      <span className="font-semibold hidden lg:block">Contacts</span>
    </div>

    {/* Online Filter */}
    <div className="mt-3 hidden lg:flex items-center gap-2 text-sm">
      <label className="cursor-pointer flex items-center gap-2">
        <input
          type="checkbox"
          checked={showOnlineOnly}
          onChange={(e) => setShowOnlineOnly(e.target.checked)}
          className="checkbox checkbox-sm border-orange-300 text-orange-600 focus:ring-orange-500"
        />
        <span className="text-gray-600 dark:text-gray-400">Show online only</span>
      </label>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        ({Math.max(onlineUsers.length - 1, 0)} online)
      </span>
    </div>
  </div>

  {/* User List */}
  <div className="overflow-y-auto w-full py-3 px-2 space-y-1">
    {filteredUsers.map((user) => (
      <button
        key={user._id}
        onClick={() => setSelectedUser(user)}
        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group
          ${
            selectedUser?._id === user._id
              ? "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 font-semibold shadow-sm dark:from-orange-900/40 dark:to-orange-800/30 dark:text-orange-300"
              : "hover:bg-orange-50 dark:hover:bg-gray-800/40"
          }`}
      >
        {/* Avatar */}
        <div className="relative mx-auto lg:mx-0">
          <img
            src={user.profilePic || "/avatar.png"}
            alt={user.fullName}
            className="size-12 object-cover rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
          />
          {onlineUsers?.includes(user._id) && (
            <span className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-gray-900 animate-pulse" />
          )}
        </div>

        {/* User Info */}
        <div className="hidden lg:block text-left min-w-0">
          <div className="truncate font-medium text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400">
            {user.fullName}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {onlineUsers?.includes(user._id) ? "🟢 Online" : "⚪ Offline"}
          </div>
        </div>
      </button>
    ))}

    {filteredUsers.length === 0 && (
      <div className="text-center text-gray-400 dark:text-gray-600 py-6 italic">
        No users found
      </div>
    )}
  </div>
</aside>

  );
};

export default Sidebar;
