import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Error from "./pages/Error";


function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/watch" element={<Watch />} />
				<Route path="*" element={<Error title='404' desc='Página não encontrada'/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;