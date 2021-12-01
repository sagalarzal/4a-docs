package com.gymmintic.BookingMS.repositories;
import com.gymmintic.BookingMS.models.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findBygym (String gym);
}
