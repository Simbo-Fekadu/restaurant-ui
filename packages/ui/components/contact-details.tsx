"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Phone, Facebook, MessageCircle, ArrowLeft, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "./language-provider"

export function ContactDetails() {
  const { t } = useLanguage()

  const handlePhoneCall = () => {
    window.open("tel:+251221112345", "_self")
  }

  const handleFacebookRedirect = () => {
    window.open("https://facebook.com/sweetdreamsbakery", "_blank")
  }

  const handleTelegramRedirect = () => {
    window.open("https://t.me/sweetdreamsbakery", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/20 dark:to-orange-950/20">
      <div className="container px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/order">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("contact.backToOrder")}
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{t("contact.title")}</h1>
            <p className="text-muted-foreground">{t("contact.subtitle")}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handlePhoneCall}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-green-100 dark:bg-green-900/20 rounded-full w-fit group-hover:bg-green-200 dark:group-hover:bg-green-900/30 transition-colors">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">{t("contact.callUs")}</CardTitle>
              <CardDescription>{t("contact.callDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3">
                <div className="text-lg font-bold text-green-600">+251 22 111 2345</div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Mon-Fri: 6AM-9PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>Sat-Sun: 6AM-10PM</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handlePhoneCall}>
                  <Phone className="h-4 w-4 mr-2" />
                  {t("contact.callNow")}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleFacebookRedirect}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                <Facebook className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{t("contact.facebook")}</CardTitle>
              <CardDescription>{t("contact.facebookDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3">
                <div className="text-lg font-semibold">@SweetDreamsBakery</div>
                <div className="text-sm text-muted-foreground">
                  <div>✓ Quick responses</div>
                  <div>✓ Share photos easily</div>
                  <div>✓ View our latest cakes</div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleFacebookRedirect}>
                  <Facebook className="h-4 w-4 mr-2" />
                  Message on Facebook
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleTelegramRedirect}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-sky-100 dark:bg-sky-900/20 rounded-full w-fit group-hover:bg-sky-200 dark:group-hover:bg-sky-900/30 transition-colors">
                <MessageCircle className="h-8 w-8 text-sky-600" />
              </div>
              <CardTitle className="text-xl">{t("contact.telegram")}</CardTitle>
              <CardDescription>{t("contact.telegramDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3">
                <div className="text-lg font-semibold">@SweetDreamsBakery</div>
                <div className="text-sm text-muted-foreground">
                  <div>✓ Instant messaging</div>
                  <div>✓ Send photos & videos</div>
                  <div>✓ Voice messages</div>
                </div>
                <Button className="w-full bg-sky-600 hover:bg-sky-700" onClick={handleTelegramRedirect}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on Telegram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Our Location & Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-pink-600" />
                    <span className="font-semibold">Visit Our Bakery</span>
                  </div>
                  <p className="text-muted-foreground">
                    Haile Gebreselassie Street
                    <br />
                    Near Adama Stadium
                    <br />
                    Adama, Oromia Region, Ethiopia
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-pink-600" />
                    <span className="font-semibold">Business Hours</span>
                  </div>
                  <p className="text-muted-foreground">
                    Monday - Friday: 6:00 AM - 9:00 PM
                    <br />
                    Saturday: 6:00 AM - 10:00 PM
                    <br />
                    Sunday: 7:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <h4 className="font-semibold text-center mb-2">🏪 Find Us in Adama</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Located on Haile Gebreselassie Street, near Adama Stadium. Easy parking available and accessible by
                  public transport!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
