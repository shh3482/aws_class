package HomeWork;

public class Tetris {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//□ ■ ▣ ┏ ━ ┓ ┗ ┛ ┃

		int col = 10;
		int row = 12;
		int curCol = 0;
		int curRow = 0;
		
		// 좌 상
		if(curCol == 0 && curRow == 0) {
			System.out.print("┏━");
		}
		
		// 상
		for(curCol = 1; curCol < col; curCol++) {
			System.out.print("━━");
		}
		
		// 우 상
		if(curCol == col && curRow == 0) {
			System.out.println("━┓");
		}
		
		// 좌 우
		for(curRow = 0; curRow < row; curRow++) {
			System.out.print("┃");
			for (curCol = 0; curCol < col; curCol++) {
				System.out.print("  ");
				
				if(curCol == 9) {
					curCol = 11;
					System.out.print("asd");
				}
			}
			System.out.println("┃");
			
		}
		
		// 좌 하
		if(curRow == row) {
			System.out.print("┗━");
		}
		
		// 하
		for(curCol = 1; curCol < col; curCol++) {
			System.out.print("━━");
		}
		
		// 좌 하
		if(curRow == row) {
			System.out.print("━┛");
		}
		
		// 다음 블록 문구
		
	}
}

