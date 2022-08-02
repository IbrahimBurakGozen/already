import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta name="keywords" content="already" />
				<meta name="title" content="Nog zo veel meer... - Already" />
				<meta
					name="description"
					content="Zou het niet te gek zijn zou je je boodschappen online uit verschillende supermarkten tegelijk kunnen doen? En zou het niet waanzinniger zijn zouden deze de volgende dag thuis geleverd worden? Dat is nu mogelijk met already!"
				/>
				<link rel="icon" href="/favicon.svg" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
