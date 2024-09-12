"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	CalendarIcon,
	CreditCardIcon,
	PackageIcon,
	UserIcon,
} from "lucide-react";

const userMenuItems = [
	{ icon: PackageIcon, label: "Orders", value: "orders" },
	{ icon: CreditCardIcon, label: "Billing", value: "billing" },
	{ icon: UserIcon, label: "Profile", value: "profile" },
];

const adminMenuItems = [
	{ icon: PackageIcon, label: "Orders", value: "orders" },
	{ icon: UserIcon, label: "Customers", value: "customers" },
	{ icon: CreditCardIcon, label: "Revenue", value: "revenue" },
];

export default function DashboardPage() {
	const [isAdmin, setIsAdmin] = useState(false);
	const [activeTab, setActiveTab] = useState("orders");

	const menuItems = isAdmin ? adminMenuItems : userMenuItems;

	return (
		<div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
			{/* Sidebar */}
			<aside className="w-full lg:w-64 bg-white p-6">
				<h2 className="text-2xl font-bold mb-6">Dashboard</h2>
				<nav>
					<ul className="space-y-2">
						{menuItems.map((item) => (
							<li key={item.value}>
								<Button
									variant={activeTab === item.value ? "default" : "ghost"}
									className="w-full justify-start"
									onClick={() => setActiveTab(item.value)}
								>
									<item.icon className="mr-2 h-4 w-4" />
									{item.label}
								</Button>
							</li>
						))}
					</ul>
				</nav>
				<Button className="mt-6 w-full" onClick={() => setIsAdmin(!isAdmin)}>
					Switch to {isAdmin ? "User" : "Admin"} View
				</Button>
			</aside>

			{/* Main Content */}
			<main className="flex-1 p-6">
				<Tabs value={activeTab} className="w-full">
					<TabsContent value="orders">
						<Card>
							<CardHeader>
								<CardTitle>Orders</CardTitle>
								<CardDescription>View and manage your orders.</CardDescription>
							</CardHeader>
							<CardContent>
								{/* Order list or table would go here */}
								<p>Order content placeholder</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="billing">
						<Card>
							<CardHeader>
								<CardTitle>Billing</CardTitle>
								<CardDescription>
									Manage your billing information and payment methods.
								</CardDescription>
							</CardHeader>
							<CardContent>
								{/* Billing information would go here */}
								<p>Billing content placeholder</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="profile">
						<Card>
							<CardHeader>
								<CardTitle>Profile</CardTitle>
								<CardDescription>
									Manage your account settings and preferences.
								</CardDescription>
							</CardHeader>
							<CardContent>
								{/* Profile settings would go here */}
								<p>Profile content placeholder</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="customers">
						<Card>
							<CardHeader>
								<CardTitle>Customers</CardTitle>
								<CardDescription>
									View and manage customer information.
								</CardDescription>
							</CardHeader>
							<CardContent>
								{/* Customer list or table would go here */}
								<p>Customer content placeholder</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="revenue">
						<Card>
							<CardHeader>
								<CardTitle>Revenue</CardTitle>
								<CardDescription>
									Track and analyze your revenue.
								</CardDescription>
							</CardHeader>
							<CardContent>
								{/* Revenue charts and stats would go here */}
								<p>Revenue content placeholder</p>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</main>
		</div>
	);
}
