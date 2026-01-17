"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function BlurNav(): React.ReactNode {
    return (
        <NavigationMenu className="mt-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
            <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/landing"
                        className="text-white hover:bg-white/15 rounded-full px-4 py-2 transition-colors"
                        style={{ cursor: "pointer" }}
                    >
                        About
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/landing"
                        className="text-white hover:bg-white/15 rounded-full px-4 py-2 transition-colors"
                        style={{ cursor: "pointer" }}
                    >
                        Projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/landing"
                        className="text-white hover:bg-white/15 rounded-full px-4 py-2 transition-colors"
                        style={{ cursor: "pointer" }}
                    >
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
