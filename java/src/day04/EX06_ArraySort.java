package day04;

public class EX06_ArraySort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 배열 정렬
		 * - 정렬 방법은 매우 많음 => 알고리즘에서 배움
		 * - 설명이 쉬운 버블 정렬
		 *   - 옆에 수와 크기를 비교하여 위치를 바꿈
		 *   - 효율이 가장 안좋음
		 */
		
		int num1 = 10, num2  = 20;
		int a = num1;
		a = num1;
		System.out.println(a);
		a = num2;
		System.out.println(a);
		
		// 1 3 5 7 9 2 4 6 8 10
		
		int arr[] = {1,3,5,7,9,2,4,6,8,10};
		
		for(int i = 0; i < arr.length -1; i++) {
			for(int j = 0; j < arr.length -1; j++) {
				if(arr[j] < arr[j+1]) {
					int tmp1 = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = tmp1;
				}
			}
			for(int num : arr) {
				System.out.print(num + " ");
			}
			System.out.println();
		}
		
	}

}
