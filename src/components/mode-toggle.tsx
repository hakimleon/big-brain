"use client";

import * as React from "react";
import { Moon, SunMedium  } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunMedium className="rotate-0 scale-100 transition-all  dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all  dark:-rotate-0 dark:scale-100" />

    </Button>
  );
}
