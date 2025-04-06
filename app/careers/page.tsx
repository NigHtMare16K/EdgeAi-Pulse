import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

// Mock job listings data
const jobListings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "We're looking for a Senior AI Engineer to join our team and help build the next generation of AI tools and services. You'll be responsible for designing, implementing, and optimizing AI models and algorithms.",
    requirements: [
      "5+ years of experience in machine learning or AI",
      "Strong programming skills in Python",
      "Experience with deep learning frameworks like PyTorch or TensorFlow",
      "Experience with large language models and multimodal AI",
      "Strong communication and collaboration skills",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    description:
      "We're looking for a Full Stack Developer to join our team and help build and maintain our web applications. You'll be responsible for developing and implementing user interfaces, server-side logic, and database integrations.",
    requirements: [
      "3+ years of experience in full stack development",
      "Strong programming skills in JavaScript/TypeScript",
      "Experience with React, Next.js, and Node.js",
      "Experience with RESTful APIs and GraphQL",
      "Strong problem-solving and debugging skills",
    ],
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "We're looking for a Product Manager to join our team and help define and execute our product strategy. You'll be responsible for gathering and prioritizing product requirements, defining the product vision, and working closely with engineering, design, and marketing teams.",
    requirements: [
      "3+ years of experience in product management",
      "Experience with AI or machine learning products",
      "Strong analytical and problem-solving skills",
      "Excellent communication and collaboration skills",
      "Experience with agile development methodologies",
    ],
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description:
      "We're looking for a UX/UI Designer to join our team and help create intuitive and engaging user experiences. You'll be responsible for designing user interfaces, creating wireframes and prototypes, and conducting user research.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Strong portfolio demonstrating your design skills",
      "Experience with design tools like Figma or Sketch",
      "Experience with user research and usability testing",
      "Strong communication and collaboration skills",
    ],
  },
  {
    id: 5,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description:
      "We're looking for a Marketing Manager to join our team and help grow our user base. You'll be responsible for developing and executing marketing strategies, managing campaigns, and analyzing marketing performance.",
    requirements: [
      "3+ years of experience in marketing",
      "Experience with digital marketing channels",
      "Experience with content marketing and social media",
      "Strong analytical and data-driven mindset",
      "Excellent communication and writing skills",
    ],
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Join Our Team
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us make AI tools and research accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 reveal reveal-delay-1">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-muted-foreground mb-4">
              At Edge AI Pulse, we're building the future of AI discovery. We're a team of passionate engineers,
              designers, and product managers who are committed to making AI tools and research accessible to everyone.
            </p>
            <p className="text-muted-foreground mb-4">
              We offer competitive salaries, comprehensive benefits, and a flexible work environment. We believe in
              work-life balance and provide our employees with the tools and resources they need to succeed.
            </p>
            <h3 className="text-xl font-bold mb-2 mt-6">Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Competitive salary and equity</li>
              <li>Comprehensive health, dental, and vision insurance</li>
              <li>Flexible work hours and remote work options</li>
              <li>Unlimited paid time off</li>
              <li>Professional development budget</li>
              <li>401(k) matching</li>
              <li>Parental leave</li>
              <li>Wellness programs</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg?height=400&width=600&text=Team+Photo"
              alt="Edge AI Pulse Team"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16 reveal reveal-delay-2">
          <h2 className="text-2xl font-bold mb-4 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6 mt-8">
            {jobListings.map((job, index) => (
              <Card
                key={job.id}
                className={`glass-effect hover:shadow-lg transition-all duration-300 reveal reveal-delay-${(index % 3) + 1}`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{job.type}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        <span>{job.salary}</span>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href={`/careers/${job.id}`}>Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mb-8 reveal reveal-delay-4">
          <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals to join our team. If you don't see a position that fits your
            skills and experience, feel free to send us your resume and we'll keep it on file for future opportunities.
          </p>
          <Button asChild>
            <Link href="mailto:careers@edgeaipulse.com">Contact Us</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

