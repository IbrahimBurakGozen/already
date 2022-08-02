import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, Suspense } from "react";
import { NextPage } from "next";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Spinner from "@/common/components/Spinner";

const queryClient = new QueryClient();

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Suspense
					fallback={
						<div className="min-h-screen w-full flex flex-col justify-center items-center bg-light-400">
							<Spinner />
						</div>
					}
				>
					{getLayout(<Component {...pageProps} />)}
				</Suspense>
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	);
}
