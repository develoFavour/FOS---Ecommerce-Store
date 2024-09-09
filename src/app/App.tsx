"use client";
import { persistor, store } from "@/lib/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { Toaster, toast } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
				<Toaster position="top-center" />
			</PersistGate>
		</Provider>
	);
};

export default App;
