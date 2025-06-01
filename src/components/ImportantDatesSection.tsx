
import React from 'react';
import { Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ImportantDatesSection: React.FC = () => {
  const importantDates = [
    { title: "Paper Submission Deadline", date: "30th September 2025" },
    { title: "Acceptance Notification Due", date: "30th November 2025" },
    { title: "Registration Due", date: "30th December 2025" },
    { title: "Camera Ready Submission", date: "30th January 2026" },
    { title: "Conference Dates", date: "10th – 11th April 2026" }
  ];

  return (
    <section id="important-dates" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            Important Dates
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-goldsmiths-blue">
                <TableHead className="text-white font-druk text-lg">Event</TableHead>
                <TableHead className="text-white font-druk text-lg">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {importantDates.map((item, index) => (
                <TableRow key={index} className="hover:bg-goldsmiths-beige/50">
                  <TableCell className="font-graphik font-bold text-goldsmiths-text text-lg">
                    {item.title}
                  </TableCell>
                  <TableCell className="font-publico text-goldsmiths-text text-lg bg-goldsmiths-beige/30">
                    {item.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ImportantDatesSection;
