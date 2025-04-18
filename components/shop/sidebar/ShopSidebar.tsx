"use client";
import { ChevronUp, Home, User2, Footprints, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import LogoutButton from "@/components/Form/Logout";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/shop",
    icon: Home,
    description: "Overview of your shop",
  },
  {
    title: "Men's Shoes",
    url: "/shop/mens",
    icon: Footprints,
    description: "Browse men's footwear",
  },
  {
    title: "Women's Shoes",
    url: "/shop/womens",
    icon: Footprints,
    description: "Browse women's footwear",
  },
  {
    title: "Kids' Shoes",
    url: "/shop/kids",
    icon: Footprints,
    description: "Browse kids' footwear",
  },
  {
    title: "New Arrivals",
    url: "/shop/newly-arrival",
    icon: Sparkles,
    description: "Latest products",
  },
];

export function ShopSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-gray-900 border-r border-gray-700 w-64 h-full flex flex-col">
      <SidebarHeader className="p-4 border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800">
        <Link href="/shop" className="flex items-center">
          <div className="text-2xl font-bold text-green-600 transition-colors">
            AJ<span className="text-blue-400 italic">ShoeStore</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="flex-1 overflow-y-auto p-4 bg-gray-900">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2">
            <h3 className="text-md font-bold text-white uppercase tracking-wider">
              Shop Navigation
            </h3>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`group flex items-center px-3 py-3 text-lg font-medium rounded-md transition-all ${
                          isActive
                            ? "bg-blue-600/20 text-white border-l-4 border-blue-500 shadow-sm"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white group-hover:text-blue-700"
                        }`}
                      >
                        <item.icon
                          className={`flex-shrink-0 h-5 font-bold w-5 ${
                            isActive
                              ? "text-white"
                              : "text-gray-400 group-hover:text-blue-800"
                          }`}
                        />
                        <span className="ml-3 text-md font-bold">
                          {item.title}
                        </span>
                        {isActive && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-700 bg-[#111827] shadow-lg">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-white">
                  <div className="flex items-center">
                    <User2 className="h-5 w-5 text-gray-400" />
                    <span className="ml-3">Amadou Jamanka</span>
                  </div>
                  <ChevronUp className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[var(--radix-popper-anchor-width)] bg-gray-800 shadow-lg rounded-md border border-gray-700"
              >
                <DropdownMenuItem className="px-4 py-2.5 text-sm cursor-pointer rounded-md hover:bg-gray-700 text-gray-200">
                  <Link href={"/shop/account"} className="w-full">
                    <span className="w-full">Account</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2.5 text-sm cursor-pointer rounded-md hover:bg-gray-700 text-gray-200">
                  <Link href={"/shop/order"} className="w-full">
                    <span className="w-full">Orders</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2.5 w-full text-sm cursor-pointer rounded-md hover:bg-red-900/30 text-red-400">
                  <span>
                    <LogoutButton />
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
