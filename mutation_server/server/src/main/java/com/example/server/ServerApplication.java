package com.example.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

	@RestController
	@RequestMapping("/mutation")
	public class HomeController {
		@PostMapping("/")
		public String postBody(@RequestBody String data) {


			// String[][] matriz = new String[6][6];
			// char[] array = data.getAdn().toCharArray();
			for (int i = 0; i < 6; i++) {
				for (int j = 0; j < 6; j++) {
					// matriz[i][j] = array;
				}
			}

			// En caso de ser dinámico, aún no terminado
			// String[][] info = new String[data.getM()][data.getN()];

			// int dat = 0;
			// String[] dar = data.getAdn().split(",");
			// for (int i = 0; i < data.getM(); i++) {
			// for (int j = 0; j < data.getN(); j++) {
			// info[i][j] = dar[dat];
			// if ((dat - 1) == data.getAdn().length())
			// break;
			// dat++;
			// }
			// }

			// for (int i = 0; i < info.length; i++) {
			// for (int j = 0; j < info[i].length; j++) {
			// System.out.print(info[i][j] + " ");
			// }
			// System.out.println();
			// }

			// int n = data.getM() * data.getN();

			return data;
		}
	}
}
