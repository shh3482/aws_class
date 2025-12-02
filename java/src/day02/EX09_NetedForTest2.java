package day02;

public class EX09_NetedForTest2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 1 2 3 4
		// 5 6 7 8
		// 9 10 11 12
		// 13 14 15 16
		
		int num = 1;
		int i = 1;
		int row = 10;
		int col = 10;
		int count = 0;
		
//		for (i = num; i <= num; i++) {
//			//System.out.println(num + " " + (num + 1) + " " + (num + 2) + " " + (num + 3)+ " ");
//			System.out.println();
//			num += 4;
//		}
		
		for (int curRow = 1; curRow <= row; curRow++ ) {
			int curCol = 1;
			for (; curCol <= col; curCol++) {
				num++;
				//
				for(int a = 1; a <= num - 1; a++) {
					if((num - 1) % a == 0) {
						count++;
					}
				}
				if(count == 2) {
					System.err.print(num - 1 + " ");
				}
				else {
					System.out.print(num - 1  + " ");
				}
				count = 0;
			}
			System.out.println();
		}
		System.out.print("(빨간색 숫자는 ");
		System.err.print("소수 ");
		System.out.print("입니다.)");
	}

}
