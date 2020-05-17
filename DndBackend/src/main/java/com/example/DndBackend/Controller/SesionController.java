package com.example.DndBackend.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DndBackend.Model.Caracter;
import com.example.DndBackend.Model.Sesion;
import com.example.DndBackend.Service.SesionService;

@CrossOrigin(origins = "http://86.121.209.212:4200", maxAge = 3600)
@RestController
public class SesionController {
	
	private static final String  urlSesion = "sesion";

	private SesionService sesionServ = SesionService.getInstance();

	@GetMapping(value = urlSesion, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<?> getHosts(){
		return new ResponseEntity<Sesion[]>(sesionServ.getHosts(), HttpStatus.OK);
	}
	
	@GetMapping(value = urlSesion + "/{host}", produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<?> getParticipants(@PathVariable(name ="host") String hostName){
		return new ResponseEntity<List<Caracter>>(sesionServ.getAllCaracters(hostName), HttpStatus.OK);
	}
	
	@GetMapping(value = urlSesion + "/{host}/{campainName}", produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<?> checkHost(@PathVariable(name ="host") String hostName, 
								@PathVariable(name ="campainName") String campainName){
		return new ResponseEntity<Boolean>(sesionServ.isHostOn(hostName, campainName), HttpStatus.OK);
	}

	@PostMapping(value = urlSesion + "/{host}/{campainName}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createHost( @PathVariable(name ="host") String hostName, 
									  @PathVariable(name ="campainName") String campainName){
		System.out.println("Server a primit comanda! Add Host:" + hostName + ", " + campainName);
		sesionServ.addHost(hostName, campainName);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping(value = urlSesion + "/{host}/{campainName}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> joinHost(  @PathVariable(name ="host") String hostName, 
										@RequestBody Caracter character){
		System.out.println("Server a primit comanda! Join Host:" + hostName + " from " + character.getUser() + " with character: "+character.getName());
		try{
			return new ResponseEntity<List<Caracter>>( sesionServ.joinAtHost(hostName, character) , HttpStatus.OK );
		}
		catch(Exception e){
			return new ResponseEntity<>(e , HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping(value = urlSesion + "/{host}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> leaveHost(  @PathVariable(name ="host") String hostName, 
										@RequestBody Caracter character){
		System.out.println("Server a primit comanda! Leave Host:" + hostName + " from " + character.getUser());
		sesionServ.leaveHost(hostName, character);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping(value = urlSesion + "/{host}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> closeHost( @PathVariable(name ="host") String hostName){
		System.out.println("Server a primit comanda! delete Host:" + hostName);
		sesionServ.closeHost(hostName);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
