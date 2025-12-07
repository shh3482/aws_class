package HomeWork;

import java.util.Random;
import java.util.Scanner;
import javax.sound.sampled.*;
import java.io.File;

public class HW08_BaseballGame {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 1~9 사이의 중복되지 않은 3개의 수를 생성해서 맞추느 게임
		 * 규칙
		 * S : 숫자가 있고 위치가 같음
		 * B : 숫자가 있고 위치가 다름
		 * O : 일치하는 숫자가 하나도 없음
		 * 
		 * 예시
		 * 랜덤수 :  1 5 4
		 * 입력 : 1 2 3
		 * 1S
		 * 입력 : 4 5 6
		 * 1S 1B
		 * 입력 : 7 8 9
		 * O
		 * 입력 : 1 4 5
		 * 1S 2B
		 * 입력 : 1 5 4
		 * 정답입니다.
		 */
		
		Scanner scan = new Scanner(System.in);
		int [] randomNums = pickRandomNums();
		int [] pickNums = new int[3];
		int [] diceNums = new int[2];
		int min = 1, max = 99;
		Random random = new Random();
		String [] playerName = new String[2];
		String yellow = "\u001B[33m";
		String firstTrunColor = "\u001B[38;5;117m";
		String secondTrunColor = "\u001B[38;5;218m";
		int turn = 0;
		int strike = 0, ball = 0;
		
		System.out.println(yellow + "⚾지금부터 야구 게임을 시작하겠습니다!⚾");
		SoundPlayer.playSound("sounds/win.wav");

		System.out.print(firstTrunColor + "\n플레이어 1 님의 이름을 입력하세요: ");
		playerName[0] = scan.next();
		System.out.println("⚾플레이어 1 님의 이름은 " + playerName[0] + " 입니다.");
		System.out.println("\n⚾주사위를 굴립니다!⚾");
		diceNums[0] = random.nextInt(min, max+1);
		System.out.println("⚾" +playerName[0] +" 님의 주사위는 " + diceNums[0] + " 입니다.");
		SoundPlayer.playSound("sounds/dice.wav");
		
		System.out.print(secondTrunColor + "\n플레이어 2 님의 이름을 입력하세요: ");
		playerName[1] = scan.next();
		System.out.println("⚾플레이어 2 님의 이름은 " + playerName[1] + " 입니다.");
		System.out.println("\n⚾주사위를 굴립니다!⚾");
		diceNums[1] = random.nextInt(min, max+1);
		System.out.println("⚾" +playerName[1] +" 님의 주사위는 " + diceNums[1] + " 입니다.");
		SoundPlayer.playSound("sounds/dice.wav");
		
		if (diceNums[0] > diceNums[1]) {
		    turn = 0;
		    System.out.println(yellow + "\n⚾" + playerName[turn] + " 님이 선턴입니다!⚾");
		} else {
		    turn = 1;
		    System.out.println(yellow + "\n⚾" + playerName[turn] + " 님이 선턴입니다!⚾");
		}
		
		while(true) {
			if(turn == 0) {
				firstTrunColor = "\u001B[38;5;117m";
			}
			else {
				firstTrunColor = "\u001B[38;5;218m";
			}
			strike = 0;
			ball = 0;
			
			System.out.println(firstTrunColor + "\n⚾" + playerName[turn] + " 님 차례입니다!");
			System.out.println("⚾1~9 사이의 숫자를 3개 입력하세요:");
		    inputNums(pickNums, scan);
		    
		    for(int i = 0; i < 3; i++) {
		    	if(randomNums[i] == pickNums[i]) {
		    		strike++;
		    	}
		    	else {
		    		for (int j = 0; j < 3; j++) {
		                if (i != j && randomNums[i] == pickNums[j])
		                	ball++;
		            }
		    	}
		    }
		    
		    if (strike >= 1) {
		    	SoundPlayer.playSound("sounds/strike.wav");
		    }
		    else if(ball >= 1) {
		    	SoundPlayer.playSound("sounds/ball.wav");
		    }
		    else {
		    	SoundPlayer.playSound("sounds/miss.wav");
		    }
		    
		    System.out.println("\n⚾" + playerName[turn] + " 님이 입력한 숫자는 " + pickNums[0]+ " " + pickNums[1] + " " + pickNums[2] + " 입니다.");
		    System.out.println("⚾스트라이크: " + strike + " ");
		    System.out.println("⚾볼: " + ball + " ");
		    
		    if (strike == 3) {
		        System.out.println("\n⚾ " + playerName[turn] + " 님이 승리했습니다! ⚾\r\n"
		        		+ "░░░░░░░░░░░░░░░░░░░░░░░░░░\r\n"
		        		+ "░░░█▀▀▀░█▀▀▀░░█▀▀░▀▀█░░█░░\r\n"
		        		+ "░░░█░▀█░█░▀█░░█▀▀░▄▀░░░▀░░\r\n"
		        		+ "░░░▀▀▀▀░▀▀▀▀░░▀▀▀░▀▀▀░░▀░░\r\n"
		        		+ "░░░░░░░░░░░░░░░░░░░░░░░░░░\r\n"
		        		+ "⎛⎝(•‿•)⎠⎞ ⎛⎝(•‿•)⎠⎞ ⎛⎝(•‿•)⎠⎞ ⎛⎝(•‿•)⎠⎞⎛\r\n");
		        SoundPlayer.playSound("sounds/loose.wav");
		        try {
		            Thread.sleep(3000);
		        } catch (InterruptedException e) {
		            e.printStackTrace();
		        }
		        break;
		    }
		    else {
		    turn = 1 - turn;
		    }
		}
	}
	
	public static void inputNums(int[] nums, Scanner scan) {
	    for (int i = 0; i < 3; i++) {
	        nums[i] = scan.nextInt();
	    }
	}
	
	public static int[] pickRandomNums() {
		int [] randomNums = new int[3];
		Random random = new Random();
		int min = 1, max = 9;
		for(int i = 0; i < 3; ) {
			int pickNum = random.nextInt(min, max+1);
			if(pickNum != randomNums[0] && pickNum != randomNums[1] && pickNum != randomNums[2]) {
				randomNums[i] = pickNum;
				i++;
			}
		}
		//System.err.println("⚾랜덤 숫자: " + randomNums[0] + " " + randomNums[1] + " " + randomNums[2]);
		return randomNums;
	}
	
	public class SoundPlayer {

	    public static void playSound(String path) {
	        try {
	            File soundFile = new File(path);
	            AudioInputStream audioStream = AudioSystem.getAudioInputStream(soundFile);

	            Clip clip = AudioSystem.getClip();
	            clip.open(audioStream);
	            clip.start();  // 재생 시작

	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
	}
}











