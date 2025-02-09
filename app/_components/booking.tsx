import React from "react";
import { getBooking } from "../_data-access/booking/get-booking";
import { getMonthName, months } from "../_utils/calendary";
import { Schedule } from "@prisma/client";
import { separateDate } from "../_utils/format-date";
interface BookingProps {
  bookings: Schedule[];
}
const BookingComponent = async ({ bookings }: BookingProps) => {
  return bookings.map((booking) => (
    <div key={booking.id} className="w-full">
      <div className="mx-auto mt-2 flex h-[100px] w-[95%] items-center justify-between rounded-lg border border-neutral-700 px-4">
        <div>
          <span className="rounded-lg bg-pink-500 p-1 font-bold">
            Confirmado
          </span>
          <h3 className="mt-2 text-2xl">{booking.service}</h3>
        </div>

        <div className="flex flex-col items-center border-l-2 border-neutral-700 px-3">
          <p className="text-sm">
            {getMonthName(
              Number(separateDate(booking.date, booking.time).month),
            )}
          </p>
          <p className="text-3xl">
            {separateDate(booking.date, booking.time).day}
          </p>
          <p className="text-sm">{booking.time}</p>
        </div>
      </div>
    </div>
  ));
};

export default BookingComponent;
