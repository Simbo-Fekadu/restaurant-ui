"use client"

import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Award, Clock, Users, Heart } from "lucide-react"
import { useLanguage } from "./language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-muted/50" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                {t("about.badge")}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("about.title")}</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">{t("about.description")}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Award className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">{t("about.awardWinning")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.bestBakery")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Clock className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">{t("about.freshDaily")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.madeEveryMorning")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Users className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">{t("about.happyCustomers")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.satisfiedCustomers")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">{t("about.madeWithLove")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.everySingleCake")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mx-auto aspect-video overflow-hidden rounded-xl">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Our bakery kitchen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
