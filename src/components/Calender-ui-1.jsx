import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"


const Calender1= () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedView, setSelectedView] = useState("month")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }
  const handleViewChange = (view) => {
    setSelectedView(view)
  }
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter)
  }
  const events = [
    {
      id: 1,
      title: "Committee Hearing: Appropriations",
      date: new Date(2024, 5, 5),
      type: "committee",
    },
    {
      id: 2,
      title: "Floor Vote: HB 1234",
      date: new Date(2024, 5, 10),
      type: "floor",
    },
    {
      id: 3,
      title: "Bill Introduction: SB 5678",
      date: new Date(2024, 5, 15),
      type: "bill",
    },
    {
      id: 4,
      title: "Committee Hearing: Judiciary",
      date: new Date(2024, 5, 20),
      type: "committee",
    },
    {
      id: 5,
      title: "Floor Vote: SR 9012",
      date: new Date(2024, 5, 25),
      type: "floor",
    },
  ]
  const filteredEvents = selectedFilter === "all" ? events : events.filter((event) => event.type === selectedFilter)
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  return (
    <div className="bg-background p-6 sm:p-10">
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={handlePreviousMonth}>
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" onClick={handleNextMonth}>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedView === "month" ? "Month" : "Week"}
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleViewChange("month")}>Month</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleViewChange("week")}>Week</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedFilter === "all" ? "All" : selectedFilter}
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleFilterChange("all")}>All</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange("committee")}>Committee</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange("floor")}>Floor</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange("bill")}>Bills</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="text-center text-muted-foreground">
            &nbsp;
          </div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1)
          const dayEvents = filteredEvents.filter((event) => event.date.getDate() === date.getDate())
          return (
            <div key={`day-${index}`} className="relative">
              <div className="text-center font-medium">{date.getDate()}</div>
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className={`bg-${event.type}-foreground/10 text-${event.type}-foreground rounded-md px-2 py-1 text-sm mt-1 cursor-pointer hover:bg-${event.type}-foreground/20`}
                >
                  <Link to="#" prefetch={false}>
                    {event.title}
                  </Link>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
export default Calender1