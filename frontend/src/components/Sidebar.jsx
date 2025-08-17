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
    <aside
    // --- Main container: Clean background to make the orange accents pop ---
    className="h-full w-20 lg:w-72 bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col transition-all duration-300 shadow-sm"
>
    {/* --- Header: Styled with the orange theme --- */}
    <div className="p-4 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <Users className="size-6 text-orange-600 dark:text-orange-400" />
            <span className="font-bold text-lg hidden lg:block">Contacts</span>
        </div>

        {/* --- Online Filter: Toggle switch styled with orange --- */}
        <div className="hidden lg:flex items-center gap-2">
            <label htmlFor="online-toggle" className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    id="online-toggle"
                    className="sr-only peer"
                    checked={showOnlineOnly}
                    onChange={(e) => setShowOnlineOnly(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-300 dark:bg-slate-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-orange-500/50 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
            </label>
        </div>
    </div>

    {/* --- User List: Orange theme applied to list items --- */}
    <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredUsers.map((user) => (
            <button
                key={user._id}
                onClick={() => setSelectedUser(user)}
                // --- List Item Style: Subtle orange highlight for selection ---
                className={`w-full flex items-center gap-4 p-2.5 rounded-lg text-left transition-all duration-200 ease-in-out group
                    ${
                        selectedUser?._id === user._id
                        ? "bg-orange-500/10 dark:bg-orange-500/20"
                        : "hover:bg-gray-200/60 dark:hover:bg-slate-800/60"
                    }`
                }
            >
                {/* --- Avatar: Online status remains green for universal clarity --- */}
                <div className="relative shrink-0 mx-auto lg:mx-0">
                    <img
                        src={user.profilePic || "/avatar.png"}
                        alt={user.fullName}
                        className={`size-12 object-cover rounded-full transition-all duration-300 border-2 shadow-sm
                            ${
                                onlineUsers?.includes(user._id)
                                ? "border-emerald-500" // Green border for online
                                : "border-gray-300 dark:border-slate-700" // Default border
                            }`
                        }
                    />
                    {onlineUsers?.includes(user._id) && (
                        <span className="absolute -bottom-0.5 -right-0.5 block size-3.5 bg-emerald-500 rounded-full ring-2 ring-gray-50 dark:ring-slate-900" />
                    )}
                </div>

                {/* --- User Info: Selected user name is now orange --- */}
                <div className="hidden lg:block overflow-hidden">
                    <h3 className={`truncate font-semibold transition-colors duration-200
                        ${
                            selectedUser?._id === user._id
                            ? 'text-orange-600 dark:text-orange-400'
                            : 'text-slate-700 dark:text-slate-200'
                        }`
                    }>
                        {user.fullName}
                    </h3>
                    <p className="text-xs text-orange-500 dark:text-orange-400 truncate">
                        {onlineUsers?.includes(user._id)
                            ? "Active now"
                            : "Offline"
                        }
                    </p>
                </div>
            </button>
        ))}

        {/* --- Empty State: Unchanged as it's neutral --- */}
        {filteredUsers.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center text-orange-500 dark:text-orange-600 p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3.375 3.375 0 0110.5 9h3.375c1.621 0 3.09 1.055 3.612 2.612m-9.74 0c-.342.342-.653.723-.926 1.126M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm italic">No users found.</p>
                <p className="text-xs mt-1">Try turning off the "online only" filter.</p>
            </div>
        )}
    </div>
</aside>

  );
};

export default Sidebar;
