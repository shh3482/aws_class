package day08;

import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Scanner;

public class EX04_Client {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		final int PORT = EX04_Server.PORT;
		final String IP = "192.168.0.191";
		
		try {
			Scanner scan = new Scanner(System.in);
			System.out.println("아이디 : ");
			String id = scan.nextLine();
			
			Socket socket = new Socket(IP, PORT);
			
			ObjectOutputStream oos
			= new ObjectOutputStream(socket.getOutputStream());
			oos.writeUTF(id);
			oos.flush();
			
			Client02 c = new Client02(socket, id);
			c.send();
			c.recieve();
		}
		catch(Exception e){
			
		}
	}

}
