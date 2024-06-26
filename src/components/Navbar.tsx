'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        
        <Menu setActive={setActive}>

            <Link href={'/'}>

                <MenuItem setActive={setActive} active={active} item="Home">
                    
                    {/* //there was dropdown dot that was coming
                    //even though there was no items inside menu
                    //Inside navbar-menu.tsx we solved it
                    //we used a new consition and introduced if and only if there is a children
                    //will the navbar activate 
                    //line no 41 in navbar-menu.tsx */}

                </MenuItem>

            </Link>

            <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
                
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Introduction to DSA</HoveredLink>
                        <HoveredLink href="/courses">Advanced Algorithms</HoveredLink>
                        <HoveredLink href="/courses">Algorithm Design</HoveredLink>
                        <HoveredLink href="/courses">Practice</HoveredLink>

                </div>  
            </MenuItem>

            <Link href={"/contact/"}>

            <MenuItem setActive={setActive} active={active} item="Contact Us"> 
            
            </MenuItem>

            </Link>
            
        </Menu>

    </div>
  )
}

export default Navbar
