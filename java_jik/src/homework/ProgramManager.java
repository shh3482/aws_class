package homework;

import java.util.function.Predicate;

public interface ProgramManager {

	boolean add(Object object);
	boolean remove(Object object);
	boolean update(Object object);
	Object find(Object object);
	void print(Predicate<Object> p);
	void sort();
}
