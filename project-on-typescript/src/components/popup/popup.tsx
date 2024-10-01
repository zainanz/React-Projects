import { useState } from "react";

export default function Popup({
  backgroundColor,
  btnContent,
  content,
}: {
  backgroundColor: string;
  content: string;
  btnContent: string;
}) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <button onClick={() => setShowPopup((prev) => !prev)}>
        {btnContent}
      </button>
      {showPopup && (
        <div
          style={{
            backgroundColor: backgroundColor,
            position: "fixed",
            top: "50%",
            right: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <h3>{content}</h3>
        </div>
      )}
    </>
  );
}
