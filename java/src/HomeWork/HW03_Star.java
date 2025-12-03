package HomeWork;

public class HW03_Star {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 샘플 코드를 참고하여 아래와 같이 출력 되도록 코드를 작성하세요.
		int row = 5;
		int col = 5;
		int target;
		int curRow;
		int curCol;
		int a;
		int b;
		int c;
		
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
		a = 1;
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				if (curCol <= a) {
					System.out.print("*");
				}
			}
			a++;
			System.out.println();
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
		a = 4;
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				if (curCol <= a) {
					System.out.print(" ");
				}
				else {
					System.out.print("*");
				}
			}
			a--;
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
		a = 5;
		b = 0;
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				if (curCol <= a) {
					System.out.print(" ");
				}
				else if (curCol > col - a + 1) {
					System.out.print(" ");
				}
				else {
					System.out.print("*");
				}
			}
			a--;
			System.out.println();
		}
		System.out.println();
		
		/*               *                        
                        ***                       
                       *****                      
                      *******                     
                     *********                    
                    ***********                   
                   *************                  
**************************************************
 ***********************************************  
    *****************************************     
       ***********************************        
          *****************************           
             ***********************              
            *************************             
           ***************************            
          *****************************           
         ************       ************          
        *********               *********         
       ******                       ******        
      ***                               ***       
      *
		 * 50 * 21
		 */ 

		col = 50;
		row = 21;
		a = 25;
		b = 1;
		c = 25;
		int d = 25;
		int e = 25;
		
		for(curRow = 1; curRow <= row; curRow++) {
			for(curCol = 1; curCol <= col; curCol++) {
				if (
					// 좌상 빈칸
					(curCol <= a && curRow <= 7)
					// 우상 빈칸
					|| (curCol >= col - a && curRow <= 7)
					// 좌중 빈칸
					|| (curCol <= b && curRow <= 12 && curRow > 8)
					// 우중 빈칸
					|| (curCol >= col - b && curRow <= 12 && curRow > 8)
					// 좌하 빈칸
					|| (curCol <= b && curRow <= row && curRow > 12)
					// 우하 빈칸
					|| (curCol >= col - b && curRow <= row && curRow > 12)
					)
					{
					System.out.print(" ");
				}
				// 좌하 빈칸
				else if (curCol > c && curCol <= 25 && curRow > 12) {
					System.out.print(" ");
				}
				// 우하 별
				else if (curCol >= d && curCol >= 25 && curRow > 12) {
					System.out.print("*");
				}
				// 좌하 별
				else if (curCol < e && curCol <= 25 && curRow > 12) {
					System.out.print("*");
				}
				else if (curCol > c && curCol >= 25 && curRow > 12) {
					System.err.print(" ");
				}
				else {
					System.out.print("*");
				}
			}
			if (curRow <= 7) {
				a--;				
			}
			else if (curCol > b && curRow <= 12 && curRow > 8) {
				b += 3;
				c += 3;
				d -= 3;
				e += 3;
			}
			else if(curCol > b && curRow <= row && curRow > 12) {
				b -= 1;
				c -= 4;
				d += 4;
				e -= 4;
			}

			
			System.out.println();
		}
		System.out.println();
	}
}
