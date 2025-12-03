package day03;

public class EX04_ArrayCopy {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* 배열 복사하기
		 * 1. 반복문을 이용하여 직접 구현
		 * 2. System.arraycopy(src, srcPos, dest, destPos, length)를 이용 (218페이지)
		 *   - src : 복사할 배열
		 *   - srcPos : 복사할 배열의 시작 위치. 배열에서 몇번지에서 복사할건지
		 *   - dest : 복사해서 붙여넣을 배열
		 *   - destPos : 붙여넣을 시작 위치
		 *   - length : 복사할 개수
		 */
		int arr1[] = {1, 2, 3};
		int arr2[] = arr1;
		// 참조형 변수는 =을 통해 복사를 하면 원본이 바뀌면 복사본도 함께 변경(공유한 값이 변경)
		// 참조형 변수는 =을 통해 주소를 복사해오기 때문에 같은 배열을 공유
		System.out.println(arr1[0]);
		System.out.println(arr2[0]);
		
		arr1[0] = 100;
		
		System.out.println(arr1[0]);
		System.out.println(arr2[0]);
		
		arr1 = new int[] {1,2,3};
		int arr3[] = new int[arr1.length];
		for (int i = 0; i < arr1.length; i++) {
			arr3[i] = arr1[i];
		}
		System.out.println(arr1[0]);
		System.out.println(arr3[0]);
		
		arr1[0] = 100;
		
		System.out.println(arr1[0]);
		System.out.println(arr3[0]);
		
		arr1 = new int[] {1,2,3};
		int arr4[] = new int[arr1.length];
		System.out.println(arr1[0]);
		System.out.println(arr4[0]);
		
		arr1[0] = 100;
		
		System.out.println(arr1[0]);
		System.out.println(arr4[0]);
	}

}
