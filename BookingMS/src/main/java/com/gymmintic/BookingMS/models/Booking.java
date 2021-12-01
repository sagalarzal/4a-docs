package com.gymmintic.BookingMS.models;

import org.springframework.data.annotation.Id;
import java.util.Date;
public class Booking {
    @Id
    private String id;
    private String usernameOrigin;
    private String gym;
    private Integer value;
    private Date date;
    private Date bookingdate;
    public Booking(String id, String usernameOrigin, String gym, Integer
            value, Date date, Date bookingdate) {
        this.id = id;
        this.usernameOrigin = usernameOrigin;
        this.gym = gym;
        this.value = value;
        this.date = date;
        this.bookingdate = bookingdate;
    }
    public String getId() {
        return id;
    }
    public String getUsernameOrigin() {
        return usernameOrigin;
    }
    public void setUsernameOrigin(String usernameOrigin) {
        this.usernameOrigin = usernameOrigin;
    }
    public String getgym() {
        return gym;
    }
    public void setgym(String gym) {
        this.gym = gym;
    }
    public Integer getValue() {
        return value;
    }
    public void setValue(Integer value) {
        this.value = value;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public Date getBookingdate() {
        return bookingdate;
    }
    public void setBookingdate(Date bookingdate){
        this.bookingdate = bookingdate;
    }
}
