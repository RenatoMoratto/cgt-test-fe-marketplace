import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { CartProvider } from "./store/cart-context";

function App() {
	const pathname = window.location.pathname;

	return (
		<CartProvider>
			<Header />
			<main>
				{pathname === "/" && <Home />}
				{pathname.includes("/products") && <Product />}
				{pathname === "/cart" && <Cart />}
			</main>
		</CartProvider>
	);
}

export default App;
