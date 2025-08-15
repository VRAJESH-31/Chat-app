import { useState } from "react";
import { Camera, Loader, Mail, User } from "lucide-react";
import Navbar from "../components/Navbar";
import useAuth from "../store/useAuth";

const ProfilePage = () => {
    const { authuser, isUpdatingProfile, updateProfile } = useAuth();
    const [selectedImg, setSelectedImg] = useState(authuser?.profilePic || "");
    const [fullName, setFullName] = useState(authuser?.fullName || "");
    const [email, setEmail] = useState(authuser?.email || "");

    // Convert image to base64 and send to backend
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            const base64Image = reader.result;
            setSelectedImg(base64Image); // local preview
            await updateProfile({ profilePic: base64Image }); // send to backend
        };
    };

    // Update full name and email
    const handleProfileUpdate = async () => {
        await updateProfile({ fullName, email });
    };

    return (
        <div className="h-screen w-screen bg-gray-900 text-zinc-100 overflow-hidden flex flex-col">
    <Navbar />
    {/* Main content area with added top padding (pt-24) to clear the navbar */}
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl w-full mx-auto">
            {/* Main profile card */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-zinc-700">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                    <p className="mt-2 text-zinc-400 text-sm">Manage your profile information</p>
                </div>

                {/* Two-column layout grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
                    
                    {/* LEFT COLUMN: Avatar */}
                    <div className="md:col-span-1 flex flex-col items-center gap-4 text-center md:sticky md:top-24">
                        <div className="relative group">
                            <img
                                src={
                                    selectedImg ||
                                    `https://ui-avatars.com/api/?name=${fullName}&background=random&color=fff`
                                }
                                alt="Profile"
                                className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            <label
                                htmlFor="avatar-upload"
                                className={`absolute bottom-1 right-1 bg-orange-500 p-3 rounded-full cursor-pointer shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-200 flex items-center justify-center ${
                                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                                }`}
                            >
                                <Camera className="w-5 h-5 text-white" />
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={isUpdatingProfile}
                                />
                            </label>
                        </div>
                        <p className="text-sm text-zinc-400">
                            {isUpdatingProfile
                                ? "Uploading..."
                                : "Click the camera icon to update your photo"}
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Details */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Editable Info Form */}
                        <div className="space-y-6">
                            {/* Full Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-gray-700 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-zinc-100 transition-colors duration-200 placeholder:text-zinc-500"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Your Name"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-2.5 bg-gray-700 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-zinc-100 transition-colors duration-200 placeholder:text-zinc-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Save Button */}
                            <button
                                onClick={handleProfileUpdate}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed"
                                disabled={isUpdatingProfile}
                            >
                                {isUpdatingProfile && <Loader size={18} className="animate-spin" />}
                                {isUpdatingProfile ? "Updating..." : "Save Changes"}
                            </button>
                        </div>

                        {/* Account Info Section */}
                        <div className="bg-black/20 rounded-xl p-6 border border-zinc-700 shadow-inner">
                            <h2 className="text-lg font-semibold mb-4 text-zinc-200">Account Information</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                                    <span className="text-zinc-400">Member Since</span>
                                    <span className="font-mono text-zinc-300">{authuser?.createdAt?.split("T")[0]}</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-zinc-400">Account Status</span>
                                    <span className="text-green-400 font-semibold inline-flex items-center gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-green-400"></span>
                                        Active
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default ProfilePage;
