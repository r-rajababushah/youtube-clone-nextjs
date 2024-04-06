import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import SideNav from "@/components/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Youtube",
	description: "Cloned by Rajababu Shah",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="topNavSec">
					<NavBar />
				</div>
				<div className="bodySec flex h-screen">
					<div className="sideNavSec basis-1/6 h-full overflow-auto overflow-x-hidden pt-14">
						<SideNav />
					</div>
					<div className="contentSec basis-10/12 bg-blue-500 mt-12 mx-0 overflow-auto">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
