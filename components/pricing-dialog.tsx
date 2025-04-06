"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check } from "lucide-react"

interface PricingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function PricingDialog({ open, onOpenChange }: PricingDialogProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "0",
      popular: false,
      description: "Basic access to AI tools and resources",
      features: [
        "Access to public AI models",
        "Basic search functionality",
        "Limited API requests (100/day)",
        "Community support",
        "Weekly newsletter",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "199",
      popular: true,
      description: "Full access to all features",
      features: [
        "Everything in Free",
        "Unlimited AI model access",
        "Advanced search filters",
        "Unlimited API requests",
        "Priority support",
        "Custom model recommendations",
        "Early access to new models",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "499",
      popular: false,
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom API integration",
        "Team collaboration features",
        "Advanced analytics dashboard",
        "Priority access to new models",
        "Custom model training",
      ],
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Choose Your Plan</DialogTitle>
          <DialogDescription className="text-center">Select the plan that best fits your needs</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card p-6 rounded-xl border ${
                plan.popular ? "border-primary relative" : ""
              } ${selectedPlan === plan.id ? "ring-2 ring-primary ring-offset-2" : ""}
              `}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold">₹{plan.price}</span>
                  {plan.id !== "free" && <span className="text-muted-foreground text-sm mb-1">/month</span>}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.popular ? "" : "variant-outline"}`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => {
                  setSelectedPlan(plan.id)
                  if (plan.id === "free") {
                    onOpenChange(false)
                  }
                }}
              >
                {plan.id === "free" ? "Get Started" : "Subscribe Now"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center text-muted-foreground text-sm mt-4">
          All plans come with a 7-day money-back guarantee. No questions asked.
        </div>
      </DialogContent>
    </Dialog>
  )
}

