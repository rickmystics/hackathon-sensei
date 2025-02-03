'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';
import { Menu, Plus } from 'lucide-react';
import { DarkModeTogglePlain } from './DarkModeToggle';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import ChatThreadList from '@/components/ChatHistory';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <nav className="border-b sm:hidden fixed top-0 left-0 w-full bg-background h-[var(--navbar-height)]">
      <div className="max-w-screen-lg mx-auto px-4 flex items-center space-x-2">
        <div className="flex items-center py-3">
          <Link href="/">
            <Image src="/sensei.svg" alt="logo" width={28} height={28} />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-accent dark:bg-accent px-0 py-0"
          >
            <div className="flex flex-col h-full">
              <SheetHeader>
                <SheetTitle>Chats</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto">
                <ChatThreadList />
              </div>
              <SheetFooter className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <div className="hover:opacity-50 cursor-pointer text-foreground/70 mr-2">
                      <DarkModeTogglePlain size={24} />
                    </div>
                    <Link
                      href="https://github.com/rickmystics/hackathon-sensei.git"
                      className={`flex items-center justify-center text-foreground/70 hover:opacity-50`}
                      target="_blank"
                    >
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <SheetClose>
                    <Button
                      onClick={() => {
                        router.push('/');
                      }}
                      variant="outline"
                      className="bg-offset filter brightness-95 h-8 px-2"
                    >
                      <Plus size={20} className="mr-2" />
                      New
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
