import { X } from "lucide-react";
import useAuth from "../store/useAuth";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuth();

    if (!selectedUser) {
        return (
            <div className="p-2.5 border-b border-base-300">
                <div className="text-center text-sm text-base-content/70">
                    No chat selected
                </div>
            </div>
        );
    }

    return (
        <div className="p-3 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
    <div className="flex items-center justify-between">
        {/* Left Side: Avatar + User Info */}
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-400/60 shadow-md">
                    <img
                        src={
                            selectedUser?.profilePic
                                ? selectedUser.profilePic.startsWith("http")
                                    ? selectedUser.profilePic
                                    : `/${selectedUser.profilePic}`
                                : "/avatar.png"
                        }
                        alt={selectedUser?.fullName || "User"}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Online status indicator */}
                <span
                    className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 ${
                        onlineUsers?.includes(selectedUser?._id)
                            ? "bg-emerald-500 shadow-md shadow-emerald-400/50"
                            : "bg-gray-400"
                    }`}
                />
            </div>

            {/* User Info */}
            <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                    {selectedUser?.fullName || "Unknown"}
                </h3>
                <p
                    className={`text-xs ${
                        onlineUsers?.includes(selectedUser?._id)
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-gray-500 dark:text-gray-400"
                    }`}
                >
                    {onlineUsers?.includes(selectedUser?._id) ? "Online" : "Offline"}
                </p>
            </div>
        </div>

        {/* Close Button */}
        <button
            onClick={() => setSelectedUser(null)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
    </div>
</div>

    );
};

export default ChatHeader;
