package day02;

public class HW02_Star {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 샘플 코드를 참고하여 아래와 같이 출력 되도록 코드를 작성하세요.
		int row = 5;
		int col = 5;
		int target;
		int curRow;
		int curCol;
		int a;
		
		/*  *****
		 *  *****
		 *  *****
		 *  *****
		 *  *****
		 */
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				System.out.print("*");
			}
			System.out.println();
		}
		System.out.println();
		
		
		
		/*  *
		 *  **
		 *  ***
		 *  ****
		 *  *****
		 */
		row = 5;
		col = 5;
		target = 0;
		a = 4;
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				target++;
				if (target > a) {
					System.out.print("*");
				}
			}
			System.out.println();
			a--;
		}
		System.out.println();
		
		
		
		/*      *
		 *     **
		 *    ***
		 *   ****
		 *  *****
		 */
		row = 5;
		col = 5;
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				System.out.print("*");
			}
			System.out.println();
		}
		System.out.println();
		
		
		
		/*       *
		 * 		***
		 *     ******
		 *    ********
		 *   **********
		 */
		row = 5;
		col = 10;
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				System.out.print("*");
			}
			System.out.println();
		}
		System.out.println();
	}
}
