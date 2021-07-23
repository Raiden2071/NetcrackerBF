package ua.netcracker.netcrackerquizb.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnnouncementController {


	@GetMapping("/api")
	public String asd() {
		return "check";
	}
}
