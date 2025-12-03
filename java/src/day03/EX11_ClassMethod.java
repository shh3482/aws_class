package day03;

import java.awt.event.KeyEvent;

public class EX11_ClassMethod {

	private static final char P = 0;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 필드와 메서드
		 * - 
		 */
		
		MyCar car = new MyCar();
		car.turnOn();
		car.turnOff();
		car.turnOn();
		car.changeGear('P');
		car.changeGear('D');
		car.changeGear('R');
		car.changeGear('N');
		
		for(int i=0; i<=5; i++) {
			car.speedUp();
		}
		System.out.println("현재 속력은 " + car.speed + " km/h 입니다.");
		
		car.turnOff();
		
		for(int i=0; i<=5; i++) {
			car.speedDown();
		}
		System.out.println("현재 속력은 " + car.speed + " km/h 입니다.");
		
		car.turnOff();
	}

}

class MyCar{
	
	String company, name, color;
	int speed;
	char gear;
	boolean power;
	
	void turnOn() {
		power = true;
		System.out.println("부르릉~");
	}
	
	void turnOff() {
		if(speed == 0) {
			power = false;
			System.out.println("조용...");
		}
	}
	
	void changeGear(char nextGear) {
		switch(nextGear) {
		case 'p':
			gear = nextGear;
			System.out.println("기어가 주차로 변경됐습니다.");
			break;
		case 'D':
			gear = nextGear;
			System.out.println("기어가 주행으로 변경됐습니다.");
			break;
		case 'R':
			gear = nextGear;
			System.out.println("기어가 후진으로 변경됐습니다.");
			break;
		case 'N':
			gear = nextGear;
			System.out.println("기어가 중립으로 변경됐습니다.");
			break;
		default:
			System.out.println("기어가 고장났습니다.");
		}
	}
	
	void speedUp() {
		speed++;
	}
	
	void speedDown() {
		if (speed > 0) {
			speed--;			
		}
	}
	
}


















