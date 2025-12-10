package day08;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EX04_Server {

	public static final int PORT = 6000;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			ServerSocket serverSocket = new ServerSocket(PORT);
			List<ObjectOutputStream> list
			= new ArrayList<ObjectOutputStream>();
			
			
			while(true) {
				Socket socket = serverSocket.accept();
				
				ObjectInputStream ois
				= new ObjectInputStream(socket.getInputStream());
				String id = ois.readUTF();
				
				System.out.println("[클라이언트가 접속했습니다.]");
				
				Server02 server = new Server02(socket, list);
				server.receive();
				}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//t.start();

}
