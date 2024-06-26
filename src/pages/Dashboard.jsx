import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#375105] text-primary-foreground py-8 px-4 md:px-6">
        <div className="container flex flex-col items-center text-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Rep. Adedeji Jane
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
            House of Representatives
            </p>
          </div>
          <p className="max-w-[700px] text-primary-foreground/90 md:text-lg">
            Jane is a dedicated public servant, working tirelessly to represent
            the interests of her constituents in the 5th District. With a focus
            on bipartisanship and pragmatic solutions, she has built a
            reputation as a consensus-builder in Congress.
          </p>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bills</CardTitle>
              <CardDescription>
                Review the latest bills Rep. Adedeji is sponsoring or
                co-sponsoring.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    H.R. 1234 - Clean Energy Act
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Promotes the development of renewable energy sources.
                  </p>
                </li>
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    S. 5678 - Small Business Relief Act
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Provides tax credits and loans to support small businesses.
                  </p>
                </li>
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    H.R. 9012 - Education Funding Act
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Increases federal funding for public schools.
                  </p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                to="#"
                className="text-sm font-medium text-primary"
                prefetch={false}>
                View all bills
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Committee Assignments</CardTitle>
              <CardDescription>
                Rep. Adedeji serves on the following congressional committees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    Energy and Commerce Committee
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Oversees issues related to energy, the environment, and
                    consumer protection.
                  </p>
                </li>
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    Small Business Committee
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Develops policies and programs to support small businesses.
                  </p>
                </li>
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    Education and Labor Committee
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Oversees issues related to education, workforce development,
                    and labor rights.
                  </p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                to="#"
                className="text-sm font-medium text-primary"
                prefetch={false}>
                View all committees
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Votes</CardTitle>
              <CardDescription>
                See how Rep. Adedeji has voted on recent legislation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    H.R. 5678 - Pandemic Relief Act
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Voted Yea - Provided economic assistance to individuals and
                    businesses affected by the COVID-19 pandemic.
                  </p>
                </li>
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    S. 1234 - Veteran &apos;s Healthcare Expansion Act
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Voted Nay - Opposed the bill due to concerns about funding
                    and implementation.
                  </p>
                </li>
                <li>
                  <Link to="#" className="font-medium" prefetch={false}>
                    H.R. 9012 - Education Funding Act
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Voted Yea - Supported increased federal funding for public
                    schools.
                  </p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                to="#"
                className="text-sm font-medium text-primary"
                prefetch={false}>
                View all votes
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
