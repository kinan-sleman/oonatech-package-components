import React from "react";
import { CircularProgress } from "@mui/material";

function ModalActions({
  handleDiscard,
  handleSave,
  inActiveSave,
  inActiveDiscard,
  loading,
  saveText,
  discardText,
}: {
  handleDiscard?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSave?: (e: any) => Promise<void>;
  loading?: boolean;
  saveText?: string;
  discardText?: string;
  inActiveSave?: boolean;
  inActiveDiscard?: boolean;
}) {
  const onDiscardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleDiscard) {
      handleDiscard(e);
    }
  };
  return (
    <div className="box-submit border-t border-[#F4F4F4]">
      {!inActiveSave ? (
        <div className="relative">
          <button
            type="submit"
            className={`Submit  text-sm text-white font-normal w-[109px] h-[40px] ${
              loading ? "opacity-30" : "opacity-100"
            }`}
            // onClick={handleSave}
          >
            {saveText ? saveText : "Submit"}
          </button>
          {loading && (
            <CircularProgress
              color="inherit"
              size={20}
              style={{
                position: "absolute",
                top: "27%",
                left: "43%",
                transform: "translate(-50%, -50%)",
                color: "#1b84ff",
              }}
            />
          )}
        </div>
      ) : (
        ""
      )}
      {!inActiveDiscard ? (
        <button
          onClick={onDiscardClick}
          className="Discard text-sm text-[#595959] font-normal w-[109px] h-[40px]"
        >
          {discardText ? discardText : "Discard"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ModalActions;
