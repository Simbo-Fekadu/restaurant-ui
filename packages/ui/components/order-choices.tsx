"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { MessageSquare, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "./language-provider"

export function OrderChoices() {
  const { t } = useLanguage()

  const handleGmailRedirect = () => {
    const subject = "Cake Order Request - Sweet Dreams Bakery"
    const body =
      "Hello Sweet Dreams Bakery,%0D%0A%0D%0AI would like to place an order for:%0D%0A%0D%0ACake Type:%0D%0ASize:%0D%0AFlavor:%0D%0ADecorations:%0D%0ADelivery Date:%0D%0ASpecial Instructions:%0D%0A%0D%0APlease contact me to confirm the details.%0D%0A%0D%0AThank you!"
    const recipient = "orders@sweetdreamsbakery.com"

    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, "_self")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/20 dark:to-orange-950/20">
      <div className="container px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("order.backToHome")}
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{t("order.title")}</h1>
            <p className="text-muted-foreground">{t("order.subtitle")}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleGmailRedirect}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <Badge variant="secondary" className="w-fit mx-auto mb-2">
                {t("order.emailOrder")}
              </Badge>
              <CardTitle className="text-2xl">{t("order.emailTitle")}</CardTitle>
              <CardDescription className="text-base">{t("order.emailDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleGmailRedirect}>
                <MessageSquare className="h-4 w-4 mr-2" />
                {t("order.sendEmail")}
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-pink-100 dark:bg-pink-900/20 rounded-full w-fit group-hover:bg-pink-200 dark:group-hover:bg-pink-900/30 transition-colors">
                <Phone className="h-8 w-8 text-pink-600" />
              </div>
              <Badge variant="secondary" className="w-fit mx-auto mb-2">
                {t("order.directContact")}
              </Badge>
              <CardTitle className="text-2xl">{t("order.directTitle")}</CardTitle>
              <CardDescription className="text-base">{t("order.directDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                <Link href="/contact-details">
                  <Phone className="h-4 w-4 mr-2" />
                  {t("order.viewContact")}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
