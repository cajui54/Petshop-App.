import React from "react";
interface MessageProps {
  type: "success" | "error" | "";
  content: string;
}
const MessageComponent = ({ type, content }: MessageProps) => {
  return (
    <div
      className={`${
        type === "success"
          ? "border-green-600 bg-green-200 text-green-600"
          : "border-red-600 bg-red-200 text-red-600"
      } mx-auto mb-5 w-4/5 rounded-lg border py-1 text-center text-xs`}
    >
      {content}
    </div>
  );
};

export default MessageComponent;
