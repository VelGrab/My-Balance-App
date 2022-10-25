// Styles for Balance

export const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "80%",
    sm: "80%",
    md: "35%",
  },
  height: {
    xs: "50vh",
    sm: "50vh",
    md: "55vh",
  },
  bgcolor: "background.paper",
  border: "2px solid #7a10eb83",
  boxShadow: 24,
  borderRadius: "0.4rem",
  p: 4,
};

export const boxContBalance = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "10vh",
};

export const containerBalance = {
  width: {
    xs: "80%",
    sm: "80%",
    md: "60%",
    lg: "45%",
  },
  height: {
    xs: "55vh",
    sm: "50vh",
    md: "55vh",
  },
  background: "#7a10eb83",
  mt: "2rem",
  borderRadius: "2%",
  border: "1px solid #fff",
  boxShadow: "2px 2px 5px #000",
};

export const textFieldIncome = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "70%",
  },
};

/* STYLES IN MODAL EXPENSE AND INCOME */

export const formStyleExpInc = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  mt: {
    xs: "0rem",
    sm: "2rem",
    md: "2rem",
    lg: "2rem"
  }
};

export const boxExpIncContainer = {
  width: "100%",
  display: "flex",
  maxHeight: "100vh",
  flexWrap: "wrap",
  justifyContent: "center",
};

export const boxInsideExpInc = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "0.2rem",
};

/*
  Login and Register Styles
*/

export const buttonLogReg = {
  width: "100%",
  marginBottom: "1rem",
  backgroundColor: "#19ca5d",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#12eb65",
  },
};

export const boxLogReg = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "60vh",
};

/*
  Header Styles
*/

export const boxHeader = {
  width: "75%",
  display: "flex",
  justifyContent: "flex-end",
};

export const iconBtnHeader = {
  borderRadius: "0",
  "&:hover": { backgroundColor: "#26d4b7" },
};

/*
  Transactions Styles
*/

export const boxColorInside = {
  height: {
    xs: "8rem",
    sm: "3rem",
    md: "3rem",
  },
  display: "flex",
  flexWrap: "wrap",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
  },
  justifyContent: {
    xs: "flex-start",
    sm: "flex-start",
    md: "space-between",
  },
  alignItems: {
    xs: "center",
    sm: "center",
    md: "flex-start",
  },
  p: 1,
  flexWrap: "wrap",
  textAlign: "center",
  mt: "1rem",
  boxShadow: "0 0 5px #000",
};

export const boxTextTrans = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "0rem",
  mr: {
    xs: "0rem",
    sm: "0rem",
    md: "1rem",
  },
  ml: {
    xs: "0rem",
    sm: "0rem",
    md: "0rem",
  }
};

export const boxTextTransBtn = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  lineHeight: "0rem",
};

export const boxTextTransExp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "0rem",
  marginLeft: {
    xs: "0rem",
    sm: "2rem",
    md: "0rem",
  },
  mb: {
    xs: "-2rem",
    sm: "0rem",
    md: "0rem",
  }
};

export const boxTextTransInc = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "0rem",
  position: "relative",
  ml: {
    xs: "0rem",
    sm: "-3rem",
    md: "-2rem",
  },
  mt: {
    xs: "-1rem",
    sm: "0rem",
    md: "0rem",
  }
};

export const boxContainerTrans = {
  backgroundColor: "#b492e0",
  height: "70%",
  borderRadius: "1%",
  overflow: "scroll",
  boxShadow: "2px 2px 8px #000",
  mt: {
    xs: "0rem",
    sm: "0.5rem",
    md: "0.5rem"
  },
};
