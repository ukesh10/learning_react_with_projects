import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hook/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailHasError && "Please enter a valid email address"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

// import { useState } from "react";
// import Input from "./Input";
// import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

// export default function Login() {
//   const [enteredData, setEnteredData] = useState({
//     enteredEmail: "",
//     enteredPassword: "",
//   });

//   const [didEdit, setDidEdit] = useState({
//     enteredEmail: false,
//     enteredPassword: false,
//   });

//   const emailIsValid =
//     didEdit.enteredEmail &&
//     !isEmail(enteredData.enteredEmail) &&
//     !isNotEmpty(enteredData.enteredEmail);
//   const passowrdIsValid =
//     didEdit.enteredPassword && !hasMinLength(enteredData.enteredPassword, 6);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (emailIsValid || passowrdIsValid) {
//       return;
//     }
//     console.log(enteredData);
//   }

//   function handleInputChange(identifier, value) {
//     setEnteredData((prevState) => ({
//       ...prevState,
//       [identifier]: value,
//     }));
//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: false,
//     }));
//   }

//   function handleInputBlur(identifier) {
//     setDidEdit((prevEdit) => ({
//       ...prevEdit,
//       [identifier]: true,
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <Input
//           label="Email"
//           id="email"
//           type="email"
//           name="email"
//           value={enteredData.enteredEmail}
//           onBlur={() => handleInputBlur("enteredEmail")}
//           onChange={(e) => handleInputChange("enteredEmail", e.target.value)}
//           error={emailIsValid && "Please enter a valid email address"}
//         />

//         <Input
//           label="Password"
//           id="password"
//           type="password"
//           name="password"
//           value={enteredData.enteredPassword}
//           onChange={(e) => handleInputChange("enteredPassword", e.target.value)}
//           onBlur={() => handleInputBlur("enteredPassword")}
//           error={passowrdIsValid && "Please enter a valid password"}
//         />
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }
