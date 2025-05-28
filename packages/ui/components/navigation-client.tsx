"use client"

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar"
import { useLanguage } from "./language-provider"
import Link from "next/link"

export function NavigationClient() {
  const { t } = useLanguage()

  return (
    <>
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-primary">{t("nav.title")}</h1>
      </div>

      <Menubar className="border-none">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">{t("nav.menu")}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>{t("menu.weddingCakes")}</MenubarItem>
            <MenubarItem>{t("menu.birthdayCakes")}</MenubarItem>
            <MenubarItem>{t("menu.cupcakes")}</MenubarItem>
            <MenubarItem asChild>
              <Link href="/custom-order">{t("menu.customOrders")}</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer" asChild>
            <Link href="/about">{t("nav.about")}</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">{t("nav.contact")}</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  )
}
