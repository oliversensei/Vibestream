"use client";

import Link from "next/link";
import {
  Home,
  Search,
  Library,
  Plus,
  ArrowRight,
  ListMusic,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const VibeStreamLogo = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary"
    fill="currentColor"
  >
    <title>VibeStream</title>
    <path d="M12 0c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12zm-3.6 8.4c.497 0 .9.403.9.9v4.8c0 .497-.403.9-.9.9s-.9-.403-.9-.9v-4.8c0-.497.403-.9.9-.9zm3.6-1.8c.497 0 .9.403.9.9v6.6c0 .497-.403.9-.9.9s-.9-.403-.9-.9v-6.6c0-.497.403-.9.9-.9zm3.6 1.8c.497 0 .9.403.9.9v4.8c0 .497-.403.9-.9.9s-.9-.403-.9-.9v-4.8c0-.497.403-.9.9-.9z" />
  </svg>
);

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-sidebar-background text-sidebar-foreground p-2 space-y-2">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <VibeStreamLogo />
          <h1 className="text-xl font-bold">VibeStream</h1>
        </Link>
      </div>

      <div className="bg-card rounded-lg p-2">
        <nav className="space-y-1">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            <Search className="h-5 w-5" />
            Search
          </Link>
        </nav>
      </div>

      <div className="bg-card rounded-lg p-2 flex-1 flex flex-col h-[calc(100vh-190px)]">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
            <Library className="h-5 w-5" />
            Your Library
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto mt-2 space-y-1">
          {["Liked Songs", "Indie Pop", "Lo-fi Beats", "Acoustic Hits", "Focus Flow"].map(
            (playlist) => (
              <Link
                key={playlist}
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                <div className="h-8 w-8 bg-sidebar-accent rounded-md flex items-center justify-center">
                  <ListMusic className="h-4 w-4" />
                </div>
                {playlist}
              </Link>
            )
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
