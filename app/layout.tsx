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
				<NavBar />
				<SideNav />
				{children}
			</body>
		</html>
	);
}
