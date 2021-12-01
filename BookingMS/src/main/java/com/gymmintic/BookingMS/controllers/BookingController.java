package com.gymmintic.BookingMS.controllers;
import com.gymmintic.BookingMS.models.Booking;
import com.gymmintic.BookingMS.repositories.BookingRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;

@RestController
public class BookingController {
    private final BookingRepository bookingRepository;

    public BookingController (BookingRepository bookingRepository){
        this.bookingRepository = bookingRepository;
    }
    @PostMapping("/bookings")
    Booking newBooking(@RequestBody Booking booking) {
        booking.setDate(new Date());
        return bookingRepository.save(booking);
    }
    @GetMapping("/bookings/{gym}")
    List<Booking> userGym(@PathVariable String gym){
        return bookingRepository.findBygym(gym);
    }
}
