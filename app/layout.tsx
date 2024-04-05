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
					<div className="sideNavSec h-full overflow-auto pt-12">
						<SideNav />
					</div>
					<div className="contentSec bg-blue-500 flex-grow p-4 pt-12">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
