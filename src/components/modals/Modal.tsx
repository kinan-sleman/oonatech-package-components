import React from "react";
import { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";

import Slide from "@mui/material/Slide";
import PopUpHeader from "./sub-component/PopUpHeader";
import ModalActions from "./sub-component/ModalActions";
import { Box } from "@mui/material";

interface MyComponent {
  check: boolean;
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg";
  handleClose?: () => void;
  title?: string;
  inActiveHeader?: boolean;
  inActiveFormActions?: boolean;
  handleDiscard?: () => void;
  handleSave?: (e: any) => Promise<void>;
  loading?: boolean;
  saveText?: string;
  discardText?: string;
  inActiveSave?: boolean;
  inActiveDiscard?: boolean;
  overFlowVisible?: boolean;
  cls?: string;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      timeout={{
        appear: 4000,
        enter: 10000,
        exit: 1500,
      }}
      direction="down"
      ref={ref}
      {...props}
    />
  );
});

function MainModal({
  check,
  children,
  maxWidth,
  handleClose,
  title,
  inActiveHeader,
  inActiveFormActions,
  handleDiscard,
  handleSave,
  inActiveSave,
  inActiveDiscard,
  loading,
  saveText,
  discardText,
  overFlowVisible,
  cls
}: MyComponent) {
  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  // };
  return (
    <Dialog
      maxWidth={maxWidth}
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "10px",
          overflowY: overFlowVisible ? "visible !important" : "auto",
        },
      }}
      open={check}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box
        sx={{ position: "relative" }}
        component="form"
        onSubmit={handleSave}
        noValidate
      >
        {!inActiveHeader ? (
          <PopUpHeader title={title} onClose={handleClose} />
        ) : (
          ""
        )}
        {children}
        {!inActiveFormActions ? (
          <ModalActions
            handleSave={handleSave}
            handleDiscard={handleDiscard}
            inActiveSave={inActiveSave}
            inActiveDiscard={inActiveDiscard}
            loading={loading}
            saveText={saveText}
            discardText={discardText}
          />
        ) : (
          ""
        )}
      </Box>
    </Dialog>
  );
}

export default MainModal;
