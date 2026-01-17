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
        <NavigationMenu className="mt-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5">
            <NavigationMenuList className="gap-0.5">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/landing#about"
                        className="text-white hover:bg-white/15 rounded-full px-3.5 py-1.5 text-sm transition-colors"
                        style={{ cursor: "pointer" }}
                    >
                        About
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/landing#projects"
                        className="text-white hover:bg-white/15 rounded-full px-3.5 py-1.5 text-sm transition-colors"
                        style={{ cursor: "pointer" }}
                    >
                        Projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/landing#contact"
                        className="text-white hover:bg-white/15 rounded-full px-3.5 py-1.5 text-sm transition-colors"
                        style={{ cursor: "pointer" }}
                    >
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
