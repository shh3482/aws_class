package GroupWork;

import java.util.Scanner;

public class Main {

    static Scanner sc = new Scanner(System.in);
    static int totalPrice = 0;

    public static void main(String[] args) {

    	/*
    	 * 사람 1 - 과제
    	 * 'MenuView' 이름으로 클래스를 생성하세요.
    	 * 'public static void show()' 이름으로 메서드를 구현하세요.
    	 * 콘솔에 메뉴만 출력하면 됨.
    	 * 
    	 * 사람 2 - 과제
    	 * 'OrderMenu' 이름으로 클래스를 생성하세요.
    	 * 'public static int order(Scanner sc, int totalPrice)' 이름으로 메서드를 구현하세요.
    	 * 누적 금액 계산해서 return 하면 됨.
    	 * 
    	 * 사람 3 - 과제
    	 * 'PaymentMenu' 이름으로 클래스를 생성하세요.
    	 * 'public static void pay(Scanner sc, int totalPrice)' 이름으로 메서드를 구현하세요.
    	 * 결제 처리 후 메시지 출력
         * 
         * 메뉴 목록
         * 1. Americano             3000원
         * 2. Caffe Latte           3500원
         * 3. Cappuccino            4000원
         * 4. Vanilla Latte         4500원
         * 5. Caramel Macchiato     5000원
         * 6. Mocha                 5500원
         * 7. Green Tea Latte       6000원
         * 8. Peach Iced Tea        6500원
         * 9. Strawberry Smoothie   7000원
         * 
    	 */
    	
        boolean running = true;

        while (running) {
            System.out.println("\n[ Cafe Java ]");
            System.out.println("─────────────");
            System.out.println("1. 메뉴 조회");
            System.out.println("2. 주문하기");
            System.out.println("3. 결제하기");
            System.out.println("0. 종료");
            System.out.print("선택: ");

            int select = sc.nextInt();

            switch (select) {
            
                case 1: // 메뉴 기능

                    break;

                case 2: // 주문 기능

                    break;
                    
                case 3: // 결제 기능

                    break;
                    
                case 0:
                    running = false;
                    break;
                    
                default:
                    System.out.println("잘못된 입력입니다.");
            }
        }
    }
}

