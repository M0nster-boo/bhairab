import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const events = [
  { date: "2023-07-15", name: "Summer Music Festival", venue: "Central Park", city: "New York, NY" },
  { date: "2023-07-22", name: "Indie Rock Night", venue: "The Roxy Theatre", city: "Los Angeles, CA" },
  { date: "2023-07-29", name: "Jazz & Beyond", venue: "Millennium Park", city: "Chicago, IL" },
  { date: "2023-08-05", name: "Acoustic Unplugged", venue: "The Fillmore", city: "San Francisco, CA" },
  { date: "2023-08-12", name: "Rock the Stadium", venue: "Wembley Stadium", city: "London, UK" },
]

export default function Events() {
  return (
    <section id="events" className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-teal-300">Upcoming Events</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-900">
              <TableHead className="text-teal-300 w-1/4">Date</TableHead>
              <TableHead className="text-teal-300 w-1/4">Event</TableHead>
              <TableHead className="text-teal-300 w-1/4 hidden sm:table-cell">Venue</TableHead>
              <TableHead className="text-teal-300 w-1/4 hidden md:table-cell">City</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index} className="border-b border-teal-800">
                <TableCell className="text-gray-300 font-medium">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell className="text-gray-300">
                  <div>{event.name}</div>
                  <div className="text-sm text-gray-400 sm:hidden">{event.venue}</div>
                  <div className="text-sm text-gray-400 md:hidden">{event.city}</div>
                </TableCell>
                <TableCell className="text-gray-300 hidden sm:table-cell">{event.venue}</TableCell>
                <TableCell className="text-gray-300 hidden md:table-cell">{event.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

