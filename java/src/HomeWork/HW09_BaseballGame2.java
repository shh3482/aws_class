package HomeWork;

import java.io.File;
import java.util.Random;
import java.util.Scanner;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;

import HomeWork.HW08_BaseballGame.SoundPlayer;
import Utility.ColorPool;

public class HW09_BaseballGame2 {

	final static int MAX_COUNT = 10;
	public static void main(String[] args) {
		/* 기본 게임 방식은 HW08과 동일한데 기록 관리를 추가
		 * 관리할 기록은 횟수와 입력한 이니셜
		 *  메뉴
		 *  1. 플레이
		 *  2. 기록 확인
		 *  3. 종료
		 *  메뉴 선택 : 1
		 *  //HW08에 했던 야구 게임이 진행
		 *  //정답을 맞추면 맞춘 횟수를 출력
		 *  정답입니다.
		 *  시도횟수는 4회
		 *  5등안에 들었습니다. 
		 *  이니셜을 남겨주세요 : JIK
		 *  
		 *  메뉴
		 *  1. 플레이
		 *  2. 기록 확인
		 *  3. 종료
		 *  메뉴 선택 : 2
		 *  1. JIK - 4회
		 *  메뉴
		 *  1. 플레이
		 *  2. 기록 확인
		 *  3. 종료
		 *  메뉴 선택 : 3
		 * */
		
		RankingList players[] = new RankingList[MAX_COUNT];
		int listCount = 0;
		String name = "";
		int count = 0;;
		int rank = 0;
		final char EXIT = '3';
		char menu;
		Scanner scan = new Scanner(System.in);
		

		do {
			//메뉴 출력
			printMenu();
			
			//메뉴 입력
			menu = scan.next().charAt(0);
			
			switch(menu) {
			case '1':
				play();
				break;
				
			case '2':
				System.out.println(ColorPool.YELLOW + "\n⚾기록을 확인하겠습니다.⚾\n");
				showList(players, rank);
				break;
				
			case EXIT:
				System.out.println(ColorPool.YELLOW + "\n⚾게임을 종료합니다.⚾");
				break;
				
			default:
				System.out.println(ColorPool.BRIGHT_RED +"=================");
				System.out.println("\n⚾잘못된 메뉴입니다.⚾\n");
				System.out.println("=================\n" + ColorPool.RESET);
			}
		}while(menu != EXIT);

	}
	
	public static void printMenu() {
		System.out.println(ColorPool.RESET +"====메뉴====");
		System.out.println("1. 게임 시작");
		System.out.println("2. 랭킹 확인");
		System.out.println("3. 게임 종료");
		System.out.println("===========");
		System.out.print("메뉴 입력 : ");
	}
	
	public static void showList(RankingList [] players, int listCount) {
		if (listCount != 0) {
			for(int i = 0; i < 5; i++) {
				players[i].print();
			}
		}
		else {
			System.out.println(ColorPool.BRIGHT_RED +"=============================");
			System.out.println("\n⚾랭킹에 아무도 등록되지 않았습니다.⚾\n");
			System.out.println("=============================\n" + ColorPool.RESET);
		}
//		System.out.println("=======================");
//		System.out.println("랭킹 1등 ㅎㅅㅎ 시도횟수: 1회");
//		System.out.println("랭킹 2등 ㅇㅅㅇ 시도횟수: 2회");
//		System.out.println("랭킹 3등 ㅂㅅㅂ 시도횟수: 3회");
//		System.out.println("랭킹 4등 ㅁㅅㅁ 시도횟수: 4회");
//		System.out.println("랭킹 5등 ㅋㅅㅋ 시도횟수: 5회");
////		for(int i = 0; i < 5; i++) {
////			System.out.println("랭킹 " + (i+1) + "등 " + RankingList[i].name + " 시도횟수: " + RankingList[i].count + "회");
////		}
		//System.out.println("=======================\n");
	}
	
	public static int addRanker(RankingList []players, int count, Scanner scan) {
		System.out.println("\n⚾이름을 입력하세요: ");
		String name = scan.next();
		RankingList player = new RankingList(0, name, 0);
		players[count] = player;
		count++;
		return count;
	}
	
	public static int play() {
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
		int p1Count = 0;
		int p2Count = 0;
		int playerCount = 0;
		
		System.out.println(yellow + "\n⚾지금부터 야구 게임을 시작하겠습니다!⚾");
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
		    if(turn == 0) {
		    	p1Count++;
		    	playerCount = p1Count;
		    }
		    else {
		    	p2Count++;
		    	playerCount = p2Count;
		    }
		    System.out.println("⚾" + playerName[turn] + " 님이 시도한 횟수 : " + playerCount);
		    
		    if (strike == 3) {
		    	System.out.println("\n⚾ " + playerCount + " 번 만에 정답을 맞추셨습니다!");
		        System.out.println("\n⚾ " + playerName[turn] + " 님이 승리했습니다! ⚾\r\n"
		        		+ "░░░░░░░░░░░░░░░░░░░░░░░░░░\r\n"
		        		+ "░░░█▀▀▀░█▀▀▀░░█▀▀░▀▀█░░█░░\r\n"
		        		+ "░░░█░▀█░█░▀█░░█▀▀░▄▀░░░▀░░\r\n"
		        		+ "░░░▀▀▀▀░▀▀▀▀░░▀▀▀░▀▀▀░░▀░░\r\n"
		        		+ "░░░░░░░░░░░░░░░░░░░░░░░░░░\r\n"
		        		+ "⎛⎝(•‿•)⎠⎞ ⎛⎝(•‿•)⎠⎞ ⎛⎝(•‿•)⎠⎞ ⎛⎝(•‿•)⎠⎞\r\n");
		        SoundPlayer.playSound("sounds/loose.wav");
		        
		        // 순위권시 저장기능 구현
		        // 만약에 랭킹1 or 랭킹2 or 랭킹3 or 랭킹4 or 랭킹5 보다 플레이어의 카운트가 낮을 시, 순위권 등록이 가능하다.
//		        if(player[10].count >= playerCount) {
//		        	addRanker(null, playerCount, secondTrunColor, playerCount, scan);
//		        }
		        
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
		return 0;
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

class RankingList{
	int rank;
	String name;
	int count;
	int listCount;

	void print() {
		System.out.println("=================");
		System.out.println("랭킹 : " + rank + "등 " + name + "시도 횟수 : " + count);
		System.out.println("=================");
	}
	
	//기본 생성자
	RankingList(){}
	
	//생성자 오버로딩
	RankingList(int rank1, String name1, int count1){
		rank = rank1;
		name = name1;
		count = count1;		
	}
}





