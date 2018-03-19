import React from "react";

import { auth } from "../../firebase/index";

const LogOutButton = () => (
	<button type="button" onClick={auth.doSignOut}>
		Logout
	</button>
);

export default LogOutButton;
