package HomeWork;

public class Tetris {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// □ ■ ▣ ┏ ━ ┓ ┗ ┛ ┃ ██
		
		/*
		 *  1. 게임을 실행시킨다. (실행전에 콘솔 창을 게임 전체 사이즈에 맞춘다.)
		 */
		

		int col = 10;
        int row = 12;
        
        // 상단 테두리
        System.out.print("┏");
        for (int i = 0; i < col; i++) {
            System.out.print("━━");
        }
        System.out.println("┓");

        // 중간 테두리
        for (int r = 0; r < row; r++) {
            System.out.print("┃");
            for (int c = 0; c < col; c++) {
                System.out.print("  ");
            }
            System.out.println("┃");
        }

        // 하단 테두리
        System.out.print("┗");
        for (int i = 0; i < col; i++) {
            System.out.print("━━");
        }
        System.out.println("┛");
    }
	
	
}

