package day08;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.List;
import lombok.AllArgsConstructor;

public class Server02 {

	private Socket socket;
	
	private List<ObjectOutputStream>list;
	
	private final String EXIT = "EXIT";
	
	public Server02(Socket socket2, List<ObjectOutputStream> list2) {
		// TODO Auto-generated constructor stub
	}

	public void receive() {
		Thread t = new Thread(()->{
			ObjectOutputStream oos;
			String id = "";
			try {
				oos = new ObjectOutputStream(socket.getOutputStream());
				list.add(oos);
				
				ObjectInputStream ois
				= new ObjectInputStream(socket.getInputStream());
				
				while(true) {
					id = ois.readUTF();
					String msg = ois.readUTF();
					
					synchronized (list) {
						for(ObjectOutputStream client : list) {
							send(client, id, msg);
						}						
						if(msg.equals(EXIT)) {
							list.remove(oos);
						}
					}
				}
			} catch (IOException e) {
				System.out.println(id + "님이 접속을 종료했습니다.");
			}
		});
		t.start();
	}
	private void send(ObjectOutputStream client, String id, String msg) {
		if(client == null || id == null || msg == null) {
			return;
		}
		
		try {
			client.writeUTF(id);
			client.writeUTF(msg);
			client.flush();
		} catch(IOException e) {
			e.printStackTrace();
		}
	}
}
