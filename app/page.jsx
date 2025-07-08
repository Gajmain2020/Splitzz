import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Split Expenses, Simplest Way Possible, Simplify Life.
          </Badge>

          <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
            The smartest way to split expense with friends
          </h1>

          <p className="mx-auto max-w-4xl text-lg text-gray-500 md:text-xl/relaxed ">
            Split expenses easily with friends. Create a group, add friends, and
            track shared expenses. Each expense is split equally among members.
            Add notes and photos for a simple and easy way to manage shared
            expenses.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 border-none"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-100 "
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/logos/landing.png"
              alt="Hero Image"
              width={1280}
              height={720}
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
