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
                        href="#about"
                        className="text-white hover:bg-white/15 rounded-full px-4 py-2 transition-colors"
                    >
                        About
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="#projects"
                        className="text-white hover:bg-white/15 rounded-full px-4 py-2 transition-colors"
                    >
                        Projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="#contact"
                        className="text-white hover:bg-white/15 rounded-full px-4 py-2 transition-colors"
                    >
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
