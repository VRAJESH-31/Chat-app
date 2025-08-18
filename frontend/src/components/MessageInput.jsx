import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import useAuth from "../store/useAuth";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const fileInputRef = useRef(null);

    const { sendMessage } = useChatStore();
    const { selectedUser } = useChatStore();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file?.type.startsWith("image/")) {
            toast.error("Please select an image file");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const removeImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim() && !imagePreview) return;

        const messageData = {
            text: text.trim(),
            image: imagePreview,
        };

        // Only send via API – backend handles socket emit
        try {
            setIsSending(true);
            await sendMessage(messageData);
            setText("");
            setImagePreview(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch {
            toast.error("Failed to send message");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="p-4 w-full border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
            {imagePreview && (
                <div className="mb-3 flex items-center gap-2">
                    <div className="relative">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-20 h-20 object-cover rounded-xl shadow-md border border-gray-300 dark:border-gray-700"
                        />
                        <button
                            onClick={removeImage}
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-800 text-white hover:bg-red-500 flex items-center justify-center shadow-lg transition-colors"
                            type="button"
                        >
                            <X className="size-3" />
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm focus-within:shadow-md transition-all">
                    <input
                        type="text"
                        className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Type a message..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                    <button
                        type="button"
                        className={`hidden sm:flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${imagePreview
                                ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-400 hover:text-orange-500"
                            }`}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Image size={18} />
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={!text.trim() && !imagePreview}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-red-400 to-orange-600 text-white shadow-md hover:shadow-lg hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 transition-all duration-200"
                >
                    <Send size={20} />
                </button>
            </form>
        </div>
    );
};

export default MessageInput;
